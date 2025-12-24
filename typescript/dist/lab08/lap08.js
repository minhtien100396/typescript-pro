"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("lap08");
class User {
    constructor(name, _email, role) {
        this.name = name;
        this._email = this.email;
        this.role = role ?? "student";
    }
    printUserInfo() {
        console.log(`
            Thông tin user:
            name: ${this.name}
            email: ${this._email}
            role: ${this.role}   
        `);
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(",");
        console.log(`
        [Teacher] ${this.name} - Course Taught: ${courseName}
            `);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourse = [];
    }
    enroll(courseName) {
        this.enrolledCourse.push(courseName);
    }
    printUserInfo() {
        const courseName = this.enrolledCourse.join(",");
        console.log(`
        [${this.role}] ${this.name} - Enroll Course: ${courseName}
            `);
    }
}
const hoidanit = new Student("Hoidanit", "hoidanit@gmail.com");
hoidanit.enroll("Tyscript Pro");
const eric = new Teacher("Eric", "eric@gmail.com", "teacher");
eric.addCourse("React");
hoidanit.printUserInfo();
eric.printUserInfo();
