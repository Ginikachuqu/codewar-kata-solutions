// Unresolved 7Kyu

function validatePIN(pin) {    
    return pin.toString().length <= 6 && /^[0-9]*$/.test(pin) ? true : false;
    // return pin.toString().length
}


console.log(validatePIN('a234'))