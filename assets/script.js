// Assignment code here
var letters = getRandomLower()
var lettersUpper = getRandomUpper()
var symbol = getRandomSymbol()
var numbers = getRandomNumber()
var passLength = "128";

// Functions
function getRandomLower() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomUpper() {
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
}

function getRandomSymbol() {
  var symbol = "!@#$%^&*";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function getRandomNumber() {
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const con1 = window.confirm("Do you want to add lowercase letters?");
  const con2 = window.confirm("Do you want to add capital letters");
  const con3 = window.confirm("Do you want to add symbols");
  const con4 = window.confirm("Do you want to add numbers?");
  const prom = window.prompt("How many characters would you like to use between 8-128?");

// If then for confirmation prompt
if (con1 == true) {
  password = letters;
} 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);