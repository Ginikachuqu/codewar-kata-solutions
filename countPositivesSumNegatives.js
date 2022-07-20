function countPositivesSumNegatives(input) {
    const isAllZero = (cur) => cur === 0

    if (input === [] || input == null || input.every(isAllZero)) {
        return []
    } else {
        const positives = input.filter((i) => i > 0);
        const negatives = input.filter((i) => i < 0);
        return new Array(
          positives.length,
          negatives.reduce((acc, cur) => acc + cur, 0)
        );
    }
}

// Refactored Code
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
// console.log(countPositivesSumNegatives([0, 0]))