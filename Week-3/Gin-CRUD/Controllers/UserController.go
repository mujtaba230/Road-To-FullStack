package controllers

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "my-gin-app/Models"
)

var users = []models.User{
    {ID: "1", Name: "Alice", Email: "alice@example.com"},
    {ID: "2", Name: "Bob", Email: "bob@example.com"},
}

func GetUsers(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, users)
}

func GetUserByID(c *gin.Context) {
    id := c.Param("id")
    for _, user := range users {
        if user.ID == id {
            c.IndentedJSON(http.StatusOK, user)
            return
        }
    }
    c.JSON(http.StatusNotFound, gin.H{"message": "user not found"})
}

func CreateUser(c *gin.Context) {
    var newUser models.User
    if err := c.BindJSON(&newUser); err != nil {
        return
    }
    users = append(users, newUser)
    c.IndentedJSON(http.StatusCreated, newUser)
}

func UpdateUser(c *gin.Context) {
    id := c.Param("id")
    var updatedUser models.User
    if err := c.BindJSON(&updatedUser); err != nil {
        return
    }

    for i, user := range users {
        if user.ID == id {
            users[i] = updatedUser
            c.JSON(http.StatusOK, updatedUser)
            return
        }
    }

    c.JSON(http.StatusNotFound, gin.H{"message": "user not found"})
}


func DeleteUser(c *gin.Context) {
    id := c.Param("id")
    for i, user := range users {
        if user.ID == id {
            users = append(users[:i], users[i+1:]...)
            c.JSON(http.StatusOK, gin.H{"message": "user deleted"})
            return
        }
    }

    c.JSON(http.StatusNotFound, gin.H{"message": "user not found"})
}
