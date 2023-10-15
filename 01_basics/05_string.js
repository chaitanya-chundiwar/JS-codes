// const name = "chaitanya"
// const repoCount = 50

// // follow standareds is good practice
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

    const gameName = new String('chaitanya-ck-com-in')
    console.log(gameName)

console.log(gameName[0]); 
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
 
const  newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);



// const browserType = "mozilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }



const newStringOne = "   chaitanya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sudheer'))

console.log(gameName.split('-')) // it splits the given string based on "-"

