//Sum of array elements
const numbers = [44, 42, 32, 42, 76, 54, 36, 65, 77];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element;
}
// console.log(sum);


//SUM of array numbers
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([44, 42, 32, 42, 76]);
console.log(total);