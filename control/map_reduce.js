const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers.map((num) => num + 10);
//console.log(newNum);

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 3)
  .filter((num) => num >= 40);

//console.log(newNums);
// while chaining the num always updated in each mapping

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// reduce method...

const myNums = [1, 2, 3, 4, 5];
const sum = myNums.reduce(function (acc, currval) {
  //console.log(`acc :${acc} and currval : ${currval} `)
  return acc + currval;
}, 0);
//console.log(sum);

//now how arrow functions...

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
//console.log(myTotal);

const shoppingCart = [
  {
    itemname: "python",
    price:300,
  },
  {
    itemname: "mobile dev course",
    price: 309
  },
  {
    itemname: "mobile dev course",
    price: 3000
  },
  {
    itemname: "mobile dev course",
    price: 307
  }
];

const priceTopay=shoppingCart.reduce((acc,item)=> acc+item.price,0);
console.log(priceTopay);