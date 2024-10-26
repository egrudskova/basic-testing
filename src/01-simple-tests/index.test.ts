// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(simpleCalculator({ a, b, action: Action.Add })).toBe(a + b);
      }
    }
  });

  test('should subtract two numbers', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(a - b);
      }
    }
  });

  test('should multiply two numbers', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(a * b);
      }
    }
  });

  test('should divide two numbers', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(a / b);
      }
    }
  });

  test('should exponentiate two numbers', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
          a ** b,
        );
      }
    }
  });

  test('should return null for invalid action', () => {
    expect(
      simpleCalculator({
        a: 1,
        b: 2,
        action: 'Unknown Action',
      }),
    ).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(
          simpleCalculator({
            a: a.toString(),
            b: b.toString(),
            action: Action.Exponentiate,
          }),
        ).toBeNull();
      }
    }
  });
});
