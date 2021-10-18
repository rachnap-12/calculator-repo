"use strict";

var input = document.getElementById('input');
console.log(input);
var numberButtons = document.querySelectorAll('.numberB'); // const numberButtons = document.querySelectorAll('.number');

console.log(numberButtons[0]);
var operationButtons = document.querySelectorAll('.operation');
console.log(operationButtons[0]); // let equalsButton = document.getElementById('.number equal');

var equalsButton = document.getElementById('equal');
console.log(equalsButton); // const deleteButton = document.getElementById('del-button');

var allClearButton = document.getElementById('clear');
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');
var resultDisplayed = false; // numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//     })
// })
//click handlers for number buttons

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function (event) {
    var currentValue = input.innerHTML;
    var operator = currentValue[currentValue.length - 1];
    console.log(currentValue);
    console.log(currentValue); // const currentOperand = 
    //keep adding

    if (resultDisplayed === false) {
      input.innerHTML += event.target.innerHTML; ///required???????
    } else if (resultDisplayed === true && operator === "+" || operator === "-" || operator === "×" || operator === "÷") {
      input.innerHTML += event.target.innerHTML;
    } else {
      // resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += event.target.innerHTML;
    }
  });
} //click handler for operators


for (var _i = 0; _i < operationButtons.length; _i++) {
  operationButtons[_i].addEventListener('click', function (event) {
    var currentValue = input.innerHTML;
    var opr = currentValue[currentValue.length - 1];

    if (opr === '+' || opr === '-' || opr === '*' || opr === '÷') {
      // const newStr = currentValue. 
      input.innerHTML = currentValue;
    } else if (currentValue.length == 0) {
      console.log("Enter a number first");
    } else {
      input.innerHTML += event.target.innerHTML;
    }
  });
} //click handler for equal button


equalsButton.addEventListener('click', function () {
  var inputValue = input.innerHTML;
  var numbers = inputValue.split(/\+|\-|\*|\÷/g);
  var operators = inputValue.replace(/[0-9]|\./g, "").split("");
  console.log("##############");
  console.log(inputValue);
  console.log(numbers);
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
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];
  resultDisplayed = true;
}); //

allClearButton.addEventListener("click", function () {
  input.innerHTML = "";
});