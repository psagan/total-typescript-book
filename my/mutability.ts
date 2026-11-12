type Money = "coint" | "bank note"

// let g = "bank note" // <- error here
const g = "bank note"

function sayMoney(param: Money) {
    console.log(param);
}

let wroom = () => console.log('ok')
wroom = (): void => console.log('ok!')

sayMoney(g);

wroom()
