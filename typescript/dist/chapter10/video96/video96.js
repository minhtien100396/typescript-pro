"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video96");
const student1 = {
    id: 1,
    name: "Tien",
    email: "minhtien100396.it@gmail.com",
    isPremium: false,
    contact: "0768474364"
};
const student2 = {
    id: 2,
    name: "Cuong",
    email: "td_cuong.it@gmail.com",
    isPremium: false,
    contact: "096123456"
};
const course1 = {
    courseId: 1,
    title: "Khoa AI",
    price: 500000,
    students: []
};
const course2 = {
    courseId: 1,
    title: "Khoa AI",
    price: 500000,
    students: []
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log("Tên khóa học:", course.title);
    if (course.students.length === 0) {
        console.log("Chưa có học viên nào");
    }
    else {
        course.students.forEach((student, index) => {
            console.log(`${index} : ${student.name}`);
        });
    }
};
const main = () => {
    registerStudentToCourse(student1, course1);
    registerStudentToCourse(student2, course1);
    printCourseInfo(course1);
    console.log("==============================================");
    printCourseInfo(course2);
};
main();
