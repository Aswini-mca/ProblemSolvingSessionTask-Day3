// Write a recursive function to calculate the factorial of a number.

function factorial(num) {
    if (num < 2) return 1;
    return num * factorial(num - 1)
}
console.log('Factorial of 5 is', factorial(5));