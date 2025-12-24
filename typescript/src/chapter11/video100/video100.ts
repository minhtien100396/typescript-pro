export { };
console.log("video100")

type TRole = "ADMIN" | "CREATE" | "EDIT" | "VIEW";

const otherRole: TRole = "EDIT";


enum RoleEnum {
    USER = "USER",
    ADMIN = "ADMIN",
    EDIT = "EDIT"
}

const myRole: RoleEnum = RoleEnum.ADMIN;


type TStudent = {
    id: number;
    name: string;
}

type TCoder = {
    address: string;
    language: string;
}

type TProgrammer = TStudent & TCoder;

const bia: TProgrammer = {
    id: 1,
    name: "bia",
    address: "Hue",
    language: "Java"
}