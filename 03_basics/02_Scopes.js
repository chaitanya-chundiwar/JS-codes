//var c = 300
let a = 300
if (true) { //block 
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // 
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
// const userName = "chaitanya"
//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     }
//     //console.log(website);
//     two()
// }
// one()

// if(true){
//     const userName = "chaits"
//     if(userName === "chaits"){
//         const website = " youtube channel"
//         console.log(userName + website);
//     }
//     //console.log(website);
// }
//console.log(userName)

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num+1;
}

const addTwo = function(num){
    return num+2
}
addTwo(5)