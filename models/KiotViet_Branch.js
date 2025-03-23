const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
    branchName: { type: String },
    branchCode: { type: String },
    contactNumber: { type: String },
    email: { type: String },
    address: { type: String },
    modifiedDate: { type: Date},
    createdDate: { type: Date }
});

module.exports = mongoose.model("Branch", BranchSchema);
