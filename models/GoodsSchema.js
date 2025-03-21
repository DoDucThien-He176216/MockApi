const { Schema, default: mongoose } = require("mongoose");

const GoodsSchema = new Schema({
    Name: { type: String },
    Id: { type: String },
    Group: { type: String },
    Description: { type: String },
    Warehouse: { type: String, enum: ['K1,K2'] },
    Unit: { type: String },
    Price: { type: Schema.Types.Decimal128 },
    Quantity: { type: Number },
    Inventory_account: { type: String, enum: ['1561'] },
    Sales_account: { type: String, enum: ['511.CL'] },
    Characteristic: { type: String }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Goods', GoodsSchema);