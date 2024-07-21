package model

// type Company struct {
// 	ID        uint   `json:"id" gorm:"primaryKey"`
// 	Name      string `json:"name"`
// 	MypageUrl string `json:"mypageurl"`
// }

// type Selection struct {
// 	UserID    uint `json:"userId"`
// 	CompanyID uint `json:"companyId"`
// 	Status    int  `json:"status"`
// }

// func GetAllCompany() (data []Company) {
// 	result := Db.Find(&data)
// 	if result.Error != nil {
// 		panic(result.Error)
// 	}
// 	return data
// }

import (
	// "github.com/gin-gonic/gin"
	// "gorm.io/driver/postgres"
	"strconv"
)

func GetCompanyDetail(userIDStr, companyIDStr string) (map[string]interface{}, error) {
	userID, err := strconv.Atoi(userIDStr)
	if err != nil {
		// userIDが有効な数値でない場合、エラーを返す
		return nil, err
	}

	companyID, err := strconv.Atoi(companyIDStr)
	if err != nil {
		// companyIDが有効な数値でない場合、エラーを返す
		return nil, err
	}

	var selection Selection
	if result := Db.Preload("Company").First(&selection, "user_id = ? AND company_id = ?", userID, companyID); result.Error != nil {
		return nil, result.Error
	}

	userData := map[string]interface{}{
        "CompanyName":   selection.Company.Name,
        "SelectionTime": selection.Company.SelectionTime,
        "Status":        selection.Status,
        "MypageUrl":     selection.Company.MypageUrl,
    }


	return userData, nil // データとエラーがないことを示すためにnilを返します。
}

func RegistSelectionCompany(data *SelectionCompanyRequest) error {
	company := Company{
		Name:         data.CompanyName,
		MypageUrl:    data.MypageUrl,
		SelectionTime: data.SelectionTime,
	}

	result := Db.Create(&company)
	if result.Error != nil {
		return result.Error
	}

	selection := Selection{
		UserID:         1,
		CompanyID:      company.ID
		MypageID:       data.MypageID,
		MypagePassword: data.MypagePassword,
	}

	result := Db.Create(&selection)
	if result.Error != nil {
		return result.Error
	}

	return nil
}