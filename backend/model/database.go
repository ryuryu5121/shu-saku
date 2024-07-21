package model

import (
	"log"
	"os"
	"fmt"

	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)

var Db *gorm.DB

func InitDB() {
	dsn := os.ExpandEnv("host=${DB_HOST} user=${POSTGRES_USER} port=${DB_PORT} password=${POSTGRES_PASSWORD} dbname=${POSTGRES_DB} sslmode=disable")
	var err error
	Db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	err = Db.AutoMigrate(&User{}, &Company{}, &Selection{})
	if err != nil {
		log.Fatalf("Failed to perform auto migration: %v", err)
	}

	fmt.Println("Successfully connected to database and performed migrations")

}

