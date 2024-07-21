// package main

// import (
// 	"log"
// 	"net/http"
// 	"os"

// 	"github.com/gin-gonic/gin"
// 	"gorm.io/gorm"
// 	"gorm.io/driver/postgres"
// 	"backend/controller"
// )

// type User struct {
// 	ID     uint   `json:"id" gorm:"primaryKey"`
// 	Name   string `json:"name"`
// 	Email  string `json:"email"`
// 	Belong string `json:"belong"`
// }

// type Company struct {
// 	ID        uint   `json:"id" gorm:"primaryKey"`
// 	Name      string `json:"name"`
// 	MypageUrl string `json:"mypageurl"`
// }

// type Selection struct {
// 	UserID    uint `json:"userId"`
// 	CompanyID uint `json:"companyId"`
// 	Status    int  `json:"status"`
// }

// func setupDB(dsn string) (*gorm.DB, error) {
// 	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
// 	if err != nil {
// 		return nil, err
// 	}
// 	// 自動マイグレーション
// 	db.AutoMigrate(&User{}, &Company{}, &Selection{})
// 	return db, nil
// }

// func main() {
// 	dsn := os.ExpandEnv("host=${DB_HOST} user=${POSTGRES_USER} port=${DB_PORT} password=${POSTGRES_PASSWORD} dbname=${POSTGRES_DB} sslmode=disable")
// 	db, err := setupDB(dsn)
// 	if err != nil {
// 		log.Fatalf("Failed to connect to database: %v", err)
// 	}

// 	r := gin.Default()

// 	r.GET("/", func(c *gin.Context) {
// 		var users []User
// 		result := db.Find(&users)
// 		if result.Error != nil {
// 			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
// 			return
// 		}
// 		c.JSON(http.StatusOK, users)
// 	})

// 	port := os.Getenv("PORT")
// 	if port == "" {
// 		port = "8080"
// 	}

// 	log.Fatal(r.Run(":" + port))
// }

package main

import (
	"log"
	"os"
	"github.com/ryuryu5121/shu-saku/backend/controller"
	"github.com/ryuryu5121/shu-saku/backend/model"
)

func main() {
	model.InitDB()
	router := controller.GetRouter()
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(router.Run(":" + port))
}