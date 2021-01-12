const checkValue = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 3: Intro to conditional statements', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const expected = [['Weird']];

    checkValue(parseInt(3, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('2', () => {
    const expected = [['Not Weird']];

    checkValue(parseInt(4, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('3', () => {
    const expected = [['Weird']];

    checkValue(parseInt(18, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('4', () => {
    const expected = [['Weird']];

    checkValue(parseInt(29, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('5', () => {
    const expected = [['Weird']];

    checkValue(parseInt(5, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('6', () => {
    const expected = [['Not Weird']];

    checkValue(parseInt(100, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });

  test('7', () => {
    const expected = [['Weird']];

    checkValue(parseInt(20, 10));

    expect(console.log).toBeCalledTimes(1);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
