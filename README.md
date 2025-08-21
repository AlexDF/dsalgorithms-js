# dsalgorithms
A Javascript library of data structures and algorithms.

## Installation
```bash
npm install dsalgorithms
```

## Usage
ES/CommonJS Module:
```typescript
// Import entire library as ES Module
import dsalgorithms from 'dsalgorithms';
// or, Import only what you need using named imports:
import { maxArray } from 'dsalgorithms';
// or, Import as CommonJS Module
const dsalgorithms = require('dsalgorithms');

// Find the maximum element in an array
const maxNum = dsalgorithms.maxArray([4, 8, 2.2, 5]); 
// -> 8

// Using named import
const maxString = maxArray(['apple', 'kiwi', 'banana']);
// -> 'kiwi'
```
