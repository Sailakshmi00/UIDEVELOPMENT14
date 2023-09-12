//strings
userName = "NameOne"
console.log(userName) //NameOne
console.log(typeof(userName)) //string
console.log(userName[0]) //N

//immutable
userName[0] = "n"
console.log(userName) //NameOne
console.log(userName[0]) //N

userName[0] = "K"
console.log(userName) //NameOne
console.log(userName[0]) //N

//string is sequence of characters
//string is immutable
//in javascript we can create a strings in two ways
//using literal  and using constructor

var userName = String("Sai Kiran")
console.log(userName) //Sai Kiran