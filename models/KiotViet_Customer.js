const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: String,
  gender: Boolean,
  birthDate: Date,
  contactNumber: String,
  address: String,
  locationName: String,
  wardName: String,
  email: String,
  comments: String,
  groupIds: [Number],
  branchId: [Number],
});

module.exports = mongoose.model("KiotViet_Customer", CustomerSchema);
