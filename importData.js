const mongoose = require("mongoose");
const Customer = require("./models/CustomersSchema"); // Import Schema
const fs = require("fs");


const MONGO_URI = "mongodb+srv://thienduc2552003:Ag1RjZY8IHBomCD3@mockdata.hacn2.mongodb.net/MockData?retryWrites=true&w=majority";

// Kết nối MongoDB
mongoose.connect(MONGO_URI).then(() => {
    console.log("✅ Kết nối MongoDB thành công!");
}).catch(err => {
    console.error("❌ Lỗi kết nối MongoDB: ", err);
});

// Dữ liệu JSON
const jsonData = [
    {
        "Danh sách khách hàng": 1,
        "__EMPTY": "ANH TRUONG HP",
        "__EMPTY_1": "Anh Trường HP",
        "__EMPTY_2": "",
        "__EMPTY_3": 0,
        "__EMPTY_4": "",
        "__EMPTY_5": "",
        "__EMPTY_6": "",
        "__EMPTY_7": "",
        "__EMPTY_8": "131",
        "__EMPTY_9": "",
        "__EMPTY_10": "",
        "__EMPTY_11": "",
        "__EMPTY_12": "",
        "__EMPTY_13": ""
    },
    {
        "Danh sách khách hàng": 2,
        "__EMPTY": "KY",
        "__EMPTY_1": "Kỳ",
        "__EMPTY_2": "",
        "__EMPTY_3": 0,
        "__EMPTY_4": "",
        "__EMPTY_5": "",
        "__EMPTY_6": "",
        "__EMPTY_7": "",
        "__EMPTY_8": "131",
        "__EMPTY_9": "",
        "__EMPTY_10": "",
        "__EMPTY_11": "",
        "__EMPTY_12": "",
        "__EMPTY_13": ""
    },
    {
        "Danh sách khách hàng": 3,
        "__EMPTY": "LIVE",
        "__EMPTY_1": "LIVE 11/11/2024",
        "__EMPTY_2": "",
        "__EMPTY_3": 595000,
        "__EMPTY_4": "",
        "__EMPTY_5": "",
        "__EMPTY_6": "",
        "__EMPTY_7": "",
        "__EMPTY_8": "131",
        "__EMPTY_9": "",
        "__EMPTY_10": "",
        "__EMPTY_11": "",
        "__EMPTY_12": "",
        "__EMPTY_13": ""
    },
    {
        "Danh sách khách hàng": 4,
        "__EMPTY": "MB.BG.DINH",
        "__EMPTY_1": "Đoàn Xuân Định",
        "__EMPTY_2": "27  đường  Á Lữ  - P. Trần Phú -  TP. Bắc giang ",
        "__EMPTY_3": 0,
        "__EMPTY_4": "BG",
        "__EMPTY_5": "",
        "__EMPTY_6": "0988 650 525",
        "__EMPTY_7": "",
        "__EMPTY_8": "",
        "__EMPTY_9": "NV000003",
        "__EMPTY_10": "Nguyễn Hồng Thắm",
        "__EMPTY_11": "",
        "__EMPTY_12": "",
        "__EMPTY_13": ""
    },
    {
        "Danh sách khách hàng": 5,
        "__EMPTY": "MB.BG.DUNG",
        "__EMPTY_1": "NPP Hoa Dũng",
        "__EMPTY_2": "Số nhà 22 đường Lý Thường Kiệt, thị trấn Thắng, Hiệp Hòa, Bắc Giang",
        "__EMPTY_3": -57579135,
        "__EMPTY_4": "BG",
        "__EMPTY_5": "",
        "__EMPTY_6": "0386399835",
        "__EMPTY_7": "",
        "__EMPTY_8": "",
        "__EMPTY_9": "",
        "__EMPTY_10": "",
        "__EMPTY_11": "",
        "__EMPTY_12": "",
        "__EMPTY_13": ""
    }
];

// Chuyển đổi dữ liệu cho đúng key của schema
const formattedData = jsonData.map(item => ({
    stt: item["Danh sách khách hàng"],
    maKhachHang: item["__EMPTY"],
    tenKhachHang: item["__EMPTY_1"],
    diaChi: item["__EMPTY_2"],
    congNo: item["__EMPTY_3"],
    nhomKH_NCC: item["__EMPTY_4"],
    maSoThue: item["__EMPTY_5"],
    dienThoai: item["__EMPTY_6"],
    website: item["__EMPTY_7"],
    tkCongNoPhaiThu: item["__EMPTY_8"],
    nhanVien: item["__EMPTY_9"],
    tenNhanVien: item["__EMPTY_10"],
    dtDiDongNLH: item["__EMPTY_11"],
    laNhaCungCap: item["__EMPTY_12"],
    laDoiTuongNoiBo: item["__EMPTY_13"]
}));

// Hàm import dữ liệu vào MongoDB
async function importData() {
    try {
        await Customer.insertMany(formattedData);
        console.log(formattedData);
        console.log("Thêm dữ liệu thành công!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
        mongoose.connection.close();
    }
}

importData();
