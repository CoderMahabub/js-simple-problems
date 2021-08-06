//Swap First Approach
// var first = 5;
// var second = 7;
// console.log(first, second);
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//Swap Try Approach
// let numberA = 55;
// let numberB = 66;
// console.log(numberA, numberB);
// let temp = numberA;
// numberA = numberB;
// numberB = temp;
// console.log(numberA, numberB);

//destructuring Approach
var first = 5;
var second = 7;
[first, second] = [second, first];
console.log('Swap first number to second number', first, second);

