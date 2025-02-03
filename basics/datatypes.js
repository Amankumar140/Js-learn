// Primitive
//7 types String, Number,Boolean, null, undefined,Symbol, BigInt

// reference(Non primitive)

//Array,Objects,functions
// js is dynamically type...


// array, Objects, functions

let fruits=["apple", "mango", "banana"];
let obj={
    name:"Aman",
    age:20,
    year: "2nd"
}

const myFunction= function(){
    console.log("akil");
}
//myFunction()
// null is object type

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) => copy of data, Heap(Non-primitive)=> only references

// let's example here..
let myName="aman kr";
let otherName=myName;
otherName="Tejp";
// console.log(myName); // aman kr
// console.log(otherName);// tejp

// on the other hand for the heap memory and non primitive data-types
let UserOne={
    email: "ak@yahoo.com",
    upi: "anbc67%"
}

UserTwo=UserOne;
UserTwo.email="yahoo@google.com";
// both have same output  this is because it is references in the heap memory to the same data;
// console.log(UserOne.email); // yahoo@google.com
// console.log(UserTwo.email);// yahoo@google.com 




