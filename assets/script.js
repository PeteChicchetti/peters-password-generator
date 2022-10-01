// // Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*";
var numbers = "0123456789";

function generatePassword() {
 var length = prompt("How many characters would you like to use between 8-128?");

 var con1 = confirm("Do you want to add lowercase letters?");

 var con2 = confirm("Do you want to add capital letters");

 var con3 = confirm("Do you want to add symbols? \nAvailable symbols: ! @ # $ % ^ & *");

 var con4 = confirm("Do you want to add numbers?");


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
// If then for confirmation prompt
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);