//Nested Object
userDetails = {
    firstName: 'Sai',
    lastName : 'Kiran',
    userAddress : {
        job : "IT",
        contact : 9876543210
    }
}
console.log(userDetails)

// {
//     firstName: 'Sai',
//     lastName: 'Kiran',
//     userAddress: { job: 'IT', contact: 9876543210 }
// }

console.log(userDetails.firstName + ' ' + userDetails.lastName) //Sai Kiran
console.log(userDetails.userAddress.job + ' ' + userDetails.userAddress.contact) // IT 9876543210