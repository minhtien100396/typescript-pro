export { };

console.log("video91");

let username: string | number = "hoidanit@gmail.com"

username = 123456;
username = "0732132131"


const person: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
} = {
    name: "123",
    age: 123,
    address: "hue",
    isHandsome: true
}

const updatePerson = (
    person: {
        name: string;
        age: number;
        address: string;
        isHandsome: boolean;
    }
) => {
    console.log(person.name)
}

updatePerson(person);


type TStudent = {
    id: string;
    name: string;
    address: string;
    age: number;
}

const student1: TStudent = {
    id: "1",
    name: "Tien",
    address: "Hue",
    age: 25
}

const student2: TStudent = {
    id: "1",
    name: "Tien2",
    address: "Hue",
    age: 25
}

const printfInfo = (st: TStudent) => {
    console.log("student name = ", st.name);
}

printfInfo(student1);
printfInfo(student2);