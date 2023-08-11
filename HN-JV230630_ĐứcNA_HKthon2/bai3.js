//  Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
//  ● Đầu vào: nhập tháng 8 năm 2023
//  ● Đầu ra: số ngày trong tháng đó là 31


function nhapSoNgay() {
    let thang = +prompt("Nhập tháng (1-12):");
    let nam = +prompt("Nhập năm:");
    let ngayTrongThang = new Date(nam, thang, 0).getDate();
    alert("Số ngày trong tháng đó là " + ngayTrongThang);
}
nhapSoNgay();
