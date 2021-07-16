"use strict";
let naming = "Evgeny";
console.log(naming);
const smallFunc = () => {
    console.log("small func");
};
smallFunc();
class Test {
    parameter;
    constructor(parameter) {
        this.parameter = parameter;
    }
}
var test = new Test(10);
console.log(test.parameter);
class Human {
    gender;
    constructor(gender = "male") {
        this.gender = gender;
    }
    printGenderFunction() {
        console.log("printGenderFunction", this.gender);
    }
    printGenderArrow = () => console.log("printGenderArrow", this.gender);
}
let human = new Human("female");
console.log(human.gender);
human.printGenderFunction();
human.printGenderArrow();
class NewHuman {
    gender;
    constructor(gender = "male") {
        this.gender = gender;
    }
    printGenderFunction() {
        console.log("printGenderFunction", this.gender);
    }
    printGenderArrow = () => console.log("printGenderArrow", this.gender);
}
let newHuman = new NewHuman("female");
console.log(human.gender);
newHuman.printGenderFunction();
newHuman.printGenderArrow();
class Person extends Human {
    name;
    gender;
    constructor(name = "Vasya", gender = "female") {
        super(gender);
        this.name = name;
        this.gender = gender;
    }
}
let person = new Person("Vas");
console.log(person);
//# sourceMappingURL=index.js.map