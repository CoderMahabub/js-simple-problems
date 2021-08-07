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