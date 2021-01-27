const Solution = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 15: Linked Lists', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    let head = null;
    const data = [2, 3, 4, 1];
    var list = new Solution();

    data.forEach((element) => {
      head = list.insert(head, element);
    });

    list.display(head);

    const expected = [['2 '], ['3 '], ['4 '], ['1 ']];

    expect(console.log).toBeCalledTimes(4);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
