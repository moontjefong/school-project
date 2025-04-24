function isPrime(n) {
  if (n <= 1) return false;
  
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  
  return true;
}

function sumOfFirstNPrimes(n) {
  let primes = [];
  
  for (let i = 2; i < n + 1; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes.reduce((a, b) => a + b, 0);
}

console.log(sumOfFirstNPrimes(10)); // Output: 7
