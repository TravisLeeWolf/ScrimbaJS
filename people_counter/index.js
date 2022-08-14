let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.innerText = count;
};

function save() {
    let countStr = count + " - ";
    saveEl.innerHTML += countStr;
    resetCount();
};

function resetCount() {
    count = 0;
    countEl.innerText = count;
};

// let welcomeEl = document.getElementById("welcome-el");
// let greeting = "Welcome back ";
// let userName = "Bob";
// welcomeEl.innerText = greeting + userName + " 👋";