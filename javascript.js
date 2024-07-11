let num1 = '';
let num2 = '';
let firstOperator = '';
let secondOperator = '';
let result = 0;
let btnTextArray = [];

//basic operating functions
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function substract(num1, num2){
    return parseFloat(num1) - parseFloat (num2);
}

function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2){
    return parseFloat(num1) / parseFloat(num2);
}

//calculation function with parameters provided by the user
function operate(num1, num2, operator){
        switch(operator){
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = substract(num1, num2);
                break;
            case "x":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
        }
        return parseFloat(result.toFixed(2));//this makes result always be with 2 decimals
}

//this function will make appear the information from buttons in the calculator display
function display(){
    const btnNumbers = document.querySelectorAll(".number");
    const display = document.querySelector("#display");
    display.textContent = "0";

    btnNumbers.forEach(button => {
        button.addEventListener("click", () => {
            const btnText = button.textContent;
            btnTextArray.push(btnText);
            float();
            if(firstOperator === '') {
                num1 = btnTextArray.join('');
                display.textContent = num1;
            }
            
            else{
                num2 = btnTextArray.join('');
                display.textContent = num2;
            }
    });
});
}

//clear display when pressing clear button
function clearButton(){
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", () => {
       const display = document.querySelector("#display");
       display.textContent = '0';
       num1 = '';
       num2 = '';
       firstOperator = '';
       secondOperator = '';
       btnTextArray = [];
       float();
    });
}


//getting operator from user clicking on them
function getOperator(){
    const operatorsBtn = document.querySelectorAll(".operation");
    operatorsBtn.forEach(button =>{
        button.addEventListener("click", () => {
            if(num2 === ''){
                firstOperator = button.textContent;
                btnTextArray = [];
                float();
            }
            //functionality for whenever there's more than 1 operation
            else{
                secondOperator = button.textContent;
                operate(num1, num2, firstOperator);
                const display = document.querySelector("#display");
                display.textContent = result;
                firstOperator = secondOperator;
                secondOperator = '';
                num1 = result;
                result = '';
                num2 = '';
                btnTextArray = [];
                float();
            }
        });
    });
}

//equal button will show the result in the display and restart the calculation
function equalButton(){
    const equalBtn = document.querySelector("#equal");
    const display = document.querySelector("#display");
    equalBtn.addEventListener("click", () => {
        if(firstOperator === "/" && (num2 === "0")){
            display.textContent = "Math ERROR";
            num1 = '';
            result = '';
            num2 = '';
            btnTextArray = [];
            firstOperator = '';
        }
        else if(firstOperator === '' || num1 === '' || num2 === ''){
            display.textContent = "Syntax ERROR";
            num1 = '';
            result = '';
            num2 = '';
            btnTextArray = [];
            firstOperator = '';
        }
        else{
            result = operate(num1, num2, firstOperator);
            display.textContent = result;
            num1 = result;
            result = '';
            num2 = '';
            btnTextArray = [];
            firstOperator = '';
        }
        
    });
}

//make sure only 1 . can be added in each number
function float(){
    const floatBtn = document.querySelector("#float");
    if(btnTextArray.includes(".") == true){
        floatBtn.disabled = true;
    }
    else floatBtn.disabled = false;
}

function deleteButton(){
    const deleteBtn = document.querySelector("#delete");
    const display = document.querySelector("#display");
    deleteBtn.addEventListener("click", () => {
        btnTextArray.pop();
        if (firstOperator === '') {
            num1 = btnTextArray.join('');
            display.textContent = num1 || "0";
        } 
        else {
            num2 = btnTextArray.join('');
            display.textContent = num2 || "0";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    display();
    getOperator();
    clearButton();
    equalButton();
    deleteButton();
});