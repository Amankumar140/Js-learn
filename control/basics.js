// falsy value== false, 0,-0,BigInt
// truthy values => "0", 'false', " ",[],{}, function(),

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    //console.log("obj is empty");
}

// Nullish Coalescing Operator (??) : null undefined
// only for null and undefined

let val;
val=5 ?? 10 // assign 5 
val1=null ?? 10 // assign 10
val2=undefined ?? 10 // assign 10