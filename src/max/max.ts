// Internal implementations for maximum value algorithms
// Do not import directly.

// Find the maximum of two values
export function _maxOf<T>(a: T, b: T): T {
  return a >= b ? a : b;
}

// Find the maximum value in an array. Works with
// any types that can be compared with the '>' operator.
export function _max_array<T>(array: T[]): T {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Array cannot be empty.');
  }

  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentMax) {
      currentMax = array[i];
    }
  }
  return currentMax;
}
