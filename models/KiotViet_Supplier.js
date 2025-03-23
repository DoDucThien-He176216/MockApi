const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  code: { type: String },
  name: { type: String },
  contactNumber: { type: String },
  email: { type: String },
  address: { type: String },
  locationName: { type: String },
  wardName: { type: String },
  organization: { type: String },
  taxCode: { type: String },
  comments: { type: String },
  groups: { type: String },
  
  isActive: { type: Boolean }, // boolean -> Boolean
  modifiedDate: { type: Date }, // datetime -> Date
  createdDate: { type: Date },

  branchId: { type: Number }, // long -> Number
  createdBy: { type: String },
  
  debt: { type: Number }, // decimal -> Number
  totalInvoiced: { type: Number }, 
  totalInvoicedWithoutReturn: { type: Number }
});

module.exports = mongoose.model("Supplier", SupplierSchema);
