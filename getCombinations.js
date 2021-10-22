const getCombinations = (target, maxNumberofNumbers) => {
  let numberOfNumbers = 2;

  let combinations = [];

  while (numberOfNumbers <= target && numberOfNumbers <= maxNumberofNumbers) {
    combinations = combinations.concat(
      findCombinations(target, numberOfNumbers)
    );
    numberOfNumbers++;
  }

  return combinations;
};

const findCombinations = (target, numberOfNumbers) => {
  if (numberOfNumbers === 1) {
    return [[target]];
  }

  const result = [];
  let me = 1;

  while (me < target) {
    findCombinations(target - me, numberOfNumbers - 1).forEach(
      (childCombination) => {
        result.push([me, ...childCombination]);
      }
    );
    me++;
  }

  return result;
};
