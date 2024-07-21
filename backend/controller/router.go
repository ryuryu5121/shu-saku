package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	// "github.com/appleboy/gin-jwt/v2"
)

func GetRouter() *gin.Engine {
	// jwtMiddleware, err := newJwtMiddleware()
    // if err != nil {
    //     log.Fatal(err)
    // }

    r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Reactアプリのオリジン
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	config.AllowCredentials = true

	r.Use(cors.New(config))

    // r.POST("/signup", signupHandler)
    // r.POST("/login", jwtMiddleware.LoginHandler)
    // r.GET("/mypage/:id", jwtMiddleware.MiddlewareFunc(), mypageHandler)
	r.GET("/users/:id", ShowHaveSelection)
	r.GET("/users/:id/companies/:company_id", ShowCompanyDetail)
	r.POST("/companies", SetCompanyData)

	return r
}
