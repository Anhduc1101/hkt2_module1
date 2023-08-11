// bài 1: cho 1 mảng các phần tử, in ra phần tử lớn nhất

let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
console.log(arr);
let max = arr[0];
for (i = 0; i < arr.length; i++){
    if (max < arr[i]) {
        max = arr[i];
        
    }
}
console.log(max);