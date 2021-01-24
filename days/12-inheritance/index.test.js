const Student = require('./index');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Day 12: Inheritance', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test('1', () => {
    let student = new Student('Heraldo', 'Memelli', 8135627, [100, 80]);
    student.printPerson();
    console.log('Grade: ' + student.calculate());
    const expected = [['Name: Memelli, Heraldo\nID: 8135627'], ['Grade: O']];
    expect(console.log).toBeCalledTimes(2);
    expect(console.log.mock.calls).toEqual(expected);
  });
});
