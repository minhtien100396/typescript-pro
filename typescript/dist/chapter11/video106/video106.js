"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video106");
const btnEle = document.getElementById("myBtn");
const nameEle = document.getElementById("name");
btnEle?.addEventListener("click", () => {
    alert(nameEle?.value);
});
const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[];
    const data = await res.json();
    console.log("res", data);
};
fetchUser();
