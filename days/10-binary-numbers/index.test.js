const calculateMaxBinary = require('./index');

describe('Day 10: Binary Numbers', () => {
  test('1', () => {
    const input = 5;
    const expected = 1;
    const result = calculateMaxBinary(input);

    expect(result).toStrictEqual(expected);
  });
  test('2', () => {
    const input = 13;
    const expected = 2;
    const result = calculateMaxBinary(input);

    expect(result).toStrictEqual(expected);
  });
  test('3', () => {
    const input = 439;
    const expected = 3;
    const result = calculateMaxBinary(input);

    expect(result).toStrictEqual(expected);
  });
  test('4', () => {
    const input = 65535;
    const expected = 16;
    const result = calculateMaxBinary(input);

    expect(result).toStrictEqual(expected);
  });
});
