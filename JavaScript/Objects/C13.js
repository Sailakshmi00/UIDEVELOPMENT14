//filter(func)
l1 = [10, 20, 30, 40, 50]
console.log(l1)

//function outside the filter
function f1(values){
    return values>20
}
console.log(l1.filter(f1)) //[ 30, 40, 50 ]

//function inside the filter
let l2 = l1.filter(function(values){
    return values>20
})
console.log(l2)

//arrow function inside the filter
let l3 = l1.filter((values)=>{
    return values>20
})
console.log(l3)

let l4 = l1.filter((values)=>{
    console.log(values>20)
})