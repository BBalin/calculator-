const display = document.getElementById("display");
const zero = document.getElementById("btn-zero");
const one = document.getElementById("btn-one");
const two = document.getElementById("btn-two");
const three = document.getElementById("btn-three");
const four = document.getElementById("btn-four");
const five = document.getElementById("btn-five");
const six = document.getElementById("btn-six");
const seven = document.getElementById("btn-seven");
const eight = document.getElementById("btn-eight");
const nine = document.getElementById("btn-nine");
const plus = document.getElementById("btn-plus");
const minus = document.getElementById("btn-minus");
const multiply = document.getElementById("btn-multiply");
const divide = document.getElementById("btn-divide");
const clear = document.getElementById("btn-clear");
const equals = document.getElementById("btn-calculate");

function appendToDisplay(input) {
    display.value += input;
};

function calculate() {
    

};

function clearDisplay() {
    display.value = "";
}