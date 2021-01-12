function printLoopResult(value) {
  for (let index = 1; index < 11; index++) {
    console.log(`${value} x ${index} = ${value * index}`);
  }
}
module.exports = printLoopResult;
