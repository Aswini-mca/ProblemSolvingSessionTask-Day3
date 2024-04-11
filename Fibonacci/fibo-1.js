// Write a recursive function to calculate the nth Fibonacci number.

function fibinacci(n) {
    if (n <= 1) {
      return n
    }
    else {
      return fibinacci(n - 1) + fibinacci(n - 2)
    }
  }
  
  function printFibiSeries(n) {
    for (let i = 0; i < n; i++) {
      console.log(fibinacci(i))
    }
  }
  printFibiSeries(10)
