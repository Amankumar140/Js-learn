function hello(){
    console.log("hello aman");
}

// hello()

function sum(a,b){// a,b ares parameters
    return a+b;
}
//console.log(sum(3,4)); // here arguments are passed

const result=sum(8,6);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("aman"));
// console.log(loginUserMessage());


// shopping card..

// for multiple arguments

function calculateCartPrice(...a){ // rest operator-> multiple arguments
    return a;
}


function calculateCartPrices(val1,val2,...val){ 
    return val; // return by skipping first 2 elements..
}
// console.log(calculateCartPrice(2,3,4,6));//2,3,4,5
// console.log(calculateCartPrices(2,3,4,6));//4,6


// we can also pass objects 
let my_obj={
    name: "aman",
    age: 20
}

function myObject(object){
    return `${object.name} is of ${object.age}.`
}
//console.log(myObject(my_obj));



//________________________________++++++++++++++++__________

// interesting

console.log(addone(7)); // this is execute because function hoisting
function addone(num){
    return num+1;
}
console.log(addone(7));

//console.log(addTwo(8)); // for this type of function declaration not execute and known as function hoisting..
const addTwo=function(num){
    return num+2;
}
//console.log(addTwo(8));






