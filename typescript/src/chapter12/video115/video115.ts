export { };
console.log("video115")


interface IAnimal {
    makeSound(): void;
}

interface IFlyable {
    doFly(): void;
}

class Bird implements IAnimal, IFlyable {
    doFly(): void {
        console.log("toi co the bay")

    }
    makeSound(): void {
        console.log("chim keu chip chip")
    }
    name: string | undefined;

}

const bird = new Bird();
bird.makeSound();
bird.doFly();


class Animal {
    private name_: string;
    private color_: string;
    private age_: number;
    private id_: number;




    constructor(name?: string, id?: number, color?: string, age?: number) {
        this.name_ = name ?? "unknown";
        this.id_ = id ?? 0;
        this.color_ = color ?? "black";
        this.age_ = age ?? 0;
    }

    makeSound() {
        console.log("bla bla cha");
    }




    get name() {
        return this.name_;
    }

    set name(name: string) {
        this.name_ = name;
    }

    get color(): string {
        return this.color_;
    }

    set color(value: string) {
        this.color_ = value;
    }

    get age(): number {
        return this.age_;
    }

    set age(value: number) {
        this.age_ = value;
    }

    public get id(): number {
        return this.id_;
    }
    public set id(value: number) {
        this.id_ = value;
    }



}

class Dog extends Animal {
    private sound_: string | undefined;

    public get sound(): string | undefined {
        return this.sound_;
    }
    public set sound(value: string | undefined) {
        this.sound_ = value;
    }

    constructor(name?: string, id?: number, color?: string, age?: number, sound?: string) {
        super();
        this.sound_ = sound;
    }
    makeSound(): void {
        super.makeSound();
        console.log("say hi con")
    }

}

const dog = new Dog();
dog.age

dog.makeSound();