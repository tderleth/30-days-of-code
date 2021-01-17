function processData(input) {
  const entries = input.split('\n');
  entries.shift();

  entries.forEach((value) => {
    const charArray = Array.from(value);

    let resultEven = '';
    charArray.forEach((char, index) => {
      if (index % 2 == 0) resultEven = resultEven.concat(char);
    });

    let resultOdd = '';
    charArray.forEach((char, index) => {
      if (index % 2 != 0) resultOdd = resultOdd.concat(char);
    });

    console.log(`${resultEven} ${resultOdd}`);
  });
}

module.exports = processData;
