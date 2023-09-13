l1 = [10,20,30,40,50]
l2 = [60,70,80,90,100]
l3 = [...l1,...l2]
console.log(l3)

//objects
obj1 = {
    firstName : "sai",
    lastName : "lakshmi"
}
obj2 = {
    age : 21,
    contact : 9876543456
}
obj3 = {
    ...obj1,...obj2
}
console.log(obj3)