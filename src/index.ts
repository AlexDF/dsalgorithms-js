/**
 * DSAlgorithms - A collection of data structures and algorithms
 * Main entry point for the DSAlgorithms library.
 * Public exports are defined and exported here.
 * @author Alexandre DeFreitas
 */

import { _max_array, _maxOf } from './max';

/**
 * Finds the maximum value in an array of comparable elements.
 *
 * @template T - The type of elements in the array (must be comparable).
 * @param array - The array to search for the maximum value.
 * @returns The maximum value found in the array.
 * @throws When the array is empty or contains uncomparable elements.
 *
 * @example
 * // Array of numbers
 * const maxNum = maxArray([1, 6, 2.25, 7, 4]);
 * // Returns: 7
 *
 * @example
 * // Array of strings
 * const maxString = maxArray(['banana', 'orange', 'apple']);
 * // Returns: 'orange'
 *
 * @since 0.1.0-alpha.1
 */
function maxArray<T>(array: T[]) {
  return _max_array(array);
}

/**
 * Compares two values and returns the larger one.
 * @template T - The type of values to compare (must be comparable).
 * @param a - First value to compare.
 * @param b - Second value to compare.
 * @returns The larger of the two values.
 *
 * @example
 * // Compare two numbers
 * const maxNum = maxOf(5, 10);
 * // Returns: 10
 *
 * @example
 * // Compare two strings
 * const maxString = maxOf('apple','banana');
 * // Returns: 'banana'
 *
 * @since 0.1.0-alpha.1
 */
function maxOf<T>(a: T, b: T) {
  return _maxOf(a, b);
}

/**
 * @namespace dsalgorithms
 */
const dsalgorithms = {
  /**
   * Finds the maximum value in an array of comparable elements.
   * @function
   */
  maxOf: maxOf,
  /**
   * Compares two values and returns the larger one.
   * @function
   */
  maxArray: maxArray,
};

export default dsalgorithms;
export { maxArray, maxOf };
