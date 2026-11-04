const writer = (array: Array<string | number>) => {
    for(let item of array) {
        console.log(item);
    }
}

let numbers: number[] = [1, 2, 3, 4, 5];
writer(numbers);

let chockolates: Array<string> = ["Milka", "Snickers", "Mars"];
writer(chockolates);

