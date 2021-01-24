'use strict';

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log('Name: ' + this.lastName + ', ' + this.firstName + '\nID: ' + this.idNumber);
  }
}

class Student extends Person {
  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  calculate() {
    const scale = {
      O: [90, 100],
      E: [80, 90],
      A: [70, 80],
      P: [55, 70],
      D: [40, 55],
      T: [0, 40],
    };

    const sum = this.scores.reduce(function (a, b) {
      return a + b;
    }, 0);

    const average = sum / this.scores.length;
    let result;

    for (const [grade, range] of Object.entries(scale)) {
      if (average === 100) {
        result = grade;
        break;
      }
      if (range[0] <= average && average < range[1]) {
        result = grade;
        break;
      }
    }

    return result;
  }
}

module.exports = Student;
