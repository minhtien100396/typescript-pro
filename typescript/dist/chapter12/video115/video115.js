"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video115");
class Bird {
    doFly() {
        console.log("toi co the bay");
    }
    makeSound() {
        console.log("chim keu chip chip");
    }
}
const bird = new Bird();
bird.makeSound();
bird.doFly();
class Animal {
    constructor(name, id, color, age) {
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
    set name(name) {
        this.name_ = name;
    }
    get color() {
        return this.color_;
    }
    set color(value) {
        this.color_ = value;
    }
    get age() {
        return this.age_;
    }
    set age(value) {
        this.age_ = value;
    }
    get id() {
        return this.id_;
    }
    set id(value) {
        this.id_ = value;
    }
}
class Dog extends Animal {
    get sound() {
        return this.sound_;
    }
    set sound(value) {
        this.sound_ = value;
    }
    constructor(name, id, color, age, sound) {
        super();
        this.sound_ = sound;
    }
    makeSound() {
        super.makeSound();
        console.log("say hi con");
    }
}
const dog = new Dog();
dog.age;
dog.makeSound();
