function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result = add(1, 2); // Correct addition
console.log(result); // Output: 3

// Alternative using type assertion (use cautiously):
const result2 = add(1, <number> '2'); // Output 3, however this is error prone