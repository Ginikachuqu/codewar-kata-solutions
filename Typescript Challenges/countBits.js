function countBits(n) {
    var num = [];
    var dec = (n >>> 0).toString(2).split('').map(function (x) { return x == '1' ? num.push(x) : null; });
    return num.length;
}
console.log(countBits(10));
