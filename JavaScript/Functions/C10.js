//Higer Order Functions
//The function that takes as arguments and returns a function
f1 = function(a){
    console.log(a)
    return function(b){
        console.log(a+b) // 15
        console.log(a-b) // 5
        console.log(a*b) // 50
    }
}

f = f1(10)
f(5)