package controller

import (
	"net/http"
	"github.com/ryuryu5121/shu-saku/backend/model"
	"github.com/gin-gonic/gin"
)

// func ShowAllUser(c *gin.Context) {
// 	data := model.GetAllUser()
// 	c.JSON(http.StatusOK, data)
// }

func ShowHaveSelection(c *gin.Context) {
	userID := c.Param("id")
	data, error := model.GetSelectionData(userID)
	if error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": error.Error()})
        return
	}
	c.JSON(http.StatusOK, data)
}