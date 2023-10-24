// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }

// function addTwoNumber(num1, num2){ // num1, num2 are parameters 
//     console.log(num1+num2);
// }
function addTwoNumber(num1, num2){ // num1, num2 are parameters 
    // let result;
    // result = num1+num2;
    //return result;
return num1+num2
    console.log('hitesjh') // after result nothing will prient
}

const result = addTwoNumber(3,4) // 3,a are called arguments 
//console.log("Result: ", result);

function loginUserMessage(username = "sam"){ // by default sam is returned if no value is given , if value is given it is overrided 
    if(!username){ // if no username is given
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
 //console.log(loginUserMessage("hitesh"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateCartPrice(val1, val2, ...num1){ // it give all the  value as array
//     return num1
// }
//console.log(calculateCartPrice(200, 230, 300))



// const user = {
//     username: "chaiyts",
//     price: 199 
// }


// function handleObject(anyObject){ // take  genaric parameters 
// return `username is ${anyObject.username} and price is ${anyObject.price}`;
// }
// //handleObject(user);
// const sample = {
//     username: "kumar",
//     price: 24 
// }
//console.log(handleObject(sample));



const myNewArray = [200,300,400,900,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));\
console.log(returnSecondValue([233,34,444,55]));
