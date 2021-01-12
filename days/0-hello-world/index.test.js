const processData = require('./index');

const input = 'Welcome to 30 Days of Code!';
const firstOutput = 'Hello, World.';
const secondOutput = 'Welcome to 30 Days of Code!';

test('1: process data', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  processData(input);
  expect(consoleSpy).toHaveBeenCalledWith(firstOutput);
  expect(consoleSpy).toHaveBeenCalledWith(secondOutput);
});
