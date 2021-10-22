const combosAreEqual = (comboA, comboB) => {
  if (comboA === comboB) return true;
  if (comboA.length !== comboB.length) return false;

  for (let i = 0; i < comboA.length; i++) {
    if (comboA[i] !== comboB[i]) return false;
  }

  return true;
};

const uniquifyCombinations = (combinations) => {
  return combinations.filter((combination, myIndex) => {
    // Return true findIndex returns my index - I am the first occurence
    // Return false if findIndex returns a different index - I am a later dupe
    return (
      combinations.findIndex((combo) => combosAreEqual(combo, combination)) ===
      myIndex
    );
  });
};
