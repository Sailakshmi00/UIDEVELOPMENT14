//closure
// function f1(){
//     console.log("f1 function called")
// }

// f1()

// f1 = null

// f1()
function f1(a){
    console.log(a)
    function f2(b){
        console.log(b)
    }
    return f2
}

f = f1(100)
f(200)

// f1 = null
// f1() //TypeError: f1 is not a function

// delete f1()
// console.log(f1.a)
