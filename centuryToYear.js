// Unresolved

function century(year) {
    return year < 1900 ? Math.floor(year / 100 + 1) : Math.round(year/100)
}

console.log(century(59533))