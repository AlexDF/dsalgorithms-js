// dsalgorithms-js Demo
//
// Installation:
// npm install dsalgorithms-js
//
// then, import entire library, or only the functions you need
import dsalgorithms, { maxOf, maxArray } from 'dsalgorithms-js';

console.log('\ndsalgorithms.maxOf(3, 5) -> ', dsalgorithms.maxOf(3, 5));
console.log(
  'dsalgorithms.maxArray([ 4, 2, 8, 9, 6 ]) -> ',
  dsalgorithms.maxArray([4, 2, 8, 9, 6]),
  '\n',
);

console.log('maxOf(3, 5) -> ', maxOf(3, 5));
console.log('maxArray([ 4, 2, 8, 9, 6 ]) -> ', maxArray([4, 2, 8, 9, 6]));
