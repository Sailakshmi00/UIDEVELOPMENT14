// arguments
var f = function f1(){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments.length)
}

f("NameOne")
f("NameOne", "NameTow", "NameThree")