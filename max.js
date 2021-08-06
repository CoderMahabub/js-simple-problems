const business = 1450;
const minister = 350;
const army = 600;
//compare 2
//Which one is bigger from two using if & else
// if (business > minister) {
//     console.log('Business persone er pola is bigger');
// }
// else {
//     console.log('Ministe er pola is bigger');
// }

//Compare 3
//Which one is bigger from three using if & else
// if (business > minister && business > army) {
//     console.log('Business is bigger');
// } else if (minister > business && minister > army) {
//     console.log('Army is bigger');
// } else {
//     console.log('Army is bigger');
// }

// var max = Math.max(business, army, minister);
// console.log(max);


/* Find Largest Number Using Function*/
// function findLargest(one, two) {
//     if (one > two) {
//         return one;
//     } else {
//         return two;
//     }
// }
// let LargestNumber = findLargest(4343, 443);
// console.log('Largest Number is: ', LargestNumber);


/* Find Largest Number Using Function Among 3 numbers*/
// function findLargest(one, two, three) {
//     var largest = Math.max(one, two, three);
//     return largest;
// }
// let LargestNumber = findLargest(4343, 443, 54);
// console.log('Largest Number is: ', LargestNumber);


//Find the smallest number among 3 numbers
function findSmallest(one, two, three) {
    var smallest = Math.min(one, two, three);
    return smallest;
}
let smallestNumber = findSmallest(12, 233, 323);
console.log('Smallest Number is: ', smallestNumber);