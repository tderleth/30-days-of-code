function calculateMaxHourGlass(arr) {
  const hourGlasses = [];
  for (let outerIndex = 0; outerIndex < arr.length - 2; outerIndex++) {
    for (let index = 0; index < arr[0].length - 2; index++) {
      const element = [
        [outerIndex, index],
        [outerIndex, index + 1],
        [outerIndex, index + 2],
        [outerIndex + 1, index + 1],
        [outerIndex + 2, index],
        [outerIndex + 2, index + 1],
        [outerIndex + 2, index + 2],
      ];
      hourGlasses.push(element);
    }
  }

  let globalMax;

  for (const hourGlas of hourGlasses) {
    let localMax = 0;
    for (const element of hourGlas) {
      localMax = localMax + arr[element[0]][element[1]];
    }
    if (globalMax === undefined) globalMax = localMax;
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}

module.exports = calculateMaxHourGlass;
