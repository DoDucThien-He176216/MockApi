const xlsx = require('xlsx');
const fs = require('fs');

const filePath = 'C://Users//Dell//Downloads//Thiện//Thiện//Danh_sach_khach_hang.xlsx'; // Đường dẫn tới file Excel của bạn
const sheetName = 'Danh sách khách hàng'; // Thay bằng tên sheet của bạn

const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));
console.log('Chuyển đổi thành công, file JSON đã được tạo.');
