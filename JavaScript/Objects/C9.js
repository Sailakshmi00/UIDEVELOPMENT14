//call() function borrowing
var l1 = {
    firstName : "Sai",
    lastName : 'Kiran',
    f1 : function(){
        console.log(this)
        console.log(this.firstName, this.lastName)
    }
}
console.log(l1) 
l1.f1() 
//{ firstName: 'Sai', lastName: 'Kiran', f1: [Function: f1] }
//Sai Kiran
// { firstName: 'Sai', lastName: 'Kiran', f1: [Function: f1] }

var l2 = {
    firstName : "Vamsi",
    lastName : "Kumar"
}

l1.f1.call(l2)
console.log(l2)

// { firstName: 'Vamsi', lastName: 'Kumar' }
// Vamsi Kumar
// { firstName: 'Vamsi', lastName: 'Kumar' }

var l3 = {
    firstName : "Sai",
    lastName : "Kumar"
}
l1.f1.call(l3)
console.log(l3)
// { firstName: 'Sai', lastName: 'Kumar' }
// Sai Kumar
//{ firstName: 'Sai', lastName: 'Kumar' }
