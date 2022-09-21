// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    return text
            .split('')
            .map((x) => /^[a-zA-Z]+$/.test(x) ? x.toLowerCase().charCodeAt(0) - 97 + 1 : undefined)
            .filter(x => x != undefined)
            .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))