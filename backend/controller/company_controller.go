package controller

import (
	"net/http"
	"github.com/ryuryu5121/shu-saku/backend/model"
	"github.com/gin-gonic/gin"
)

type SelectionCompanyRequest struct {
	CompanyName    string `json:"company_name"`
	MypageID       string `json:"mypage_id"`
	MypagePassword string `json:"mypage_password"`
	MypageUrl      string `json:"mypage_url"`
	SelectionTime  string `json:"selection_time"`
}

type SelectionCompanyRequest struct {
	// Company 情報
	CompanyName    string `json:"company_name"`
	MypageUrl      string `json:"mypage_url"`
	SelectionTime  string `json:"selection_time"`

	// Selection 情報
	UserID         uint   `json:"user_id"`
	MypageID       string `json:"mypage_id"`
	MypagePassword string `json:"mypage_password"`
}

func ShowCompanyDetail(c *gin.Context) {
	userID := c.Param("id")
	companyID := c.Param("company_id")
	data, err := model.GetCompanyDetail(userID, companyID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
	}
	c.JSON(http.StatusOK, data)
}

func SetSelectionCompanyData(c *gin.Context) {
	var requestBody SelectionCompanyRequest
	if err := c.BindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := model.RegistData(&requestBody); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to register company"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Company registered successfully"})
}
