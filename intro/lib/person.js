"use strict";
class Person {
    age;
    constructor(age) {
        this.age = age;
    }
    growOld = () => {
        this.age++;
    };
    getAge() {
        return this.age;
    }
}
;
const person = new Person(0);
const growOld = person.growOld;
setTimeout(growOld, 1000);
growOld();
console.log("age " + person.getAge());
setTimeout(() => {
    console.log("age " + person.getAge());
}, 2000);
//# sourceMappingURL=person.js.map