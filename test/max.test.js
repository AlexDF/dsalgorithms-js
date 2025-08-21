import { describe, it, expect } from 'vitest';
import { _max_array, _maxOf } from '../src/max/index.ts';

describe('max_array', () => {
  it('should find the maximum value in an array of numbers', () => {
    expect(_max_array([1, 5, 3, 9, 2])).toBe(9);
  });

  it('should handle a single element array', () => {
    expect(_max_array([42])).toBe(42);
  });
});

describe('maxOf', () => {
  it('should return the greater of two values', () => {
    expect(_maxOf(5, 3)).toBe(5);
    expect(_maxOf(3, 5)).toBe(5);
  });
});
