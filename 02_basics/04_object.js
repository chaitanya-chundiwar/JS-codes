//const tinderUser = new Object() // singleton
const tinderUser = {} // non single ton

tinderUser.id = "123abc"
tinderUser.name = "sami"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullName : {
            firstName : "chaitanyak",
            lastName : "chundi"
        }
    }
}
//console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3= {obj1,obj2}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

//values from databases as array of object
const users = [
    {
        id: 1,
        email : "cha@gmail.com", 
    },
    {
        id: 2,
        email : "ch@gmail.com", 
    },
    {
        id: 1,
        email : "sus@gmail.com", 
    }
]

// console.log(users[1].email)
// console.log(tinderUser);
//Object.keys
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // it array of array  like [ [ 'id', '123abc' ], [ 'name', 'sami' ], [ 'isloggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    courseName : "javascript leaning",
     price : 999,
     courseInstructor : "histesh"   
}

//course.courseInstructor //general way
 const {courseInstructor: instructor} = course  //other way , we give reference to courseInstructor

 //console.log(courseInstructor);
 console.log(instructor);

//  {
//     "name": "chaitanya",
//     "courseName": "js in hindi",
//     "price": "free"
//  }

[
    {},
    {},
    {}
]
