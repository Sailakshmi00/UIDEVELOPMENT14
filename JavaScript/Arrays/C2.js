//indexOf()
l1 = [10, 20, 30, 40, 50]
console.log(l1) //[ 10, 20, 30, 40, 50 ]
console.log(l1.indexOf(10)) //0
console.log(l1.indexOf(40)) //3
console.log(l1.indexOf(60)) //-1

//includes
l1 = [10, 20, 30, 40, 50]
console.log(l1.includes(10)) //true
console.log(l1.includes(40)) //true
console.log(l1.includes(60)) //false

//push
l1 = [10, 20, 30, 40, 50]
console.log(l1.length) //5
l1.push(60)
l1.push(70)
console.log(l1) //[ 10, 20, 30, 40, 50, 60, 70 ]
console.log(l1.length)  //7
console.log(l1.push(80)) // 8
console.log(l1) //[ 10, 20, 30, 40, 50, 60, 70, 80 ]

//pop
l1 = [10, 20, 30, 40, 50]
l1.pop()
console.log(l1) //[ 10, 20, 30, 40 ]
console.log(l1.pop()) // 40
console.log(l1) // [ 10, 20, 30 ]

//shift()
l1 = [10, 20, 30, 40, 50]
l1.shift()
console.log(l1) //[ 20, 30, 40, 50 ]
console.log(l1.shift()) //20
console.log(l1) 

//unshift()
l1 = [10, 20, 30, 40, 50]
l1.unshift(60)
console.log(l1) // [ 60, 10, 20, 30, 40, 50 ]

