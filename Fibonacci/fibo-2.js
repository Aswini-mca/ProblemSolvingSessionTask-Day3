function fibonacci(n, prev1, prev2) {
    if (n === 0) { return prev1 + prev2 }
    return fibonacci(n - 1, prev2, prev1 + prev2)
}
console.log(fibonacci(5,0,1))