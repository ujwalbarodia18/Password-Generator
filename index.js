const button = document.getElementById("Generate");
const outputBox = document.getElementById("text_box");
const upperCheck = document.getElementById("upperchk");
const lowerCheck = document.getElementById("lowerchk");
const numberCheck = document.getElementById("numberchk");
const symbolCheck = document.getElementById("symbolchk");
const passLen = document.getElementById("lengthTaker");
var password = "";
var finalPass = "";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numCase = "0123456789";
const symbol = "!@#$%^&*()-_+=~<>,./;:'\][{}|";

button.addEventListener("click", ()=>{
    generatePassword();
    outputBox.value = finalPass;    
})

const getData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password="") => {
    var choice = Math.floor(Math.random() * 4);
    
    if(upperCheck.checked && choice == 0) {
        password += getData(upperCase);
    }
    if(lowerCheck.checked && choice == 1) {
        password += getData(lowerCase);
    }
    if(numberCheck.checked && choice == 3) {
        password += getData(numCase);
    }
    if(symbolCheck.checked && choice == 2) {
        password += getData(symbol);
    }
    
    if(password.length < passLen.value) {
        return generatePassword(password);
    }
    else {
        finalPass = password;
        return;
    }
    
}