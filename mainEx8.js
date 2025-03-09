let n = prompt("Nhập số lượng phần tử của mảng:");
let arr = [];
for (let i = 0; i < n; i++) {
    let num = prompt(`Nhập phần tử thứ ${i + 1}:`);
    arr.push(Number(num));
}
function isFibonacciArray(arr) {
    if (arr.length < 2) return false;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            return false;
        }
    }
    return true;
}
if (isFibonacciArray(arr)) {
    document.writeln("Mảng là dãy Fibonacci.");
} else {
    document.writeln("Mảng không phải dãy Fibonacci.");
}
