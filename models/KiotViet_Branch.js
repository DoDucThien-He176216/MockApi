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

/*
{
    "total": 1,
    "pageSize": 20,
    "data": [
        {
            "id": 146868,
            "branchName": "Chi nhánh trung tâm",
            "address": "Số 263 Nguyễn Hữu Cầu, Khu 12",
            "locationName": "Hải Dương - Thành phố Hải Dương",
            "contactNumber": "+84859826826",
            "retailerId": 500370926,
            "modifiedDate": "2023-12-27T11:01:41.6630000",
            "createdDate": "2023-10-31T14:46:20.1000000"
        }
    ],
    "timestamp": "2025-03-23T16:13:50.1740006+07:00"
}
 */