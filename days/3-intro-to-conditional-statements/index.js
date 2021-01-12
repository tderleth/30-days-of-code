function checkValue(n) {
  if (!(n % 2 == 0)) {
    console.log('Weird');
  } else if (2 <= n && n <= 5) {
    console.log('Not Weird');
  } else if (6 <= n && n <= 20) {
    console.log('Weird');
  } else if (20 <= n) {
    console.log('Not Weird');
  }
}

module.exports = checkValue;
