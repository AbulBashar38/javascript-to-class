// Vanilla JavaScript

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country) {
    Person.call(this)
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}


Person.prototype={
    eat: function(){
        console.log(`${this.name} is eating`);
    }
}

Cricketer.prototype.play = function(){
    console.log(`${this.name} is playing`);
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

let sakib = new Cricketer('sakib', 34, 'allrounder', 'Bangladesh',);
console.log(sakib.eat());



// class based JavaScript


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name,age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

let sakib = new Cricketer('sakib', 34, 'allrounder', 'Bangladesh',);
 console.log(sakib.eat());