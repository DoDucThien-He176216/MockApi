const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    code: { type: String },
    barCode: { type: String },
    name: { type: String },
    fullName: { type: String },
    description: { type: String },
    images: [{ type: String }], // Mảng chuỗi

    categoryId: { type: Number },
    categoryName: { type: String },
    unit: { type: String },
    
    masterProductId: { type: Number },
    masterUnitId: { type: Number },
    conversionValue: { type: Number }, // double -> Number

    hasVariants: { type: Boolean }, // boolean -> Boolean

    attributes: [
        {
            productId: { type: Number },
            attributeName: { type: String },
            attributeValue: { type: String }
        }
    ],

    basePrice: { type: Number }, // decimal -> Number

    inventories: [
        {
            productId: { type: Number },
            productCode: { type: String },
            productName: { type: String },
            branchId: { type: Number },
            branchName: { type: String },
            onHand: { type: Number }, // double -> Number
            cost: { type: Number }, // decimal -> Number
            reserved: { type: Number }
        }
    ],

    modifiedDate: { type: Date } // datetime -> Date
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