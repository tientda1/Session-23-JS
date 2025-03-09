let arr=[];
let sum = 0;
let count = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: `);
if(arrLength > 0){
    for(let i = 0;i < arrLength;i++){
        let element = prompt(`Nhập vào phần tử thứ ${i+1}`);
        arr[i] = element;
        if(!isNaN(arr[i])){
            sum += Number(arr[i]);
            count++;
        }
    }
    if(count === 0){
        document.writeln(`Mảng không có phần tử số`);
    }else{
    document.writeln(`${sum}`);
    }
}else if(arrLength === 0){
    alert(`Mảng không có phần tử`);
}else{
    alert(`Số lượng phần tử không hợp lệ`);
}
