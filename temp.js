let history = [];
function convert() {
  const temp = parseFloat(document.getElementById("temp").value);
  const toUnit = document.getElementById("toUnit").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const resultElement = document.getElementById("result");
  if (isNaN(temp)) {
    resultElement.textContent = "Please enter a valid Temperature";
    resultElement.style.color = "red";
    return;
  }
  let result;
  if (fromUnit === toUnit) {
    result = temp;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celcius") {
    result = ((temp - 32) * 5) / 9;
  } else if (fromUnit === "Celcius" && toUnit === "Fahrenheit") {
    result = temp * (9 / 5) + 32;
  } else if (fromUnit === "Kelvin" && toUnit === "Celcius") {
    result = temp - 273.15;
  } else if (fromUnit === "Celcius" && toUnit === "Kelvin") {
    result = temp + 273.15;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    result = (temp - 32) * (5 / 9) + 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    result = (temp - 273.15) * (9 / 5) + 32;
  }
  resultElement.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
  resultElement.style.color = "green";

  const historyEntry = `${temp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
  history.push(historyEntry);
  displayHistory();
}
function displayHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = "";
  history.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${entry}`;
    historyElement.appendChild(listItem);
  });
}
function clearFields() {
  document.getElementById("temp").value = "";
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Result:";
  resultElement.style.color = "black";
}

function clearHistory() {
  history = [];
  displayHistory();
}
