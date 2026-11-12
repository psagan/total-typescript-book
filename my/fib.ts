import {expect, it}  from "vitest";

const nthFibonacci = (n: number): number => {
    if(n < 2) {
      return n;
    }

    let prev = 0; // F(i-2)
    let curr = 1; // F(i-1)
    for(let i = 2; i <= n; i++) {
        const next = curr + prev;
        prev = curr;
        curr = next;
    }

    return curr;
}


it("nthFibonacci(0) is 0", () => {
    expect(nthFibonacci(0)).toBe(0);
});
it("nthFibonacci(1) is 1", () => {
    expect(nthFibonacci(1)).toBe(1);
});
it("nthFibonacci(2) is 1", () => {
    expect(nthFibonacci(2)).toBe(1);
});
it("nthFibonacci(8) is 21", () => {
    expect(nthFibonacci(8)).toBe(21);
});