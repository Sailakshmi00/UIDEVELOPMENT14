//function without arguments
function f1(){
    console.log("f1 function") //f1 function
}

f1()

//Assign function to a variable without arguments
f2 = function(){
 console.log("f2 function") //f2 function
}

f2()
console.log(typeof(f2)) //function
console.log(f2) //[Function: f2]

//Arrow function without arguments
f3 = () => {console.log("Arrow function")} //Arrow function
f3()
console.log(typeof(f3)) //function
console.log(f3) //[Function: f3]