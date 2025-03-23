const xlsx = require('xlsx');
const fs = require('fs');

// const filePath = 'C://Users//Dell//Downloads//Thiện//Thiện//Danh_sach_khach_hang.xlsx'; // Đường dẫn tới file Excel của bạn
// const filePath = 'C://Users//Dell//Downloads//Thiện//Thiện//Danh_sach_tai_khoan_ngan_hang.xlsx'; // Đường dẫn tới file Excel của bạn
const filePath = 'C://Users//Dell//Downloads//Thiện//Thiện//Danh_sach_hang_hoa_dich_vu.xlsx'; // Đường dẫn tới file Excel của bạn

const sheetName = 'DANH SÁCH HÀNG HÓA, DỊCH VỤ'; // Thay bằng tên sheet của bạn

const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync('data2.json', JSON.stringify(jsonData, null, 2));
console.log('Chuyển đổi thành công, file JSON đã được tạo.');
