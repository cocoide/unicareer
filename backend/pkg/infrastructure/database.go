package database

import (
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func NewDatabase() (*gorm.DB, error) {
	USER := os.Getenv("DB_USER")
	PASS := os.Getenv("DB_PASS")
	HOST := os.Getenv("DB_HOST")
	PORT := os.Getenv("DB_PORT")
	DSN := USER + ":" + PASS + "@tcp(" + HOST + ":" + PORT + ")/mydb?charset=utf8mb4&parseTime=True&loc=Asia%2FTokyo"
	db, err := gorm.Open(
		mysql.Open(DSN),
		&gorm.Config{DisableForeignKeyConstraintWhenMigrating: true},
	)
	if err != nil {
		return nil, err
	}
	log.Print("databse connected !!")
	return db, nil
}
