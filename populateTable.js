const populateTable = (combinations) => {
  const maxNumberOfNumbers = getMaxNumberOfNumbers(combinations);

  populateThead(maxNumberOfNumbers);
  populateTBody(maxNumberOfNumbers, combinations);
};

const getMaxNumberOfNumbers = (combinations) => {
  let maxNumberOfNumbers = 0;
  combinations.forEach((combination) => {
    if (combination.length > maxNumberOfNumbers) {
      maxNumberOfNumbers = combination.length;
    }
  });
  return maxNumberOfNumbers;
};

const clearTable = () => {
  const table = window.table;

  table.querySelector("thead").innerHTML = "";
  table.querySelector("tbody").innerHTML = "";
};

const populateThead = (maxNumberOfNumbers) => {
  const tHead = document.querySelector("thead");
  const tHeadTr = document.createElement("tr");

  for (let i = 0; i < maxNumberOfNumbers; i++) {
    tHeadTr.appendChild(document.createElement("th"));
  }

  const productTh = document.createElement("th");
  productTh.textContent = "Product";
  productTh.classList.add("highlight");
  tHeadTr.appendChild(productTh);

  tHead.appendChild(tHeadTr);
};

const populateTBody = (maxNumberOfNumbers, combinations) => {
  const tBody = document.querySelector("tbody");

  combinations.forEach((combination) => {
    const tr = document.createElement("tr");

    populateTBodyTr(tr, combination, maxNumberOfNumbers);

    tBody.appendChild(tr);
  });
};

const populateTBodyTr = (tr, combination, maxNumberOfNumbers) => {
  for (let i = 0; i < maxNumberOfNumbers; i++) {
    const numberTd = document.createElement("td");
    if (combination[i]) {
      numberTd.textContent = combination[i];
    }
    tr.appendChild(numberTd);
  }

  const productTd = document.createElement("td");
  productTd.textContent = multiplyNumbers(combination);
  productTd.classList.add("highlight", "text-center");

  tr.appendChild(productTd);
};
