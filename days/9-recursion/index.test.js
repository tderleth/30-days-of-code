const factorial = require('./index');

describe('Day 9: Recursion', () => {
  test('1', () => {
    const input = 3;
    const expected = 6;
    const result = factorial(input);

    expect(result).toStrictEqual(expected);
  });
});
