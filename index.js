window.onload = () => {
  window.form.addEventListener("submit", go);
};

const go = (e) => {
  e.preventDefault();

  const target = parseInt(window.sumInput.value, 10);
  const maxNumberofNumbers = parseInt(window.numOfNumsInput.value, 10);
  const sortMode = document.querySelector(
    'input[name="sortMode"]:checked'
  ).value;

  const combinations = getCombinations(target, maxNumberofNumbers);

  verifyCombinations(combinations, target);
  sortCombinations(combinations, sortMode);

  const uniqueCombinations = uniquifyCombinations(combinations);

  populateTable(uniqueCombinations);
};
