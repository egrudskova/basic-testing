// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 1 + 2 },
  { a: 2, b: 2, action: Action.Add, expected: 2 + 2 },
  { a: 3, b: 2, action: Action.Add, expected: 3 + 2 },
  { a: 1, b: 2, action: Action.Subtract, expected: 1 - 2 },
  { a: 2, b: 2, action: Action.Subtract, expected: 2 - 2 },
  { a: 3, b: 2, action: Action.Subtract, expected: 3 - 2 },
  { a: 1, b: 2, action: Action.Multiply, expected: 1 * 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 2 * 2 },
  { a: 3, b: 2, action: Action.Multiply, expected: 3 * 2 },
  { a: 1, b: 2, action: Action.Divide, expected: 1 / 2 },
  { a: 2, b: 2, action: Action.Divide, expected: 2 / 2 },
  { a: 3, b: 2, action: Action.Divide, expected: 3 / 2 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 ** 2 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 2 ** 2 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 3 ** 2 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should perform $action with $a and $b to be equal $expected',
    ({ a, b, expected, action }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
