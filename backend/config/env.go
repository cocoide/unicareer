package config

import "github.com/joho/godotenv"

func NewEnv(){
	err  := godotenv.Load(".env")
	if err != nil {
		panic("failed to load .env file: " + err.Error())
	}
}