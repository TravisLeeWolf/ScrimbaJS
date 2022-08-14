let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

let sumEl = document.getElementById("sum-el");
let sumText = "Sum: "

function add() {
    updateSum(num1 + num2);
};

function sub() {
    updateSum(num1 - num2);
};

function div() {
    updateSum(num1 / num2);
};

function multi() {
    updateSum(num1 * num2);
};

function updateSum(result) {
    sumEl.innerText = sumText + result 
};