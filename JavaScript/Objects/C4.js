//Using object literals as values in another object
//string literals
var firstName = "Sai"
var lastName = "Kiran"

//object literals
var l1 = {
    
    //calling string literals as values in object
    fName: firstName,
    lName: lastName

}
console.log(l1) //{ fName: 'Sai', lName: 'Kiran' }

//we write value directly in next object
var l2 = {
    firstName,
    lastName
}
console.log(l2)  // { firstName: 'Sai', lastName: 'Kiran' }
