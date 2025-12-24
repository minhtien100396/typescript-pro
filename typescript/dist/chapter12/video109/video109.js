"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video109");
class SinhVien {
    sleep() {
        console.log("di ngu: ", this.name);
    }
}
const sinhvien1 = new SinhVien();
sinhvien1.name = "Tien";
sinhvien1.id = 1;
sinhvien1.sleep();
console.log("============================");
const sinhvien2 = new SinhVien();
sinhvien2.name = "Dung";
sinhvien2.id = 2;
sinhvien2.sleep();
