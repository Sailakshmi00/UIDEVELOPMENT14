//map(func)
l1 = [10, 20, 30, 40, 50]
console.log(l1)

//function outside the map
function f1(values){
    return values*2
}
console.log(l1.map(f1)) //[ 20, 40, 60, 80, 100 ]

//function inside the map
let l2 = l1.map(function(values){
    return values*2
})
console.log(l2) //[ 20, 40, 60, 80, 100 ]

//arrow function inside the map
let l3 = l1.map((values)=>{
    return values*2
})
console.log(l3) //[ 20, 40, 60, 80, 100 ]

let l4 = l1.map((values)=>{
    console.log(values*2) // 20, 40, 60, 80, 100 
})  