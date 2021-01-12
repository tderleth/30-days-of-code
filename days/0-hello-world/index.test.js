const processData = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 0: Hello world', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = 'Welcome to 30 Days of Code!';
    const firstExpected = 'Hello, World.';
    const secondExpected = 'Welcome to 30 Days of Code!';

    processData(input);

    expect(console.log).toHaveBeenCalledWith(firstExpected);
    expect(console.log).toHaveBeenCalledWith(secondExpected);
  });
});
