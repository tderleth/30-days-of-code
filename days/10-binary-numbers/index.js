function calculateMaxBinary(decimalNumber) {
  const binaryNumber = decimalNumber.toString(2);
  const binaryArray = binaryNumber.split('');

  let counter = 0;
  let maxValues = [];

  binaryArray.forEach((element, index) => {
    if (element == 1) {
      counter++;
      if (index === binaryArray.length - 1) {
        maxValues.push(counter);
      }
    } else {
      maxValues.push(counter);
      counter = 0;
    }
  });

  return Math.max(...maxValues);
}

module.exports = calculateMaxBinary;
