// 7 Kyu
function heron(a, b, c) {
  let s = (a + b + c) / 2
  return +Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

// console.log(heron(5, 2, 3))