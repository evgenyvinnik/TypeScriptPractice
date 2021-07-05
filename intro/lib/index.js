"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const palind_1 = require("@evgenyvinnik/palind");
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
let leet;
leet = "1337";
const numberValue = +leet;
console.log(numberValue == 1337);
console.log(numberValue);
console.log(utils_1.isPalindrome('madam'));
console.log(utils_1.isPalindrome('madan'));
console.log(palind_1.isPalindrome('madam'));
console.log(palind_1.isPalindrome('madan'));
console.log('Logged in user ', process.env.USER);
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello.txt', 'Hello world!');
const varPoint = { x: 0, y: 0 };
console.log(`varPoint ${varPoint.x} ${varPoint.y}`);
class Animalistic {
    name;
    constructor(name) { this.name = name; }
}
;
const ani = { name: 'sheep' };
console.log(`animal name ${ani.name} `);
let formatCommandLine = (command) => {
    let line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.map(c => c.trim()).join(' ');
    }
    return line;
};
console.log(formatCommandLine(' message '));
console.log(formatCommandLine([' name ', ' dilemma']));
let paddingLeft = (value, padding) => {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected number of string, got '${padding}'`);
};
console.log(paddingLeft(' message ', '         '));
console.log(paddingLeft(' message ', 10));
let direction;
direction = 'North';
direction = 'South';
let rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(`roll dice ${rollDice()}`);
console.log(`roll dice ${rollDice()}`);
//# sourceMappingURL=index.js.map