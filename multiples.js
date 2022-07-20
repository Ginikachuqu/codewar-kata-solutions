function findMultiples(integer, limit) {
    let cuss = []

    for (i = 1; i <= limit; i++) {
        i % integer == 0 ? cuss.push(i) : null
    }

    return cuss
}

// Refactored Code
// function findMultiples(int, limit) {
//   return Array(Math.floor(limit / int))
//     .fill(1)
//     .map((x, i) => int * (i + 1));
// }

console.log(findMultiples(2, 6))