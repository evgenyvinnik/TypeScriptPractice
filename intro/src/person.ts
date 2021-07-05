class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  growOld = () => {
    this.age++;
  }

  getAge(): number {
    return this.age;
  }
};

const person = new Person(0);
const growOld = person.growOld;
setTimeout(growOld, 1000);
growOld();
console.log("age " + person.getAge());
setTimeout(() => {
  console.log("age " + person.getAge());
}, 2000);