let passwordOne = ""
let passwordOTwo = ""

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneBtn = document.getElementById("password-1-btn");
let passwordOTwoBtn = document.getElementById("password-2-btn");

function generatePasswords() {
    passwordOne = createNewPassword();
    passwordOTwo = createNewPassword();
    displayPasswords();
}

function createNewPassword() {
    password = "";
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

function displayPasswords() {
    passwordOneBtn.textContent = passwordOne;
    passwordOTwoBtn.textContent = passwordOTwo;
}