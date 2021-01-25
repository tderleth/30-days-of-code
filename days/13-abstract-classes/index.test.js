const MyBook = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 13: Abstract Classes', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    let book = new MyBook('The Alchemist', 'Paulo Coelho', 248);
    book.display();
    const expected = [['Title: The Alchemist'], ['Author: Paulo Coelho'], ['Price: 248']];
    expect(console.log).toBeCalledTimes(3);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
