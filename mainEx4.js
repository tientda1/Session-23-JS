let arr=[];
let count = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: `);
if(arrLength > 0){
    for(let i = 0;i < arrLength;i++){
        let element = prompt(`Nhập vào phần tử thứ ${i+1}`);
        arr[i] = element;
        if(!isNaN(arr[i])){
            document.writeln(arr[i])
            count++;
        }
        if(count === 0){
            document.writeln(`Mảng không có số`);
        }
    }
}else if(arrLength === 0){
    alert(`Mảng không có phần tử`);
}else{
    alert(`Số lượng phần tử không hợp lệ`);
}
