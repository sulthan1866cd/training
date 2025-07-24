const deleteTable = () => {
  const tableElement = document.getElementById("table");
  tableElement.replaceChildren();
};

const createTable = (numRows, numCols) => {
  deleteTable();
  const tableElement = document.getElementById("table");
  for (let row = 0; row < numRows; row++) {
    const rowElement = document.createElement("tr");
    for (let col = 0; col < numCols; col++) {
      const colElement = document.createElement("td");
      colElement.textContent = "Hello world !";
      rowElement.appendChild(colElement);
    }
    tableElement.appendChild(rowElement);
  }
};

const createInput = (label) => {
  const labelElement = document.createElement("label");
  labelElement.textContent = label;
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("id", label + "Input");
  labelElement.appendChild(inputElement);
  return labelElement;
};

const createButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "createTable";
  buttonElement.addEventListener("click", () => {
    const row = document.getElementById("rowInput").value;
    const col = document.getElementById("colInput").value;
    createTable(row, col);
  });
  return buttonElement;
};

document.addEventListener("DOMContentLoaded", () => {
  const bodyElement = document.getElementById("body");

  const labels = ["row", "col"];
  for (const label of labels) {
    bodyElement.appendChild(createInput(label));
  }
  bodyElement.appendChild(createButton());

  
  const tableElement = document.createElement("table");
  tableElement.setAttribute("id", "table");
  bodyElement.appendChild(tableElement);
});
