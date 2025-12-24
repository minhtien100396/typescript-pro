"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video100");
const otherRole = "EDIT";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["EDIT"] = "EDIT";
})(RoleEnum || (RoleEnum = {}));
const myRole = RoleEnum.ADMIN;
const bia = {
    id: 1,
    name: "bia",
    address: "Hue",
    language: "Java"
};
