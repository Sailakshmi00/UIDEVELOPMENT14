//passing default values in function 
function f1(a=10, b=20, c){
    console.log(a,b,c);
}

f1(100, 200, 300)
f1()

//passing key value pairs in function
function f2(a, b){
    return console.log(a+b);
}
f2(a = 1000 , b= 2000)

