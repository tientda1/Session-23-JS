let input = prompt("Nhập vào một danh sách số nguyên (cách nhau bằng dấu cách):");
let max = null;
let max1 = null;
let num = "";
for (let i = 0; i <= input.length; i++) {
    if (i === input.length || input[i] === " ") {
        if (num !== "") {
            let value = Number(num); // Chuyển đổi sang số
            if (!isNaN(value)) {
                if (max === null || value > max) {
                    max1 = max;
                    max = value;
                } else if ((max1 === null || value > max1) && value < max) {
                    max1 = value;
                }
            }
        }
        num = "";
    } else {
        num += input[i];
    }
}
if (max1 === null) {
    document.writeln("Không có số lớn thứ hai");
} else {
    document.writeln(`Số lớn thứ 2 trong danh sách là: ${max1}`);
}
