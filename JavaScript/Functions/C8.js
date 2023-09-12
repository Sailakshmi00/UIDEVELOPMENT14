//function with arguments and template strings
function f1(fname, lname){
    console.log("First Name is ", fname , "Last Name is ", lname) 
    console.log(`First Name is  ${fname} Last Name is ${lname}`)
}

f1("Sai", "Kiran")

//Assign function to a variable with arguments
f2 = function(fname, lname){
    console.log("First Name is ", fname , "Last Name is ", lname)
    console.log(`First Name is  ${fname} Last Name is ${lname}`)
}

f2("Sai", "Kiran")

//Arrow function with arguments
f3 = (fname, lname) => { console.log("First Name is ", fname , "Last Name is ", lname)}
f3("Sai", "Kiran")

f4 = (fname, lname) => `First Name is  ${fname} Last Name is ${lname}`
console.log(f4("Sai", "Kiran"))
