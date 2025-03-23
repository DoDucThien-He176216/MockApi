const mongoose = require("mongoose");
const InventorySchema = new mongoose.Schema({
  productId: { type: Number },
  branchId: { type: Number },
  branchName: { type: String },
  cost: { type: Number },
  onHand: { type: Number },
  reserved: { type: Number },
  actualReserved: { type: Number },
  minQuantity: { type: Number },
  maxQuantity: { type: Number },
  isActive: { type: Boolean },
  onOrder: { type: Number }
});
const ProductSchema = new mongoose.Schema({
  createdDate: { type: Date },
  masterCode: { type: String },
  id: { type: Number, unique: true },
  retailerId: { type: Number },
  code: { type: String },
  name: { type: String },
  fullName: { type: String },
  categoryId: { type: Number },
  categoryName: { type: String },
  allowsSale: { type: Boolean },
  type: { type: Number },
  hasVariants: { type: Boolean },
  basePrice: { type: Number },
  conversionValue: { type: Number },
  description: { type: String },
  modifiedDate: { type: Date },
  isActive: { type: Boolean },
  isRewardPoint: { type: Boolean },
  isLotSerialControl: { type: Boolean },
  isBatchExpireControl: { type: Boolean },
  inventories: [InventorySchema],
  images: [{ type: String }]
});

module.exports = mongoose.model("Product", ProductSchema);

/*
{
    "createdDate": "2024-02-07T10:00:02.6970000",
    "masterCode": "SPC000275",
    "id": 17385858,
    "retailerId": 500370926,
    "code": "8938540687295",
    "name": "SỮA NON NATRUMAX CURCUMIN 800G",
    "fullName": "SỮA NON NATRUMAX CURCUMIN 800G",
    "categoryId": 553478,
    "categoryName": "NATRUMAX",
    "allowsSale": true,
    "type": 2,
    "hasVariants": false,
    "basePrice": 850000.0000,
    "conversionValue": 1,
    "description": "",
    "modifiedDate": "2025-02-19T08:41:34.0530000",
    "isActive": true,
    "isRewardPoint": true,
    "isLotSerialControl": false,
    "isBatchExpireControl": false,
    "inventories": [
        {
            "productId": 17385858,
            "branchId": 146868,
            "branchName": "Chi nhánh trung tâm",
            "cost": 510000.0000000000,
            "onHand": 12,
            "reserved": 0,
            "actualReserved": 0,
            "minQuantity": 0,
            "maxQuantity": 0,
            "isActive": true,
            "onOrder": 0
        }
    ],
    "images": [
        "https://cdn2-retail-images.kiotviet.vn/haiyenhd/602600f9034944aa83e1d03a1f891009.png"
    ]
}
 */