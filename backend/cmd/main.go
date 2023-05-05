package main

import (
	"net/http"
	"unicareer/config"
	database "unicareer/pkg/infrastructure"

	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	config.NewEnvFile()
	database.NewDatabase()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello")
	})
	e.Logger.Fatal(e.Start(":8080"))
}
