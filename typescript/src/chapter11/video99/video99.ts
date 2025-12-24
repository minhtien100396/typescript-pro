export { };

console.log("video 99")


type TName = string | null;
let name: TName = null;

const age = undefined;

const printName = (myName: string | null) => {
    // if (myName) {
    //     myName.toUpperCase();
    // }
    // myName?.toUpperCase();
    (myName!).toUpperCase();
    console.log("name = ", myName)
}
