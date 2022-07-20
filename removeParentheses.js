// Unresolved

function removeParentheses(s){
    const n = s.split('')
    const start = n.indexOf('(')
    const end = n.indexOf(')')
    const range = n.slice(start, end + 1).join('')
    return n.join('').replace(range, '')
}

console.log(removeParentheses("example(unwanted thing)example"))