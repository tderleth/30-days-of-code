function dataTypes(input_stdin_array) {
  const i = 4;
  const d = 4.0;
  const s = 'HackerRank ';

  // Read and save an integer, double, and String to your variables.
  const i2 = input_stdin_array[0];
  const d2 = input_stdin_array[1];
  const s2 = input_stdin_array[2];

  // Print the sum of both integer variables on a new line.
  console.log(i + parseInt(i2));

  // Print the sum of the double variables on a new line.
  console.log((d + parseFloat(d2)).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + s2);
}

module.exports = dataTypes;
