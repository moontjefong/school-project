// Node.js code to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    console.log(`Factorial of ${n} is: ${result}`);
    return result;
  }
}

factorial(5); // Output the result for 5
