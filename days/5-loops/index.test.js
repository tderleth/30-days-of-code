const printLoopResult = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 2: Operators', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = [-1, 10, 16, 18];
    const expected = [
      ['2 x 1 = 2'],
      ['2 x 2 = 4'],
      ['2 x 3 = 6'],
      ['2 x 4 = 8'],
      ['2 x 5 = 10'],
      ['2 x 6 = 12'],
      ['2 x 7 = 14'],
      ['2 x 8 = 16'],
      ['2 x 9 = 18'],
      ['2 x 10 = 20'],
    ];
    printLoopResult(2);

    expect(console.log).toBeCalledTimes(10);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
