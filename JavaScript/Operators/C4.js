//comparision operators
var a = 10
var b = 20
var c = 10

console.log(a < b) // true
console.log(a > b) // false

console.log(a <= b) // true
console.log(a >= b) // false

console.log(a == c) // true
console.log(a == b) // false

console.log(a != c) // false

var a = 10 //number
var b = 10.0  //number
var c = "10"

console.log(a == b) // true
console.log(a === b) // true

console.log(a == c) // true
console.log(a === c) // false (expects the same datatype)