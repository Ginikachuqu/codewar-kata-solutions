function sumArray(array) {
  if (array == null || array.length == 0 || array.length == 1) {
    return 0;
  } else {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const sum = array.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    return sum - (min + max);
  }
}

console.log(sumArray([ 6, 2, 1, 8, 10]));
