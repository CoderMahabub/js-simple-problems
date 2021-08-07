function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [32, 33, 42, 32, 23, 56, 43, 12];
const oldestAges = largestElement(ages);
console.log('Oldest', oldestAges);
