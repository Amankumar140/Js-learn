// const user={
//     username:"aman kr",
//     price: 200,
//      welcome:function  (){
//         console.log(`Welcome ${this.username} in the website`);
//     }
// }

// //user.welcome()

// //  
// //console.log(this) in the node environment this object is refer to empty object 
// // on the other hand on browser this refer to window and we access the whole window prototypes and etc..

// // function chai(){
// //     let username="aman"
// //     console.log(this.username); // undefined b/c in function this is not used
// // }

// function Chai(){
//     console.log(this)
// }
// //Chai() // gives many methods...
// const chai=()=>{
//     console.log(this) // {}
// }
// // find difference between function and arrow function...


// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// /// more about arrow function..
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addtwo=(num1,num2)=>  num1+num2; // implicit return it executes  without return function..

// // how to return objects

// const hello=()=>({username:"aman"})











//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Immediately Invoked Function Expressions (IIFE)

// it is used to remove the pollution occurs by global scope

(function chai(){
    // named iife b/c name of function
    console.log(`DB connected`);
})();
// syntax (function)(); always use semicolon after for run 2 iife

// also by arrow function
((name)=>{
    console.log(`${name}, welcome`)
})('aman');

