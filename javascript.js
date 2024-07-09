let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

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
    return result;
}

function display(){
    let btnTextArray = [];
    const btnNumbers = document.querySelectorAll(".number");
    const display = document.querySelector("#display");

    btnNumbers.forEach(button => {
        button.addEventListener("click", () => {
            const btnText = button.textContent;
            btnTextArray.push(btnText);
            if(operator === '') {
                num1 = btnTextArray.join('');
                display.textContent = num1;
            }
            //if (num2 !=== 0), do calculation, display result, num1 = result, num2 = input
            else{
                num2 = btnTextArray.join('');
                display.textContent = num2;
            }
    });
});
}

const clearBtn = document.querySelector("#clear");
 clearBtn.addEventListener("click", () => {
    const display = document.querySelector("#display");
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    btnTextArray = [];
    console.log("info is: " + num1, operator, num2);
 });

function getOperator(){
    const operatorsBtn = document.querySelectorAll(".operation");
    operatorsBtn.forEach(button =>{
        button.addEventListener("click", () => {
            operator = button.textContent;
            btnTextArray = [];
            display();
            console.log(operator, num1, num2);
        });
        
        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    display();
    getOperator();
});

operate(10, 0.5, "x");
console.log(result);
