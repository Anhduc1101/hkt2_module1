// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr = [3, 25, 38, 49, 12]; In ra arr = [49, 38, 25, 12, 3]

// cách 1: dùng sort
// let arr = [3, 25, 38, 49, 12];
// // console.log(arr);
// arr.sort(function (a, b) {
//     return b - a;
// });
// console.log(arr);

// // cách 2:  0 dùng sort

let arr = [3, 25, 38, 49, 12];
function sort(arr) {
    let a = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }

    return arr;
}
console.log(sort(arr));





