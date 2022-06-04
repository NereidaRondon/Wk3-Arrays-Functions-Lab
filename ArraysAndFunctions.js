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

//Solution from Instructor
ourTodoList = [...myTodoList, ...yourTodoList];
console.log(ourTodoList);

console.log("Sort by Alphabetical order");
// sort the following array from Z-A
ourTodoList.sort();
ourTodoList.reverse();
console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
let numbers = [1, 5, 4, 3, 2, 6, 3, 1];
console.log("Array in Reverse");
numbers.sort();
numbers.reverse();
console.log(numbers);

function reverse(x) {}

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
let addingMachine1 = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(addingMachine1);

//Solution from Instructor
let arguements = [1, 2, 3, 4]; //???

function addingMachine() {
  console.log(arguments); //???
  let sum = 0;
  for (let i = 0; i < arguements.length; i++) {
    let number = arguments[i];
    sum += number;
  }
  return sum;
}
console.log(addingMachine(1, 2, 3, 4));
// console.log(addingMachine(1,2,3,4,5,6,7));
// console.log(addingMachine(1,2,3,4,5,6,7,7,9,4,2344,112,34343,234));

// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function myBonus(grossInvoiced, profitMargin) {
  let profits = grossInvoiced * profitMargin;

  let bonus = 0;

  let tier1Cieling = 100000;
  let tier2Cieling = 400000;
  let tier3Cieling = 500000;

  let tier1Rate = 0.1;
  let tier2Rate = 0.2;
  let tier3Rate = 0.35;
  let tier4Rate = 0.4;

  let maxBonusTier1 = tier1Cieling * tier1Rate;
  let maxBonusTier2 = tier2Cieling * tier2Rate + maxBonusTier1;
  let maxBonusTier3 = tier3Cieling * tier3Rate + maxBonusTier2;

  if (profits <= tier1Cieling) {
    bonus = profits * 0.1;
  } else if (profits <= tier2Cieling + tier1Cieling) {
    bonus = maxBonusTier1 + (profits - tier1Cieling) * tier2Rate;
  } else if (profits <= tier3Cieling + tier2Cieling + tier1Cieling) {
    bonus = maxBonusTier2 + (profits - tier1Cieling - tier2Cieling) * tier3Rate;
  } else if (profits > 1000000) {
    bonus =
      maxBonusTier3 +
      (profits - tier1Cieling - tier2Cieling - tier3Cieling) * tier4Rate;
  } else {
    return "Error";
  }

  return bonus;
}

console.log(myBonus(10000, 0.563));
console.log(myBonus(250000, 0.356));
// console.log(myBonus(750000, .235))
// console.log(myBonus(35000000, .487))
