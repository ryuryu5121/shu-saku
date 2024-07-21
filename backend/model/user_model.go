// package model

// import (
// 	"os"
// 	"time"

// 	"github.com/gin-gonic/gin"
// 	"github.com/golang-jwt/jwt/v4"
// 	"golang.org/x/crypto/bcrypt"
// 	"gorm.io/gorm"
// )

// type User struct {
// 	ID       uint   `json:"id" gorm:"primaryKey"`
// 	Name     string `json:"name"`
// 	Password string `json:"-"`
// 	Email    string `json:"email"`
// 	Belong   string `json:"belong"`
// }

// func GetAllUser(db *gorm.DB) ([]User, error) {
// 	var users []User
// 	result := db.Find(&users)
// 	return users, result.Error
// }

// func AuthenticateUser(c *gin.Context, db *gorm.DB) {
// 	var loginUser struct {
// 		Name     string `json:"name"`
// 		Password string `json:"password"`
// 	}

// 	if err := c.BindJSON(&loginUser); err != nil {
// 		c.JSON(400, gin.H{"error": err.Error()})
// 		return
// 	}

// 	var foundUser User
// 	if err := db.Where("name = ?", loginUser.Name).First(&foundUser).Error; err != nil {
// 		c.JSON(401, gin.H{"error": "User not found"})
// 		return
// 	}

// 	if err := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(loginUser.Password)); err != nil {
// 		c.JSON(401, gin.H{"error": "Invalid password"})
// 		return
// 	}

// 	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
// 		"id":     foundUser.ID,
// 		"name":   foundUser.Name,
// 		"belong": foundUser.Belong,
// 		"exp":    time.Now().Add(time.Hour * 24).Unix(),
// 	})

// 	jwtSecret := os.Getenv("JWT_SECRET")
// 	if jwtSecret == "" {
// 		c.JSON(500, gin.H{"error": "JWT Secret not found"})
// 		return
// 	}

// 	tokenString, err := token.SignedString([]byte(jwtSecret))
// 	if err != nil {
// 		c.JSON(500, gin.H{"error": "Error while generating token"})
// 		return
// 	}

// 	c.JSON(200, gin.H{"token": tokenString})
// }


package model

import (
	// "github.com/gin-gonic/gin"
	// "gorm.io/driver/postgres"
	"gorm.io/gorm"
	"strconv"
)

type User struct {
	gorm.Model
	Name       string
	Email      string
	Belong     string
	Selections []Selection `gorm:"foreignKey:UserID"`
}

type Company struct {
	gorm.Model
	ID         uint
	Name       string
	MypageUrl  string
	MypageID   string
	MypagePassword string
	SelectionTime uint
	Selections []Selection `gorm:"foreignKey:CompanyID"`
}

type Selection struct {
	gorm.Model
	UserID    uint
	CompanyID uint
	Status    uint
	MypageID   string
	MypagePassword string
	User      User    `gorm:"foreignKey:UserID"`
	Company   Company `gorm:"foreignKey:CompanyID"`
}

func GetSelectionData(userID string) ([]map[string]interface{}, error) {
	id, err := strconv.Atoi(userID)
	if err != nil {
		// userIDが有効な数値でない場合、エラーを返す
		return nil, err
	}
	var user User
	if result := Db.Preload("Selections.Company").First(&user, "id = ?", id); result.Error != nil {
		return nil, result.Error
	}

	userData := map[string]interface{}{
		"UserName": user.Name,
		"Belong":   user.Belong,
		"Company":  []map[string]interface{}{},
	}

	// ユーザーに関連する各選択についてループ
	for _, selection := range user.Selections {
		companyData := map[string]interface{}{
			"CompanyID":   selection.Company.ID,
			"CompanyName": selection.Company.Name,
			"MypageUrl":   selection.Company.MypageUrl,
			"Status":      selection.Status,
			"MypageID":    selection.MypageID,
			"MypagePassword": selection.MypagePassword,
		}
		// `Company`リストに企業のデータを追加
		userData["Company"] = append(userData["Company"].([]map[string]interface{}), companyData)
	}

	// 最終的に、このユーザーのデータのみを含むスライスを返す
	responseData := []map[string]interface{}{userData}

	return responseData, nil // データとエラーがないことを示すためにnilを返します。
}
