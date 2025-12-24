export { };

console.log("lap08");

type TRole = "student" | "teacher";

class User {
    public name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, _email: string, role?: TRole) {
        this.name = name;
        this._email = this.email;
        this.role = role ?? "student";
    }

    printUserInfo(): void {
        console.log(`
            Thông tin user:
            name: ${this.name}
            email: ${this._email}
            role: ${this.role}   
        `
        )
    }


    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

}

class Teacher extends User {
    public courses: string[] = [];

    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }

    addCourse(courseName: string) {
        this.courses.push(courseName);
    }

    printUserInfo() {
        const courseName = this.courses.join(",")
        console.log(
            `
        [Teacher] ${this.name} - Course Taught: ${courseName}
            `
        )
    }
}

class Student extends User {
    public enrolledCourse: string[] = [];

    constructor(name: string, email: string) {
        super(name, email);
    }

    enroll(courseName: string) {
        this.enrolledCourse.push(courseName);
    }

    printUserInfo() {
        const courseName = this.enrolledCourse.join(",")
        console.log(
            `
        [${this.role}] ${this.name} - Enroll Course: ${courseName}
            `
        )
    }
}

const hoidanit = new Student("Hoidanit", "hoidanit@gmail.com");
hoidanit.enroll("Tyscript Pro");

const eric = new Teacher("Eric", "eric@gmail.com", "teacher");
eric.addCourse("React");

hoidanit.printUserInfo();

eric.printUserInfo();
