// Task
// Given a Divisor and a Bound, Find the largest integer N, Such That ,
// Conditions:
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Solution
function maxMultiple(divisor, bound) {
    var num = [];
    for (var i = 1; i <= bound; i++) {
        i <= bound && i % divisor === 0 ? num.push(i) : null;
    }
    return Math.max.apply(Math, num);
}
console.log(maxMultiple(2, 7));
