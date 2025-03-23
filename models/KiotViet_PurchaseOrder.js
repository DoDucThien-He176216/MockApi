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
