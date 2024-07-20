package main

import (
	"log"
	"net/http"
	"os"
	"database/sql"

	// "github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type User struct {
	ID int `JSON:"id"`
	Name string `JSON:"name"`
	Email string `JSON:"email"`
	Belong string `JSON:"belong"`
}

type Company struct {
	ID int `JSON:"id"`
	Name string `JSON:"name"`
	MypageUrl string `JSON:"mypageurl"
}

type Selection struct {
	UserID int `JSON:"userId"
	CompanyID int `JSON:"companyId"`
	Status int `JSON:"status"`
}

func setupDB(dbDriver string, dsn string) (*sql.DB, error) {
	db, err := sql.Open(dbDriver, dsn)
	if err != nil {
		return nil, err
	}
	return db, err
}

func main() {
	dbDriver := "postgres"
	dsn := os.ExpandEnv("host=${DB_HOST} user=${POSTGRES_USER} port=${DB_PORT} password=${POSTGRES_PASSWORD} dbname=${POSTGRES_DB} sslmode=disable")
	db, err := setupDB(dbDriver, dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		rows, err := db.Query("SELECT id, name FROM users")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer rows.Close()
		var users []User
		for rows.Next() {
			var user User
			if err := rows.Scan(&user.ID, &user.Name); err!= nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			users = append(users, user)
		}
		c.JSON(http.StatusOK, users)
	})

	// // CORS ミドルウェアの設定
	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://localhost:3000"}
	// config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}
	// r.Use(cors.New(config))

	// r.GET("/", func(c *gin.Context) {
	// 	c.String(http.StatusOK, "Hello member")
	// })

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(r.Run(":" + port))
}