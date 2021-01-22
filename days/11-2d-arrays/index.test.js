const calculateMaxHourGlass = require('./index');

describe('Day 11: 2D Arrays', () => {
  test('1', () => {
    const input = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    const expected = 19;
    const result = calculateMaxHourGlass(input);

    expect(result).toStrictEqual(expected);
  });
  test('2', () => {
    const input = [
      [0, -4, -6, 0, -7, -6],
      [-1, -2, -6, -8, -3, -1],
      [-8, -4, -2, -8, -8, -6],
      [-3, -1, -2, -5, -7, -4],
      [-3, -5, -3, -6, -6, -6],
      [-3, -6, 0, -8, -6, -7],
    ];
    const expected = -19;
    const result = calculateMaxHourGlass(input);

    expect(result).toStrictEqual(expected);
  });
  test('3', () => {
    const input = [
      [-1, 1, -1, 0, 0, 0],
      [0, -1, 0, 0, 0, 0],
      [-1, -1, -1, 0, 0, 0],
      [0, -9, 2, -4, -4, 0],
      [-7, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0],
    ];
    const expected = 0;
    const result = calculateMaxHourGlass(input);

    expect(result).toStrictEqual(expected);
  });
});
