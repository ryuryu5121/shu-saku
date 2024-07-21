package controller

import (
	"github.com/gin-gonic/gin"
	// "github.com/appleboy/gin-jwt/v2"
)

func GetRouter() *gin.Engine {
	// jwtMiddleware, err := newJwtMiddleware()
    // if err != nil {
    //     log.Fatal(err)
    // }

    r := gin.Default()

    // r.POST("/signup", signupHandler)
    // r.POST("/login", jwtMiddleware.LoginHandler)
    // r.GET("/mypage/:id", jwtMiddleware.MiddlewareFunc(), mypageHandler)
	r.GET("/users/:id", ShowHaveSelection)
	r.GET("/users/:id/companies/:company_id", ShowCompanyDetail)
	r.POST("/companies", SetCompanyData)

	return r
}
