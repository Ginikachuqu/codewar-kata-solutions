// Unresolved

function isIsogram(str: string): any{
    return str.split('').every((n, i, arr) => arr.indexOf(n) == i ? false : true)
}

console.log(isIsogram('aba'))