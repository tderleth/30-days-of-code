const processData = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe("Day 6: Let's Review", () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = '2\nHacker\nRank';
    const expected = [['Hce akr'], ['Rn ak']];
    processData(input);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
