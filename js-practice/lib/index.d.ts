declare let naming: string;
declare const smallFunc: () => void;
declare class Test {
    parameter: number;
    constructor(parameter: number);
}
declare var test: Test;
declare class Human {
    gender: string;
    constructor(gender?: string);
    printGenderFunction(): void;
    printGenderArrow: () => void;
}
declare let human: Human;
declare class NewHuman {
    gender: string;
    constructor(gender?: string);
    printGenderFunction(): void;
    printGenderArrow: () => void;
}
declare let newHuman: NewHuman;
declare class Person extends Human {
    name: string;
    gender: string;
    constructor(name?: string, gender?: string);
}
declare let person: Person;
declare const numbers: number[];
declare const newNumbers: number[];
declare const peep: {
    name: string;
};
declare const dude: {
    name: string;
};
declare const agedDude: {
    age: number;
    name: string;
};
declare const funcFilter: (...args: number[]) => number[];
declare const a: string, b: string;
declare const age: number;
declare const nums: number[];
declare const numsDouble: number[];
declare const numsTriple: void;
//# sourceMappingURL=index.d.ts.map