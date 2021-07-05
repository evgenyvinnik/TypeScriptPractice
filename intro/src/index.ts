import { isPalindrome as Palindrome } from './utils'
import { isPalindrome as PalindromeNpm } from '@evgenyvinnik/palind'

let message: string = "Hello, World from Evgeny!";
console.log(message);

let flag: boolean = false;
let msg: string = "message";
let value: number = 102;
let notDef: undefined = undefined;
let notFound: null = null;
let symb: symbol = Symbol('bla');
let biggy: bigint = 23n;

let regexp: RegExp = RegExp("ab+c");

let array: Array<number> = [1, 2, 3, 3];

let set: Set<number> = new Set([1, 2, 3, 3]);
console.log(set);

class Queue<T> {
  private data: Array<T> = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();

let newArray: number[] = [];

let tuple: [number, number] = [0, 0];

tuple = [1, 2];

console.log(tuple[0]);
console.log(tuple[1]);

let center: {x: number, y: number} = {
  x: 0,
  y: 0
};

type Point = {x: number, y: number};

let unit: Point = {
  x:1,
  y:1
}

const point: Point = {x: 2, y: 3};

function add(a: number, b: number): number {
  return a + b;
}

function log(message: string):void{
  console.log(message);
}

function sum(...values: number[]):number {
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 3));


let additive: (a: number, b: number) => number;

additive= function(a: number, b: number): number {return a + b};

type User = {id: string};
type Product = {id: string};

let user: User = {id: "user1"};
let product: Product = {id: "product1"}

user = product;

type Point2d = {x: number, y: number};
type Point3d = {x: number, y: number, z: number};

let point2d: Point2d = {x: 1, y: 2};
let point3d: Point3d = {x: 2, y: 3, z: 3};

point2d = point3d;

console.log(point2d);

function processPoint2d(point:Point2d) {
  console.log(point);
}

processPoint2d(point3d);

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name
  }

  public move(distance: number): void {
    console.log(this.name + " moved " + distance + " meters");
  }
}

let cat = new Animal("cat")
cat.move(10);

class Bird extends Animal {
  public fly(distance: number): void {
    console.log(this.name + " flied " + distance + " meters");
  }
}
let bird = new Bird("bird")
bird.fly(10);

let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 123;
exampleAny = "value";


exampleUnknown = 123;
exampleUnknown = "value";

exampleAny.trim();

function logging(value: unknown): void {
  if (typeof value == 'number') {
    console.log(value.toFixed(2));
  } else {
    console.log(value)
  }
}

logging(23.344);
logging("Hello");

let leet;

leet = "1337";
const numberValue = +leet;

console.log(numberValue == 1337);
console.log(numberValue);


console.log(Palindrome('madam'));
console.log(Palindrome('madan'));
console.log(PalindromeNpm('madam'));
console.log(PalindromeNpm('madan'));


console.log('Logged in user ', process.env.USER);

import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello world!');


type newPoint = {readonly x: number, readonly y: number}

const varPoint: newPoint = {x: 0, y: 0};

console.log(`varPoint ${varPoint.x} ${varPoint.y}`);


class Animalistic {
  readonly name: string;
  constructor(name: string) { this.name = name;}
};

const ani: Animalistic = {name:'sheep'};
console.log(`animal name ${ani.name} `);

let formatCommandLine = (command: string | string[]) : string => {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.map(c => c.trim()).join(' ');
  }
  return line;
}

console.log(formatCommandLine(' message '));
console.log(formatCommandLine([' name ', ' dilemma']));

type Padding = number | string;

let paddingLeft = (value: string, padding: Padding) => {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  } else if (typeof padding === 'string') {
    return padding + value;
  }

  throw new Error(`Expected number of string, got '${padding}'`);
}


console.log(paddingLeft(' message ', '         '));
console.log(paddingLeft(' message ', 10));

type CardinalDirection = 'North' | 'South'
let direction: CardinalDirection;

direction = 'North';
direction = 'South';

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

let rollDice = (): DiceValue => {
  return Math.floor(Math.random() * 6) + 1 as DiceValue;
}

console.log(`roll dice ${rollDice()}`);
console.log(`roll dice ${rollDice()}`);