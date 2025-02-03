const arr=[1,2,3,4,5];
// it makes shallow copy means same references
// deep copy means not share same references

const arr1=['a','b'];
const arr3=new Array(1,2,3,4);
// array methods
// arr3.push(6);
// arr3.pop();
// console.log(arr3.unshift(7)); // add element at start by shifting and return length of array
// console.log(arr3) 
// console.log(arr3.unshift(6));
// //console.log(arr3.shift(7)); // remove element from start by shifting
// console.log(arr3) 

const newArray=arr3.join();
// console.log(arr3);// [1,2,3,4]
// console.log(newArray);// 1,2,3,4
// console.log(typeof newArray);// string

// slice , splice

const myArray=[0,1,2,3,4,5,6];
//console.log(myArray);
const myA1=myArray.slice(1,3); // 3 exclude and not modify the original array
const myA2=myArray.splice(1,3);// 3 included but modify array and remove the elements
// console.log("A " ,myA1 );
// console.log("B " ,myA2 );
// console.log(myArray);

const a1=[1,2,3]
const a2=[4,5,6]
//a1.push(a2)// append the array but make [1,2,3,[4,5,6]] 2d array
//console.log(a1);
// another method concat
const a3=a1.concat(a2);//[1,2,3,4,5,6] and return new array
//console.log(a3);

//spread means spread

const a4=[...a1,...a2] // [1,2,3,4,5,6]
// console.log(a4); 



const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5,[6,7,[90,[5,[7,[9]]]]]]],8];
const flatArray=anotherArr.flat(Infinity);//  1, 2, 3, 4, 5, 6,  7, 6, 7, 4, 5, 6, 7, 90, 5, 7, 9, 8
//console.log(flatArray);

console.log(Array.from("Aman"));
console.log(Array.from( {name : "aman"})); //[] now you have to specify for that on what basis u want to create the array like key or values

let score1=100;
let score2=200;
console.log(Array.of(score1,score2));