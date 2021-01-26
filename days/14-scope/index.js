class Difference {
  constructor(elements) {
    this.elements = elements;
  }

  computeDifference() {
    let maximumDifference = 0;

    this.elements.forEach((element) => {
      this.elements.forEach((iterator) => {
        if (element > iterator) {
          if (element - iterator > maximumDifference) maximumDifference = element - iterator;
        } else if (iterator - element > maximumDifference) maximumDifference = iterator - element;
      });
    });
    this.maximumDifference = maximumDifference;
  }
}

module.exports = Difference;
