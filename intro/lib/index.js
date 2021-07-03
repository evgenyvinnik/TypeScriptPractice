"use strict";
let message = "Hello, World from Evgeny!";
console.log(message);
let flag = false;
let msg = "message";
let value = 102;
let notDef = undefined;
let notFound = null;
let symb = Symbol('bla');
let biggy = 23n;
let regexp = RegExp("ab+c");
let array = [1, 2, 3, 3];
let set = new Set([1, 2, 3, 3]);
console.log(set);
class Queue {
    data = [];
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
let newArray = [];
let tuple = [0, 0];
tuple = [1, 2];
console.log(tuple[0]);
console.log(tuple[1]);
let center = {
    x: 0,
    y: 0
};
let unit = {
    x: 1,
    y: 1
};
const point = { x: 2, y: 3 };
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function sum(...values) {
    return values.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 3));
let additive;
additive = function (a, b) { return a + b; };
let user = { id: "user1" };
let product = { id: "product1" };
user = product;
let point2d = { x: 1, y: 2 };
let point3d = { x: 2, y: 3, z: 3 };
point2d = point3d;
console.log(point2d);
function processPoint2d(point) {
    console.log(point);
}
processPoint2d(point3d);
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(this.name + " moved " + distance + " meters");
    }
}
let cat = new Animal("cat");
cat.move(10);
class Bird extends Animal {
    fly(distance) {
        console.log(this.name + " flied " + distance + " meters");
    }
}
let bird = new Bird("bird");
bird.fly(10);
let exampleAny;
let exampleUnknown;
exampleAny = 123;
exampleAny = "value";
exampleUnknown = 123;
exampleUnknown = "value";
exampleAny.trim();
function logging(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
logging(23.344);
logging("Hello");