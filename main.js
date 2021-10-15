const input = document.getElementById('input');
const numberButtons = document.querySelectorAll('number');
const operationButtons = document.querySelectorAll('operation')
const equalsButton = document.getElementById('equal-button');
// const deleteButton = document.getElementById('del-button');
const allClearButton = document.getElementById('all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const resultDisplayed = false; 

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {

//     })
// })

//click handlers for number buttons
for (const i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener('click', (event) => {

        const currentValue = input.innerHTML;
        const operator = currentValue[currentValue.length-1];

        // const currentOperand = 

        //keep adding
        if (resultDisplayed === false) {
            input.innerHTML += event.target.innerHTML;

            ///required???????
        }else if (resultDisplayed === true && operator === "+" || operator === "-" || operator === "×" || operator === "÷") {
            input.innerHTML += event.target.innerHTML;
        } else{
            // resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += event.target.innerHTML;
        }
            
    });
} 


 //click handler for operators
 for(const i=0 ; i < operationButtons.length; i++){
     operationButtons.addEventListener('click',(event) => {

        const currentValue = input.innerHTML;
        const opr = currentValue[currentValue.length-1];
        
        if(opr === '+' || opr === '-' || opr === '*' || opr === '÷') {
            // const newStr = currentValue. 
            input.innerHTML = currentValue;
         }else if(currentValue.length == 0){
            console.log("Enter a number first");
         }else {
             input.innerHTML += event.target.innerHTML;
         }

        });
        }
