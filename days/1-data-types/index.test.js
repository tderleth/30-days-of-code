const dataTypes = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 1: Data Types', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = [12, 4.0, 'is the best place to learn and practice coding!'];
    const expected = [
      [16],
      ['8.0'],
      ['HackerRank is the best place to learn and practice coding!'],
    ];

    dataTypes(input);

    expect(console.log).toBeCalledTimes(3);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('2', () => {
    const input = [3, 2.8, 'is my favorite platform!'];
    const expected = [[7], ['6.8'], ['HackerRank is my favorite platform!']];

    dataTypes(input);

    expect(console.log).toBeCalledTimes(3);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
