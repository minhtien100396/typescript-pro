export { };

console.log("video114")

class Person {
    name: string;
    age: number;

    constructor(name?: string, age?: number) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}

const bia = new Person("tien", 20);

const dung = new Person();
const khoa = new Person("khoa");

console.log("bia", bia)
console.log("dung", dung)
console.log("khoa", khoa)