function multiply(number){
    let exponent = number.toString().length
    // number.toString().includes('-') ?  - Math.abs(number) * Math.pow(5, exponent - 1) : number * Math.pow(5, exponent)
    if (number.toString().includes('-')) {
        return - (Math.abs(number)) * Math.pow(5, exponent - 1)
    } else {
        return number * Math.pow(5, exponent)
    }
    // return number * Math.pow(5, Math.abs(number).toString().length);
}

console.log(multiply(-3))
console.log(multiply(3))