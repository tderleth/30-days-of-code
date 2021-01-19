const Person = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 4: Class vs. Instance', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    const input = [-1, 10, 16, 18];
    const expected = [
      ['Age is not valid, setting age to 0.'],
      ['You are young.'],
      ['You are young.'],
      ['You are a teenager.'],
      ['You are old.'],
    ];

    input.forEach((element) => {
      const person = new Person(element);
      person.amIOld();
    });

    expect(console.log).toBeCalledTimes(5);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
