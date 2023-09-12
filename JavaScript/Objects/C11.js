var l1 = {
    firstName: "Sai",
    lastName : "Kiran",
    f1 : function(age, contact){
        console.log(this.firstName, this.lastName)
        console.log(age, contact)
    }
}

console.log(l1)
l1.f1(26, 9876543210)

//function borrowing
//call()
l1.f1.call(l1, 28, 9876543210) // 28 9876543210

//apply()
l1.f1.apply(l1, [30, 9876543210]) // 30 9876543210

//bind()
var b = l1.f1.bind(l1, 32, 9876543210)
b()