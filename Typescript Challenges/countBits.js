// Write a function that takes an integer as input,
// and returns the number of bits that are equal to
// one in the binary representation of that number.
// You can guarantee that input is non-negative.
function countBits(n) {
    // let num = []
    return n.toString(2).split('').filter(function (x) { return x == '1'; }).length;
    // return num.length
}
console.log(countBits(3339522749242465));
