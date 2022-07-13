function capitalizeWord(word) {
    let newWord = word.split('')
    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
}

console.log(capitalizeWord('tetchramunchen'))