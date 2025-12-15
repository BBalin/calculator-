const display = document.getElementById("display");

let firstNumber
let secondNumber
let step = 0;
let operation
let result = 0;

let numArray = [];
let secondNumArray = [];

function getNumber(num) {
    if (step === 0 || step === 1) {
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        display.value = firstNumber;
    } else if (step === 2) {
        secondNumArray.push(num);
        secondNumber = Number(secondNumArray.join(''));
        display.value = secondNumber;
    }
};

function getOperator(op) {
    step = 2;
    operation = op;
};

function calculate() {
    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber; 
    } else if (operation === "/") {
        result = firstNumber / secondNumber;
    } else {
        return "ERROR";
    };

    display.value = result;
};


function clearDisplay() {
    numArray = [];
    secondNumArray = [];
    step = 0;
    display.value = "";
}