// Given an individual combination, sorts the numbers within it
const sortWithinCombination = (combination) => {
  combination.sort((numberA, numberB) => {
    if (numberA < numberB) return -1;
    if (numberA > numberB) return 1;
    return 0;
  });
};

const sortCombinationsByNumber = (combinations) => {
  combinations.sort((comboA, comboB) => {
    // Shorter arrays come first
    if (comboA.length < comboB.length) return -1;
    if (comboA.length > comboB.length) return 1;

    // If same length, sort by values in each
    for (let i = 0; i < comboA.length; i++) {
      if (comboA[i] < comboB[i]) return -1;
      if (comboA[i] > comboB[i]) return 1;
    }

    // They're totally the same
    return 0;
  });
};

const sortCombinationsByProduct = (combinations) => {
  combinations.sort((comboA, comboB) => {
    const productA = multiplyNumbers(comboA);
    const productB = multiplyNumbers(comboB);

    if (productA < productB) return 1;
    if (productA > productB) return -1;
    return 0;
  });
};

// Given an array of combinations, sorts them against each other
const sortCombinations = (combinations, sortMode) => {
  combinations.forEach((combination) => sortWithinCombination(combination));

  if (sortMode === "numbers") {
    sortCombinationsByNumber(combinations);
  } else if (sortMode === "product") {
    sortCombinationsByProduct(combinations);
  } else {
    throw new Error("Invalid sort mode");
  }
};
