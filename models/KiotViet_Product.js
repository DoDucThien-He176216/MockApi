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
