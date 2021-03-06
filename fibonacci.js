//Fibonacci Series
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
/*
3rd = 2nd + 1st
4th = 3r + 2nd
5th = 4th + 3rd
6th = 5th + 4th
7th + 6th + 5th
8th = 7th + 6th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // nth = (n - 1)th + (n - 2)th
//     // ith = (i - 1)th + (i - 2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

//Fibonacci Series
// const fibonacci = [0, 1];
// for (let i = 2; i <= 15; i++) {
//     // n = (n-1) +(n-2)
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci);


//Fibonacci Series Using Functin

// function fibonacci(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacci(10);
// console.log(fiboSeries);

//Fibonacci Series Using Function with Validation Code

function fibonacci(num) {
    if (typeof num != 'number') {
        return 'Please Give a Number';
    } else if (num < 2) {
        return 'Please give a positive number greater than 2';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacci(23);
console.log(fiboSeries);