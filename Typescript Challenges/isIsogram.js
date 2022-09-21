function isIsogram(str) {
    // split string
    // Compare each letter of the string with other letters & see if a match is gotten
    // return true || false
    return str
        .split('')
        .every(function (item, pos, self) {
        self.indexOf(item) == pos ? false : true;
    });
}
console.log(isIsogram('aba'));
