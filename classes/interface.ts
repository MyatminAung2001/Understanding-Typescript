// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Name {
    readonly name: string;
}

interface Greeting extends Name {
    greet(phrase: string): void;
}

class Person implements Greeting {
    name: string;
    age = 21;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + " " + this.name);
    }
}

let user1: Greeting;

user1 = new Person("Alex");
console.log(user1);

user1.greet("Hi, I am alex");
