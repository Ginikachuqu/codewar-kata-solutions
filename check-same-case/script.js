const regEx = {
    alphabet: /^[a-zA-Z]*$/,
    uppercase: /^[A-Z]*$/,
    lowercase: /^[a-z]*$/,
}

function sameCase(a, b){
  if (!regEx.alphabet.test(a) || !regEx.alphabet.test(b)) {
    return -1
  } else if (regEx.uppercase.test(a) == regEx.uppercase.test(b)) {
    return 1
  } else if (regEx.lowercase.test(a) == regEx.lowercase.test(b)) {
    return 1
  } else {
    return 0
  }
}

console.log(sameCase('0', '?'))