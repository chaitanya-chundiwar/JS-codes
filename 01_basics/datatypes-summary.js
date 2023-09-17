//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLogggedIn = false
const outsideTemp = null
let userEmail;//undefined 

const id = Symbol("123")
const anotherid = Symbol("123")
//both are not same
console.log(id === anotherid)

//const bigNumber = 1235656888373364363334n

//Reference (Non primitives)

// Array, Objects, Functions
const heros = ["sakthiman", "krish" , "hanuman", "bhim"];

// object is in {} 
let myObject = {
    name: "chaitanya",
    age: 22,
}

//funtion can be declared in variable
const myFuntion = function(){
    console.log("Hello World!")
}

console.log(typeof outsideTemp)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive) 

let myYoutubename = "chaitanyadotnetcom"

let anothername = myYoutubename
anothername = "coffeeaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "chaitanya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
