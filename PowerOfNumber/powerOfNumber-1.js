//Write a recursive function to calculate the power of a number.

function powerOfNumber(num, pow) {

    if (pow === 0) return 1

    return num * powerOfNumber(num, pow - 1)
}

console.log(powerOfNumber(3, 3)) // 27
console.log(powerOfNumber(5, 2)) // 25
console.log(powerOfNumber(2, 5)) // 32