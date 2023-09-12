//pure function
function f1(){
    n = 5
    square = n*n
    console.log(square)
}
n = 10
f1()

//impure function
n = 5
function f2(){
    square = n*n
    console.log(square)
}
n = 10
f2()

//pure function
function loginUser(username, password){

    if(username == "Admin" && password == "Admin"){
        console.log("Login Success")
    }else{
        console.log("Login Failure")
    }
}

loginUser("Admin", "Admin")

//impure function
function loginAdmin(username, password){
    username = "Developer"
    if(username == "Admin" && password == "Admin"){
        console.log("Login Success")
    }else{
        console.log("Login Failure")
    }
}

loginAdmin("Admin", "Admin")