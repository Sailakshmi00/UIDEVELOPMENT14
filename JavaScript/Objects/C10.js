var l1 = {
    firstName : "Sai",
    lastName : "Kiran"
}
console.log(l1) // { firstName: 'Sai', lastName: 'Kiran' }

f1 = function(){
    console.log(this.firstName, this.lastName) 
}

//call()
f1.call(l1)

// { firstName: 'Sai', lastName: 'Kiran' }
// Sai Kiran

var l2 = {
    firstName : "Vamsi",
    lastName : "Kumar"
}

f1.call(l2)

