let element = prompt("Nhập vào một mảng số nguyên:");
let arr = element.split(' ').map(Number);
let count = 0;
if (!isNaN(element)) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            document.writeln(arr[i] + "<br>");
            count++;
        }
    }
    if(count > 0){
        document.writeln(`Số lượng số lớn hơn hoặc bằng 10: ${count}`);
    }else if(count == 0){}
        document.writeln(`Không có số nào lớn hơn 10`);
}
else{
    document.writeln(`Dãy không hợp lệ`)
}