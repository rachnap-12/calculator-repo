"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var input = document.getElementById('input');
var numberButtons = document.querySelectorAll('number');
var operationButtons = document.querySelectorAll('operation');
var equalsButton = document.getElementById('equal-button'); // const deleteButton = document.getElementById('del-button');

var allClearButton = document.getElementById('all-clear');
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');
var resultDisplayed = false; // numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//     })
// })
//click handlers for number buttons

for (var i = 0; i < numberButtons.length; _readOnlyError("i"), i++) {
  numberButtons[i].addEventListener('click', function (event) {
    var currentValue = input.innerHTML;
    var operator = currentValue[currentValue.length - 1]; // const currentOperand = 
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


for (var _i = 0; _i < operationButtons.length; _readOnlyError("i"), _i++) {
  operationButtons.addEventListener('click', function (event) {
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
}