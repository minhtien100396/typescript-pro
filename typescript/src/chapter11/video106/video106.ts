export { };

console.log("video106");

const btnEle = document.getElementById("myBtn");
const nameEle = document.getElementById("name") as HTMLInputElement;
btnEle?.addEventListener("click", () => {
    alert(nameEle?.value);
})


interface IUser {
    id: number;
    email: string;
    name: string;
}

const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users")
    // const data = (await res.json()) as IUser[];
    const data: IUser[] = await res.json();
    console.log("res", data)

}

fetchUser();