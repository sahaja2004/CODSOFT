let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  const result = eval(displayValue);
  document.getElementById('display').value = result;
  displayValue = result.toString();
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}
