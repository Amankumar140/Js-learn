// dates start from 1 jan 1970
// date is object
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());// Mon Feb 03 2025
// console.log(myDate.toISOString());// 2025-02-03T10:23:10.961Z
// console.log(myDate.toLocaleDateString());// 3/2/2025
// console.log(myDate.toLocaleString());// 3/2/2025, 3:53:10 pm

let myCreateDate = new Date(2025, 7, 3);
let CreateDate = new Date("01-14-2024");
// console.log(myCreateDate.toDateString());
// console.log(CreateDate.toLocaleString());

// timeStamp

let myDateStamp= Date.now();
console.log(myDateStamp);
console.log(myCreateDate.getTime());
console.log (Math.floor(Date.now()/1000))// for seconds 

let newdate= new Date()

