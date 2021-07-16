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
