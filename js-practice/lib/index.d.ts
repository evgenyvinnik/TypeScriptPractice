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
//# sourceMappingURL=index.d.ts.map