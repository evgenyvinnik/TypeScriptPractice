import { isPalindrome as Palindrome } from "./utils";
import { isPalindrome as PalindromeNpm } from "@evgenyvinnik/palind";

let message: string = "Hello, World from Evgeny!";
console.log(message);

let flag: boolean = false;
let msg: string = "message";
let value: number = 102;
let notDef: undefined = undefined;
let notFound: null = null;
let symb: symbol = Symbol("bla");
let biggy: bigint = 23n;

let regexp: RegExp = RegExp("ab+c");

let array: Array<number> = [1, 2, 3, 3];

let set: Set<number> = new Set([1, 2, 3, 3]);
console.log(set);

class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

let newArray: number[] = [];

let tuple: [number, number] = [0, 0];

tuple = [1, 2];

console.log(tuple[0]);
console.log(tuple[1]);

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

type Point = { x: number; y: number };

let unit: Point = {
  x: 1,
  y: 1,
};

const point: Point = { x: 2, y: 3 };

function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function sum(...values: number[]): number {
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 3));

let additive: (a: number, b: number) => number;

additive = function (a: number, b: number): number {
  return a + b;
};

type User = { id: string };
type Product = { id: string };

let user: User = { id: "user1" };
let product: Product = { id: "product1" };

user = product;

type Point2d = { x: number; y: number };
type Point3d = { x: number; y: number; z: number };

let point2d: Point2d = { x: 1, y: 2 };
let point3d: Point3d = { x: 2, y: 3, z: 3 };

point2d = point3d;

console.log(point2d);

let point2: Point2d;
function initPoint() {
  point2 = { x: 22, y: 32 };
}
initPoint();
console.log(point2!.x, point2!.y);

function betterInitPoint(): Point2d {
  return { x: 222, y: 322 };
}

let point22 = betterInitPoint();
console.log(point22.x, point22.y);

function processPoint2d(point: Point2d) {
  console.log(point);
}

processPoint2d(point3d);

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distance: number): void {
    console.log(this.name + " moved " + distance + " meters");
  }
}

let cat = new Animal("cat");
cat.move(10);

class Bird extends Animal {
  public fly(distance: number): void {
    console.log(this.name + " flied " + distance + " meters");
  }
}
let bird = new Bird("bird");
bird.fly(10);

let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 123;
exampleAny = "value";

exampleUnknown = 123;
exampleUnknown = "value";

exampleAny.trim();

function logging(value: unknown): void {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else {
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

console.log(Palindrome("madam"));
console.log(Palindrome("madan"));
console.log(PalindromeNpm("madam"));
console.log(PalindromeNpm("madan"));

console.log("Logged in user ", process.env.USER);

import fs from "fs";
fs.writeFileSync("hello.txt", "Hello world!");

type newPoint = { readonly x: number; readonly y: number };

const varPoint: newPoint = { x: 0, y: 0 };

console.log(`varPoint ${varPoint.x} ${varPoint.y}`);

class Animalistic {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const ani: Animalistic = { name: "sheep" };
console.log(`animal name ${ani.name} `);

let formatCommandLine = (command: string | string[]): string => {
  let line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.map((c) => c.trim()).join(" ");
  }
  return line;
};

console.log(formatCommandLine(" message "));
console.log(formatCommandLine([" name ", " dilemma"]));

type Padding = number | string;

let paddingLeft = (value: string, padding: Padding) => {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number of string, got '${padding}'`);
};

console.log(paddingLeft(" message ", "         "));
console.log(paddingLeft(" message ", 10));

type CardinalDirection = "North" | "South";
let direction: CardinalDirection;

direction = "North";
direction = "South";

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

let rollDice = (): DiceValue => {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
};

console.log(`roll dice ${rollDice()}`);
console.log(`roll dice ${rollDice()}`);

class Cat {
  public meow(): void {
    console.log("meow");
  }
}

class Dog {
  public bark(): void {
    console.log("bark");
  }
}

type CatoDog = Dog | Cat;

function speak(animal: CatoDog) {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

speak(new Cat());
speak(new Dog());

type Square = { size: number };

type Rectangle = { width: number; height: number };

type Shape = Rectangle | Square;

function area(shape: Shape) {
  if ("size" in shape) {
    console.log(shape.size ** 2);
  }
  if ("width" in shape) {
    console.log(shape.width * shape.height);
  }
}

area({ size: 2 });
area({ width: 2, height: 3 });

type Circle1 = { radius: number; kind: "circle" };

type Square1 = { size: number; kind: "square" };

type Rectangle1 = { width: number; height: number; kind: "rectangle" };

type Shape1 = Circle1 | Rectangle1 | Square1;

function area1(shape: Shape1) {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2);
  }
  if (shape.kind === "square") {
    console.log(shape.size ** 2);
  }
  if (shape.kind === "rectangle") {
    console.log(shape.width * shape.height);
  }
}

area1({ radius: 2, kind: "circle" });
area1({ size: 5, kind: "square" });
area1({ width: 6, height: 3, kind: "rectangle" });

type isValidationSuccess = {
  isValid: true;
  validValue: string;
};

type isValidationFailure = {
  isValid: false;
  errorValue: string;
};

type ValidationResult = isValidationSuccess | isValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("success " + result.validValue);
  } else {
    console.log("failure " + result.errorValue);
  }
}

logResult({ isValid: true, validValue: "bloo" });
logResult({ isValid: false, errorValue: "bla" });

class YetAnotherPerson {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class AnotherPerson {
  constructor(public readonly name: string, public readonly age: number) {}
}

const adam = new YetAnotherPerson("Adam", 1200);
console.log(adam.name, adam.age);

const eve = new AnotherPerson("Eve", 123);
console.log(eve.name, eve.age);

class AnotherPoint {
  x: number = 0;
  y: number = 0;
}

const anotherCenter = new AnotherPoint();
anotherCenter.x = 2;

console.log(anotherCenter.x, anotherCenter.y);

function logVowels(value: string) {
  console.log(value.match(/[aeoui]/gi));
}

logVowels("asdfsa4rerhgp");
logVowels("3244");

function decorate(value: string | null | undefined) {
  if (value == null) {
    return value;
  }
  return `--- ${value.trim()} ---`;
}

console.log(decorate(null));

console.log(decorate(undefined));
console.log(decorate("Bsdfwe"));

type YetAnotherPoint2D = {
  x: number;
  y: number;
};

type YetAnotherPoint3D = YetAnotherPoint2D & { z: number };

type Name = { firstName: string; familyName?: string };
type Email = { email: string };
type Phone = { phone: string };

function contact(details: Name & Email & Phone) {
  console.log(`Dear ${details.firstName} ${details.familyName}.
I hope you have received my message on ${details.email}.
We will call you on ${details.phone}`);
}

contact({ firstName: "Adam", email: "adam@smith.com", phone: "2345" });

contact({
  firstName: "Adam",
  familyName: "Jensen",
  email: "adam@smith.com",
  phone: "2345",
});

class MegaPoint {
  x?: number;
  y?: number;
}

console.log(new MegaPoint());

type NewPerson = {
  name: string;
  email?: string | null | undefined;
};

function sendEmail(email: string) {
  console.log("send email to ", email);
}

function isContactable(person: NewPerson) {
  if (person.email == null) {
    throw new Error(`Person ${person.name} is not contactable`);
  }
}

function contactNew(person: NewPerson) {
  isContactable(person);
  sendEmail(person.email!);
}

contactNew({ name: "Ava", email: "blab" });

// contactNew({name: "Eve"});

interface Coordinate2D {
  x: number;
  y: number;
}

interface Coordinate3D extends Coordinate2D {
  z: number;
}

const coordinate3D: Coordinate3D = { x: 23, y: 456, z: 34566 };

console.log(coordinate3D);

interface Request {
  body: any;
}

interface Request {
  json: any;
}

function handleRequest(request: Request) {
  console.log(request.body);
  console.log(request.json);
}

interface InputPrompts {
  type: "test" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

type onChangeType = (newValue: string) => void;

type InputPrompt = {
  type: "test" | "email";
  value: string;
  onChange: onChangeType;
};

const fail = (message: string) => {
  throw new Error(message);
};

let example: never;

type AnotherAnimal = {
  name: string;
  voice(): string;
};

function log123(animal: AnotherAnimal) {
  console.log(`${animal.name} is doing ${animal.voice()}`);
}

class AnotherCat implements AnotherAnimal {
  constructor(public name: string) {}
  voice(): string {
    return "meow";
  }
}

class AnotherDog implements AnotherAnimal {
  constructor(public name: string) {}
  voice(): string {
    return "woof";
  }
}

log123(new AnotherCat("Kitty"));
log123(new AnotherDog("Doggy"));

let anotherDice!: number;
function rollDiceAgain() {
  anotherDice = Math.floor(Math.random() * 6) + 1;
}

rollDiceAgain();

console.log("Current dice value", anotherDice);

class NewPoint {
  x!: number;
  y!: number;

  constructor() {
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

console.log("new point ", new NewPoint());

type AnotherSquare = { size: number };

type AnotherRectangle = { width: number; height: number };

type AnotherShape = AnotherRectangle | AnotherSquare;

function isSquare(shape: AnotherShape): shape is AnotherSquare {
  return "size" in shape;
}

function isRectangle(shape: AnotherShape): shape is AnotherRectangle {
  return "width" in shape;
}

function anotherArea(shape: AnotherShape): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const ensureNever: never = shape;
  return ensureNever;
}

type Peep = {
  name: string;
  dob?: Date;
};

function assertFunc(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function loadPerson(): Peep | null {
  if (Math.random() > 0.1) return { name: "hello", dob: new Date(2021, 12, 8) };
  return null;
}

const maybePreson = loadPerson();

assertFunc(maybePreson != null, "Could not load person");
console.log("name ", maybePreson.name);

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new TypeError("value is not a Date");
}

assertDate(maybePreson.dob);
console.log("dob ", maybePreson.dob.toString());

function anotherReverse(stringArrayOrString: string): string;
function anotherReverse(stringArrayOrString: string[]): string[];
function anotherReverse(stringArrayOrString: string | string[]) {
  if (typeof stringArrayOrString == "string") {
    return stringArrayOrString.split("").reverse().join("");
  } else {
    return stringArrayOrString.slice().reverse();
  }
}

var rev1 = anotherReverse("hello");
console.log(rev1);
var rev2 = anotherReverse(["h", "e", "l", "l", "o"]);
console.log(rev2);

function makeDate(timestampYear: number, month: number, day: number): Date;
function makeDate(timestampYear: number): Date;
function makeDate(timestampYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampYear, month - 1, day);
  } else {
    return new Date(timestampYear);
  }
}

const doomsDay = makeDate(2000, 1, 1);
const epoch = makeDate(0);

// const invalid = makeDate(2000, 1);

type Add = (a: number, b: number) => number;

const anotherAdd: Add = (a: number, b: number) => {
  return a + b;
};

// type Sub = {
//   new (x: number, y: number): {x: number, y: number},
//   (a: number, b: number): number,
// }

// const sub: Sub = class {
//   constructor(public x: number, public y: number) {}

//   public substact = (a: number, b: number, c?: number) => {
//     return a + b + (c != null ?c:0);
//   }
// }

type AnotherAdd = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName: string;
};

const yetAnotherAdd: AnotherAdd = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

yetAnotherAdd.debugName = "hello";

console.log("yetAnotherAdd", yetAnotherAdd(1, 2));
console.log("yetAnotherAdd", yetAnotherAdd(1, 2, 3));

type AnotherPointCreator = new (x: number, y: number) => {
  x: number;
  y: number;
};

const Plug: AnotherPointCreator = class {
  constructor(public x: number, public y: number) {}
};

class Human {
  constructor(public gender: string = "male") {}

  printGenderFunction(): void {
    console.log("printGenderFunction", this.gender);
  }

  printGenderArrow = () => console.log(this.gender);
}
let human = new Human("female");
console.log(human.gender);
human.printGenderFunction();
