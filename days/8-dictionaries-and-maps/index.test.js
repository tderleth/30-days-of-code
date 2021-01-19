const phoneBook = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 8: Dictionaries and Maps', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = '3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry';
    const expected = [['sam=99912222'], ['Not found'], ['harry=12299933']];
    phoneBook(input);

    expect(console.log).toBeCalledTimes(3);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
