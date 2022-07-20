function positiveSum(arr) {
    return arr.map((i) => (i >= 0 ? i : null)).reduce((a, c) => a + c, 0);
}

console.log(positiveSum([1, -4, 7, 12]))