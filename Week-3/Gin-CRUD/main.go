package main

import (
	"my-gin-app/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	routes.RegisterUserRoutes(r)
	r.Run() 
}
