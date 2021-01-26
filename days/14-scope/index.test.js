const Difference = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 14: Scope', () => {
  test('1', () => {
    let difference = new Difference([1, 2, 5]);
    difference.computeDifference();
    const expected = 4;
    expect(difference.maximumDifference).toEqual(expected);
  });
});
