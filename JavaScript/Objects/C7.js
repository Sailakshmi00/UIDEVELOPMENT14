//updating, adding, deleting properties
//String literals
fName = "Sai"
lName = "Kiran"

//Object literals
var l1 = {
    firstName : fName,
    lastName : lName
}

console.log(l1) //{ firstName: 'Sai', lastName: 'Kiran' }

l1.firstName = "Vamsi"
l1.lastName = "Kumar"

console.log(l1) //{ firstName: 'Vamsi', lastName: 'Kumar' }

l1.job = "IT"
l1.contact = 9876544210

console.log(l1)

// {
//     firstName: 'Vamsi',
//     lastName: 'Kumar',
//     job: 'IT',
//     contact: 9876544210
// }

delete l1.lastName
console.log(l1) //{ firstName: 'Vamsi', job: 'IT', contact: 9876544210 }