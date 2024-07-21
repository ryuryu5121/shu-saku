package controller

// import (
// 	"net/http"
// 	"github.com/ryuryu5121/shu-saku/backend/model"
// 	"github.com/gin-gonic/gin"
// 	"github.com/appleboy/gin-jwt/v2"
// 	"gorm.io/gorm"
// 	"gorm.io/driver/postgres"
// )

// func signupHandler(c *gin.Context) {
//     var user model.User
//     if err := c.ShouldBindJSON(&user); err != nil {
//         c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//         return
//     }

//     if err := Db.Create(&user).Error; err != nil {
//         c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not create user"})
//         return
//     }

//     c.JSON(http.StatusOK, gin.H{"message": "User created successfully", "user_id": user.ID})
// }

// func newJwtMiddleware() (*jwt.GinJWTMiddleware, error) {
//     return jwt.New(&jwt.GinJWTMiddleware{
//         Realm:       "test zone",
//         Key:         []byte("secret key"),
//         Timeout:     time.Hour * 24,
//         MaxRefresh:  time.Hour * 24 * 7,
//         IdentityKey: "id",
//         PayloadFunc: func(data interface{}) jwt.MapClaims {
//             if v, ok := data.(uint); ok {
//                 return jwt.MapClaims{
//                     "id": v,
//                 }
//             }
//             return jwt.MapClaims{}
//         },
//         IdentityHandler: func(c *gin.Context) interface{} {
//             claims := jwt.ExtractClaims(c)
//             return claims["id"].(float64)
//         },
//         Authenticator: func(c *gin.Context) (interface{}, error) {
//             var loginVals struct {
//                 Name     string `json:"name"`
//                 Password string `json:"password"`
//             }
//             if err := c.ShouldBind(&loginVals); err != nil {
//                 return "", jwt.ErrMissingLoginValues
//             }
//             var user model.User
//             if err := Db.Where("name = ? AND password = ?", loginVals.Name, loginVals.Password).First(&user).Error; err != nil {
//                 return nil, jwt.ErrFailedAuthentication
//             }
//             return user.ID, nil
//         },
//         Authorizator: func(data interface{}, c *gin.Context) bool {
//             return true
//         },
//         Unauthorized: func(c *gin.Context, code int, message string) {
//             c.JSON(code, gin.H{
//                 "code":    code,
//                 "message": message,
//             })
//         },
//         TokenLookup:   "header: Authorization, query: token, cookie: jwt",
//         TokenHeadName: "Bearer",
//         TimeFunc:      time.Now,
//     })
// }

// func mypageHandler(c *gin.Context) {
//     claims := jwt.ExtractClaims(c)
//     userID := uint(claims["id"].(float64))
//     paramID := c.Param("id")

//     if paramID != "" && paramID != string(userID) {
//         c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
//         return
//     }

//     var user model.User
//     if err := Db.First(&user, userID).Error; err != nil {
//         if errors.Is(err, gorm.ErrRecordNotFound) {
//             c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
//         } else {
//             c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
//         }
//         return
//     }

//     c.JSON(http.StatusOK, gin.H{
//         "id":   user.ID,
//         "name": user.Name,
//     })
// }
