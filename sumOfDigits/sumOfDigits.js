// Write a recursive function to find the sum of digits of a number.

function sumOfDigits(num) {
    if (num < 10) return num;
    let temp = num % 10
    return temp + sumOfDigits((num - temp) / 10);
}

console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(678)); // 21