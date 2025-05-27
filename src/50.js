function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array is empty');
  }

  let sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

// Example usage:
try {
  console.log(calculateAverage([1, 2, 3, 4, 5]));
} catch (error) {
  console.error(error.message);
}
