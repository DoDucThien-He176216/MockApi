const mongoose = require("mongoose");

const TransferSchema = new mongoose.Schema({
  fromBranchId: mongoose.Schema.Types.ObjectId,
  toBranchId: mongoose.Schema.Types.ObjectId,
  isDraft: Number,
  code: String,
  description: String,
  status: Number,
  transferDetails: [
    {
      productCode: String,
      productId: mongoose.Schema.Types.ObjectId,
      sendQuantity: Number,
      receivedQuantity: Number,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Transfer", TransferSchema);
