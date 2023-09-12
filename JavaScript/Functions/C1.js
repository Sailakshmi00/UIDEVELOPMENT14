//function are used for reuseability
//in javascript we use function as keyword to declare function

//function without any arguments
function f1(){
    console.log("f1 function")
}

//function call 
f1()

//function with arguments
function f2(fname, lname){
    console.log(fname  + " " + lname)
}

f2("Sai", "Kiran")
f2("Sai", "Kumar")
f2("Sai", "Ram")

//function using return keyword
function f3(a, b){
    return console.log(a+b)
}
f3(10, 20)

function f4(a, b){
    c = a+b
    return c
}
console.log(f4(10, 20))