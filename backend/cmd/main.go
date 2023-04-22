package main

import (
	"net/http"
	"unicareer/config"

	"github.com/labstack/echo"
)

func main() {
		e := echo.New()
		config.NewEnv()
		
		e.GET("/", func(c echo.Context) error {
			return c.String(http.StatusOK, "Hello")
		})
		e.Logger.Fatal(e.Start(":8080"))
}