function reverseArray(input) {
  let result = '';

  input.reverse().forEach((element) => {
    result = result.concat(`${element} `);
  });

  console.log(result);
}

module.exports = reverseArray;
