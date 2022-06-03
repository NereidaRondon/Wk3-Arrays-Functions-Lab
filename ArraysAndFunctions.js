let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]); //prints 6

// print the last element in array1
console.log(array1.length);

let i = array1.length - 1;
console.log(array1[i]);

// add 16 and 3 to array1

array1.push(16, 3);
console.log(array1);

// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1[2]); //prints 14, it did change

// create a variable called myTodoList that holds an empty array
var myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push(
  "Read emails",
  "Post on Slack",
  "Create a new directory on GitHub"
);
console.log(myTodoList);

// remove the second item in the array
let removedItem = myTodoList.splice(2, 1);
console.log(removedItem);
console.log(myTodoList);

// create another array, yourTodoList, and add two todo items
var yourTodoList = [];
yourTodoList.push("Watch lesson videos", "Complete homework assignment");
console.log(yourTodoList);

// create another array, ourTodoList
var ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);

// sort the following array from Z-A
/*ourTodoList.sort();
ourTodoList.reverse;
console.log(ourTodoList);*/

ourTodoList.sort(function (a, b) {
  return b - a;
});
console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
