let naming: string = "Evgeny";
console.log(naming);

const smallFunc = () => {
  console.log("small func");
};

smallFunc();

class Test {
  constructor(public parameter: number) {}
}

var test = new Test(10);
console.log(test.parameter);

class Human {
  constructor(public gender: string = "male") {}

  printGenderFunction(): void {
    console.log("printGenderFunction", this.gender);
  }

  printGenderArrow = () => console.log("printGenderArrow", this.gender);
}
let human = new Human("female");
console.log(human.gender);
human.printGenderFunction();
human.printGenderArrow();

class NewHuman {
  public gender: string;
  constructor(gender: string = "male") {
    this.gender = gender;
  }

  printGenderFunction(): void {
    console.log("printGenderFunction", this.gender);
  }

  printGenderArrow = () => console.log("printGenderArrow", this.gender);
}

let newHuman = new NewHuman("female");
console.log(human.gender);
newHuman.printGenderFunction();
newHuman.printGenderArrow();

class Person extends Human {
  constructor(public name: string = "Vasya", public gender: string = "female") {
    super(gender);
  }
}

let person = new Person("Vas");
console.log(person);

const numbers: number[] = [23, 234, 34, 3];
const newNumbers: number[] = [3, 3, 5, 6];

console.log([numbers, 1, 2, 4]);

console.log([...numbers, 3, 1, 2, 4]);

console.log([...numbers, ...newNumbers]);

const peep = {
  name: "test",
};

const dude = {
  name: "Dude",
};

const agedDude = {
  ...dude,
  age: 30,
};

console.log(agedDude);

const funcFilter = (...args: number[]) => {
  return args.filter((el) => el <= 3);
};

console.log(funcFilter(2, 3, 4, 1, 0));

const [a, b] = ["Hello", "dude"];
console.log(b);

const { age } = agedDude;
console.log("age", age);


const nums = [1, 2, 3];

const numsDouble = nums.map(x => x*2);
console.log(numsDouble);

const numsTriple = nums.forEach(x => x*3);
console.log(numsTriple);