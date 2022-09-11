// Task
// Create a function that checks if a number n is divisible
// by two numbers x AND y. All inputs are strictly positive numbers.

// Solution
function isDivisible(n:number, x:number, y:number):boolean {
    return n % x == 0 && n % y == 0 ? true : false
}

console.log(isDivisible(12, 24, 36))