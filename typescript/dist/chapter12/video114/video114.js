"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video114");
class Person {
    constructor(name, age) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}
const bia = new Person("tien", 20);
const dung = new Person();
const khoa = new Person("khoa");
console.log("bia", bia);
console.log("dung", dung);
console.log("khoa", khoa);
