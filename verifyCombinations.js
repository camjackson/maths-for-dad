const verifyCombinations = (combinations, target) => {
  combinations.forEach((combination) => {
    const actualSum = sumNumbers(combination);
    if (actualSum !== target) {
      throw new Error(
        `Invalid sum: ${actualSum}, instead of ${target}. Numbers: ${combination.toString()}`
      );
    }
  });
};
