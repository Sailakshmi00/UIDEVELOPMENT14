var l1 = [10, 20, 30, 40, 50, 10, 20]
//         0   1   2   3   4   5   6
console.log(l1)
console.log(l1.length) //7
console.log(l1[0]) // 10
console.log(l1[1]) // 20
console.log(l1[2]) // 30
console.log(l1[3]) // 40
console.log(l1[4]) // 50
console.log(l1[5]) // 10
console.log(l1[6]) // 20
console.log(l1[7]) // undefined
console.log(l1.length) //7

l1[0] = 100
console.log(l1) // [100, 20, 30, 40, 50, 10, 20]

l1[7] = 700
console.log(l1) //[100, 20, 30, 40, 50, 10, 20, 700]

l1[8] = 800
console.log(l1) //[100, 20, 30, 40, 50, 10, 20, 700, 800]

l1[10] = 800
console.log(l1) // [ 100, 20, 30, 40, 50, 10, 20, 700, 800, <1 empty item>, 800 ]

console.log(l1.length) //11

l1[9] = 900
console.log(l1) //[ 100, 20, 30, 40, 50, 10, 20, 700, 800, 900, 800 ]

//iteration
for(var i = 0; i<l1.length; i++){
    console.log(l1[i])
}

//while loop

//do while
