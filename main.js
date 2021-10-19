let input = document.getElementById('input');
// let input = document.querySelectorAll('.input');
console.log(input);
const numberButtons = document.querySelectorAll('.numberB');
console.log(numberButtons[0]);
const operationButtons = document.querySelectorAll('.operation')
console.log(operationButtons[0]);
let equalsButton = document.getElementById('equal');
console.log(equalsButton);
// const deleteButton = document.getElementById('del-button');
const allClearButton = document.getElementById('clear')


let resultDisplayed = false; 

//click handlers for number buttons
for (let i=0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', (event) => {

        let currentValue = input.innerHTML;
        let operator = currentValue[currentValue.length-1];
        console.log(currentValue);
        console.log(operator);


        //keep adding
        if (resultDisplayed === false) {
            input.innerHTML += event.target.innerHTML;
        }else if (resultDisplayed === true && operator === "+" || operator === "-" || operator === "×" || operator === "÷" || operator === "%") {
            input.innerHTML += event.target.innerHTML;
        } else{
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += event.target.innerHTML;
        }
            
    });
} 


 //click handler for operators
 for(let i=0 ; i < operationButtons.length; i++){
     operationButtons[i].addEventListener('click',(event) => {

        let currentValue = input.innerHTML;
        let opr = currentValue[currentValue.length-1];
        
        if(opr === '+' || opr === '-' || opr === '×' || opr === '÷' || opr === '%' ) {
            // const newStr = currentValue. 
            let newString = currentValue.substring(0, currentValue.length - 1) + event.target.innerHTML;
            input.innerHTML = newString;
         }else if(currentValue.length == 0){
            console.log("Enter a number first");
         }else {
             input.innerHTML += event.target.innerHTML;
         }

        });
        }

    //click handler for equal button
    equalsButton.addEventListener('click',() => {
      let inputValue = input.innerHTML;
      let numbers = inputValue.split(/\+|\-|\×|\÷|\%/g);
      let operators = inputValue.replace(/[0-9]|\./g, "").split("");
            
      console.log("##############")
      console.log(inputValue);
 
      console.log(numbers);
      console.log(operators);

    let divide = operators.indexOf("÷");
    while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    console.log(numbers);
    operators.splice(add, 1);
    console.log(numbers);
    add = operators.indexOf("+");
    console.log(add);
    }

   let percent = operators.indexOf("%");
   while (percent != -1) {
   numbers.splice(percent, 2, (numbers[percent] / 100) * (numbers[percent + 1]));
   console.log(numbers);
   operators.splice(percent, 1);
   console.log(operators);
   percent = operators.indexOf("%");
   console.log(percent);
   }

    input.innerHTML = numbers[0];

    resultDisplayed = true;
  
  });

  //
  allClearButton.addEventListener("click", function() {
      input.innerHTML="";
  })
  


    
