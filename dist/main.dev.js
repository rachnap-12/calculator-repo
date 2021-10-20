"use strict";

var input = document.getElementById('input');
console.log(input);
var numberButtons = document.querySelectorAll('.numberB');
console.log(numberButtons[0]);
var operationButtons = document.querySelectorAll('.operation');
console.log(operationButtons[0]);
var equalsButton = document.getElementById('equal');
console.log(equalsButton);
var allClearButton = document.getElementById('clear');
var resultDisplayed = false; //click handlers for number buttons

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function (event) {
    var currentValue = input.innerHTML;
    var operator = currentValue[currentValue.length - 1];
    console.log(currentValue);
    console.log(operator); //keep adding

    if (resultDisplayed === false) {
      input.innerHTML += event.target.innerHTML;
    } else if (resultDisplayed === true && operator === "+" || operator === "-" || operator === "×" || operator === "÷" || operator === "%") {
      input.innerHTML += event.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += event.target.innerHTML;
    }
  });
} //click handler for operators


for (var _i = 0; _i < operationButtons.length; _i++) {
  operationButtons[_i].addEventListener('click', function (event) {
    var currentValue = input.innerHTML;
    var opr = currentValue[currentValue.length - 1];

    if (opr === '+' || opr === '-' || opr === '×' || opr === '÷' || opr === '%') {
      // const newStr = currentValue. 
      var newString = currentValue.substring(0, currentValue.length - 1) + event.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentValue.length == 0) {
      alert("Enter a number first");
      console.log("Enter a number first");
    } else {
      input.innerHTML += event.target.innerHTML;
    }
  });
} //click handler for equal button


equalsButton.addEventListener('click', function () {
  var inputValue = input.innerHTML;
  var numbers = inputValue.split(/\+|\-|\×|\÷|\%/g);
  var operators = inputValue.replace(/[0-9]|\./g, "").split("");
  console.log("##############");
  console.log(inputValue);
  console.log(numbers);
  console.log(operators); //code for arthimetic operations

  var divide = operators.indexOf("÷");

  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");

  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");

  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");

  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    console.log(numbers);
    operators.splice(add, 1);
    console.log(numbers);
    add = operators.indexOf("+");
    console.log(add);
  }

  var percent = operators.indexOf("%");

  while (percent != -1) {
    numbers.splice(percent, 2, numbers[percent] / 100 * numbers[percent + 1]);
    console.log(numbers);
    operators.splice(percent, 1);
    console.log(numbers);
    percent = operators.indexOf("%");
    console.log(percent);
  }

  if (input.innerHTML.length > 10) {
    console.log("length is" + input.innerHTML.length);
    input.style.fontSize = "15px";
    input.innerHTML = numbers[0];
  }

  input.innerHTML = numbers[0];
  resultDisplayed = true;
}); //Clear button

allClearButton.addEventListener("click", function () {
  input.innerHTML = "";
});