export { };

console.log("video101");

interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly language: string;
    sayHi: () => void;
}

const user: IPerson = {
    name: " bia",
    age: 29,
    language: "vi",
    sayHi: () => {
        console.log("A")
    }
}
user.sayHi();


const user1: IPerson = {
    name: " bia",
    age: 29,
    address: "hue",
    language: "vi",
    sayHi: () => {
        console.log("B")
    }
}