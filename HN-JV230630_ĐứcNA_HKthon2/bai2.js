// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: 
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy”

function chuyenHoaChu(kyTu) {
    kyTu = kyTu.toLowerCase();
    // loại bỏ các khoảng trắng(space) ở đầu và cuối
    if (kyTu[0] === " " && kyTu[kyTu.length - 1] === " ") {
        kyTu = kyTu.slice(1, kyTu.length - 1);
        kyTu = kyTu[0].toUpperCase() + kyTu.slice(1);
    }

    // ký tự đầu ở mỗi từ viết hoa, các ký tự khác trong từ viết thường
        for (let i = 1; i < kyTu.length; i++) {
            if (kyTu[i - 1] === " ") {
                kyTu = kyTu.slice(0, i) + kyTu[i].toUpperCase() + kyTu.slice(i + 1);
            }
        }

        return kyTu;
    }


console.log(chuyenHoaChu(" tHIs iS A tESt ")); 
