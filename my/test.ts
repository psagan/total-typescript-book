let thing = 123;

let otherThing = {
    name: "Alice"
};

// let element = document.getElementById("12");

const func = () => {
    // Refactor this to be its own function.
    const randomPercentage = newFunction();
  
    console.log(randomPercentage);
  };

function newFunction() {
    return `${(Math.random() * 100).toFixed(2)}%`;
}

const nameIt= (name: string) => {
    return `Hello, ${name}!`;
}

import { Customer, TinyCustomer, MyCustomer } from "./types/customer.types";

let customer: MyCustomer = {
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 100,
    isMy: true    
}

const showArgs = (...args:number[]):void => {
    console.log(args.join('-'))
}

showArgs(1,2,3,4)

type Environment = "development" | "production" | "staging";
// Record w TS jest zdefiniowany jak mapowanie po każdym kluczu z unii:
// Czyli typ mówi: „obiekt ma mieć właściwość dla każdego możliwego Environment jako klucza”
type Config = Record<Environment, { apiBaseUrl: string; timeout: number }>;
// @ts-expect-error błąd braku innych kluczy
const x:Config = {"development": {apiBaseUrl: 'https:/', timeout: 10.1}}
console.log(x)