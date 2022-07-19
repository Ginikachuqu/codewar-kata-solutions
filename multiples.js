// Unresolved

function findMultiples(integer, limit) {
    var cuss = []

    for (i = 1; i <= limit; i++) {
        i % integer == 0 ? cuss = cuss.push(i) : null
    }

    return cuss
}

// let integer = 5
// let limit = 25
// let cuss = []

// for (i = 1; i <= limit; i++) {
//     i % integer == 0 ? cuss.push(i) : null
// }

// console.log(cuss)
console.log(findMultiples([2, 6]))