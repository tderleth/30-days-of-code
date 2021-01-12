const solve = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 1: Data Types', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('first test case', () => {
    const input = [parseFloat('12.00'), parseFloat('20', 10), parseFloat('8', 10)];
    const output = [[15]];

    solve(...input);

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(output);
  });
});
