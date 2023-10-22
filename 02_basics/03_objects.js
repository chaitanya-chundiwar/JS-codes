//constructor as Singleton 
//Object are declared as literals or constructor 

//Object.create

const mySym = Symbol("key1")

//1 Object literal
const JSUser = {
Name : 'chaitanya',
"full name": "chaitanya krishna",
age : 26,
[mySym] : "mykey1",
location : "Dallas, Tx",
email : "chaitanya@gmail.com",
isLoggedIn: false,
lastLoginDays: ["monday", "saturday"]
}


// console.log(JSUser.email)
//2 ways
// console.log(JSUser["email"])
//console.log(JSUser["full name"])

//console.log(JSUser[mySym])

JSUser.email = "krishan@gmail.com"

//console.log(JSUser.email) // changes are made

//Object.freeze
 //Object.freeze(JSUser)
 JSUser.email = "krishana@microsoft.com"
// console.log(JSUser);

// function can also be treated as variable
JSUser.greeting = function(){
console.log("Hello JS User")
}
JSUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.Name}`)
 }
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());


