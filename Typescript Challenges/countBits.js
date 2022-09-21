// Write a function that takes an integer as input,
// and returns the number of bits that are equal to
// one in the binary representation of that number.
// You can guarantee that input is non-negative.
function countBits(n) {
    var num = [];
    var dec = n.toString(2).split('').map(function (x) { return x == '1' ? num.push(x) : null; });
    return num.length;
}
console.log(countBits(3339522749242465));
