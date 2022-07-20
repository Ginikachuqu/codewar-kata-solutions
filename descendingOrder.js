// 7Kyu
function descendingOrder(n) {
  return +n.toString().split('').sort((a, b) => b > a ? 1 : -1).join('')
}

console.log(descendingOrder(42145))