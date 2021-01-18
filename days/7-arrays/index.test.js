const processData = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 2: Operators', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = [1, 4, 3, 2];
    const expected = [['2 3 4 1 ']];
    processData(input);

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
