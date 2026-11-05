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

import { Customer } from "./types/customer.types";
let customer: Customer = {
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 100
}

const showArgs = (...args:number[]):void => {
    console.log(args.join('-'))
}

showArgs(1,2,3,4)