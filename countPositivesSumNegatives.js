// Unresolved

function countPositivesSumNegatives(input) {
    const isAllZero = (cur) => cur === 0

    if (input === [] || input.every(isAllZero)) {
        return 'IV'
    } else {
        const positives = input.filter((i) => i > 0);
        const negatives = input.filter((i) => i < 0);
        return new Array(
          positives.length,
          negatives.reduce((acc, cur) => acc + cur, 0)
        );
    }
}

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// );
console.log(countPositivesSumNegatives([0, 0]))