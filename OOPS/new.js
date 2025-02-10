const user = {
  username: "aman",
  loggedIn: true,
  age: 20,
  getDetails: function () {
    //console.log(`Username: ${this.username}`)
  },
};
//console.log(user.getDetails());

// constructor....-> always give the new objects/instance

// new always
// 1.create new instance
// 2. constructor function called on basis of arguments..
// 3. values assign
// 4 . function made..

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++_____---------------------------

// prototype...

//function also behaves as also Objects that in js every things is Objects..
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
