let arr=[];
let count = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: `);
if(arrLength > 0){
    for(let i = 0;i < arrLength;i++){
        let element = +prompt(`Nhập vào phần tử thứ ${i+1}`);
        arr[i] = element;
    }
    for(let i = 0;i < arrLength;i++){
        if(arr[i]<0 && Number.isInteger(arr[i])){
            count++;
        }
    }
    document.writeln(`Số nguyên âm trong mảng là: ${count}`);
}else if(arrLength === 0){
    alert(`Mảng không có phần tử`);
}else{
    alert(`Số lượng phần tử không hợp lệ`);
}
