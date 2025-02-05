// for loop

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// major loops for arrays...

// for of loop

const array = [1, 2, 3, 4, 5, 6];

for (let i of array) {
  //console.log(i);
}

// for in

const greetings = "hello World";
for (const greet of greetings) {
  //console.log(` greet is ${ greet}`)
}

// Maps -> like hash map & ordered unique values always..

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "America");
map.set("Fr", "France");
//console.log(map);

for (const [key, value] of map) {
  //console.log(key , '-', value);
}

const myObject = {
  game1: "nfs",
  game2: "spiderman",
};

// for(const [key,value] of myObject){ // muObject is not iterable
//     //console.log(key , '-', value);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for iterate on objects
// use for in => iterate over keys

const myObj = {
  js: "javascript",
  cpp: "c++",
  py: "python",
  md: "mongodb",
};
for (let key in myObj) {
  //console.log(key); // for properties
  // console.log(`${key} : ${myObj[key]}`)
}

// for in always returns the keys..

const programming = ["c++", "js", "py", "java"];
for (const i in programming) {
  // console.log(i); // index values
  //console.log(programming[i]); // values
}

//now check over map
for (const key in map) {
  // console.log(key); // no values not iterable..
}

// ---------------------------------------------------------=============================================++++++++++++++++++++++++++++++++
// for each loop

const coding = ["c++", "js", "py", "java"];

//in for each loop their is no function name b/c it is callback function...
coding.forEach(function (item) {
  //console.log(item);
});

coding.forEach((item)=>{
    //console.log(item);
})

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe);


coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})


const myCoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
    {
        languageName:"c++",
        languageFile:"cpp"
    },
    {
        languageName:"java",
        languageFile:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})