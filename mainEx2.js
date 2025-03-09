let element = prompt("Nhập vào một mảng số nguyên:");
let arr = element.split(' ').map(Number);
let max = 0;
    if(element.length !== 0){
        for(let i = 0;i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        for(let i = 0;i < arr.length; i++){
            if(arr[i] === max){
                document.writeln(`${max} là số lớn nhất trong dãy <br>`);
                document.writeln(`Vị trí của số lớn nhất là: ${i}`);
            }
        }
    }else{
        document.writeln(`Không có số lớn nhất`);
}