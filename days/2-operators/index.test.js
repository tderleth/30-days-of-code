const solve = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 2: Operators', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = [parseFloat('12.00'), parseFloat('20', 10), parseFloat('8', 10)];
    const expected = [15];

    solve(...input);

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual([expected]);
  });
});
