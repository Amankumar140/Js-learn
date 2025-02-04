// singleton
//Object constructor -> also made singleton

// object literals

const mySym=Symbol("key1")

const JsUser = {
  name: "aman",
  age: 20,
  "full name": "aman kumar", // can't access by dot operator
  location: "noida",
  [mySym]:"symbol",         // for symbol 
  email: "aman@google.com",
  isLogged: false,
};

// access by . or []
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]) // for symbol operations

JsUser.email="aman@chatgpt.com";
//Object.freeze(JsUser); // no updation is allow..
//console.log(JsUser)

JsUser.greeting= function(){
    console.log("hello Js User")
}
//console.log(JsUser.greeting)// only reference of function
 //JsUser.greeting(); // calling function


JsUser.greetingTwo=function(){
    console.log(` hello ${this["full name"]}`)
}
//console.log(JsUser);
//JsUser.greetingTwo()



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const tinderUser={}
tinderUser.id="123abc"
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularUser={
  email : "some@gmail.com",
  fullname:{
    userFullname:{
      firstName:"Aman",
      lastName:"kumar"
    }
  }
}
//console.log(regularUser);
//console.log(regularUser.fullname.userFullname.firstName)

// combine array

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};
const obj5={5:'a',6:'b'};

const obj3=Object.assign({}, obj1,obj2)//(target,sources...) if target not given the it all goes in obj1
//console.log(obj3)

const obj4={...obj1,...obj2,...obj5,...obj3} // obj3 overwrites the values of obj1 and obj2
//console.log(obj4);

//console.log(tinderUser)
console.log(Object.keys(tinderUser)); // return an array of keys
console.log(Object.values(tinderUser)); // return an array of values
console.log(Object.entries(tinderUser)); // return an array of entries

console.log(tinderUser.hasOwnProperty('isLogged')); // false for checking values


const course={
  courseName:'js in hindi',
  price:999,
  courseInstructor:'hitesh'

}

// 
const {courseInstructor}=course  // it is use for the easy... called object destructure
console.log(courseInstructor) 

