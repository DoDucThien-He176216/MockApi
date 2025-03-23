const mongoose = require("mongoose");

const PurchaseOrderSchema = new mongoose.Schema({
  "code": string,
  "branchId": int,
  "branchName": string,
  "purchaseDate": datetime,
  "discountRatio": long,
  "total": int,
  "supplierId": long,
  "supplierName": string,
  "supplierCode": string,
  "partnerType": string,
  "purchaseById": long,
  "purchaseName": string,
  "purchaseOrderDetails": [
    {
      "productId": long,
      "productCode": string,
      "productName": string,
      "quantity": double,
      "price": decimal,
      "discount": string,
      "serialNumbers": string,
      "productBatchExpire": {
        "id": long,
        "productId": long,
        "batchName": string,
        "fullNameVirgule": string,
        "createdDate": datetime,
        "expireDate": datetime
      }
    }
  ],
  "payments": [
    {
      "id": long,
      "code": string,
      "method": string,
      "status": int,
      "statusValue": string,
      "transDate": datetime
    }
  ]
});

module.exports = mongoose.model("PurchaseOrder", PurchaseOrderSchema);

/*
{
    "total": 2,
    "pageSize": 20,
    "data": [
        {
            "id": 4021259,
            "retailerId": 500370926,
            "code": "PN000001",
            "description": "",
            "branchId": 146868,
            "branchName": "Chi nhánh trung tâm",
            "purchaseDate": "2023-11-09T14:20:46.6700000",
            "discount": 0.0000,
            "discountRatio": 0,
            "total": 63936.0000,
            "totalPayment": 0,
            "status": 3,
            "createdDate": "2023-11-09T14:20:46.7830000",
            "purchaseById": 190133,
            "purchaseName": "Bùi Thị Hải Yến ",
            "exReturnSuppliers": 0.0000,
            "exReturnThirdParty": 0.0000,
            "purchaseOrderDetails": [
                {
                    "productId": 15885762,
                    "productCode": "SP000003{DEL}",
                    "productName": "12312",
                    "quantity": 1,
                    "price": 21312.0000,
                    "discount": 0.0000,
                    "productBatchExpire": {
                        "id": 310878,
                        "productId": 310878,
                        "batchName": "lo2",
                        "fullNameVirgule": "lo2 - 07/01/2024",
                        "createdDate": "2023-11-09T14:20:46.6900000",
                        "expireDate": "2024-01-07T00:00:00.0000000"
                    }
                },
                {
                    "productId": 15885762,
                    "productCode": "SP000003{DEL}",
                    "productName": "12312",
                    "quantity": 2,
                    "price": 21312.0000,
                    "discount": 0.0000,
                    "productBatchExpire": {
                        "id": 310877,
                        "productId": 310877,
                        "batchName": "lo1",
                        "fullNameVirgule": "lo1 - 01/12/2023",
                        "createdDate": "2023-11-09T14:20:46.6830000",
                        "expireDate": "2023-12-01T00:00:00.0000000"
                    }
                }
            ]
        },
        {
            "id": 4101056,
            "retailerId": 500370926,
            "code": "PN000002",
            "description": "",
            "branchId": 146868,
            "branchName": "Chi nhánh trung tâm",
            "purchaseDate": "2023-11-23T08:54:03.0930000",
            "discount": 0.0000,
            "discountRatio": 0,
            "total": 1170000.0000,
            "totalPayment": 0,
            "status": 1,
            "createdDate": "2023-11-23T08:54:03.1030000",
            "purchaseById": 190133,
            "purchaseName": "Bùi Thị Hải Yến ",
            "exReturnSuppliers": 0.0000,
            "exReturnThirdParty": 0.0000,
            "purchaseOrderDetails": [
                {
                    "productId": 16264386,
                    "productCode": "9415007053286{DEL}",
                    "productName": "SỮA BỘT ANLENE GOLD 3X HỘP 800G HƯƠNG VANI GIÚP CƠ KHỎE XƯƠNG CHẮC KHỚP LINH HOẠT DATE 1/2024",
                    "quantity": 2,
                    "price": 585000.0000,
                    "discount": 0.0000
                }
            ]
        }
    ],
    "timestamp": "2025-03-23T16:36:11.7300274+07:00"
}
 */