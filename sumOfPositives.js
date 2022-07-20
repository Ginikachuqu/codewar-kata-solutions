function positiveSum(arr) {
    return arr.map((i) => (i >= 0 ? i : null)).reduce((a, c) => a + c, 0);
}

// Refactored Code
// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

console.log(positiveSum([1, -4, 7, 12]))