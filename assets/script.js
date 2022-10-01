// // Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*";
var numbers = "0123456789";
var stored = "";
var pass = "";

function generatePassword() {
 var length = Number(prompt("How many characters would you like to use between 8-128?"));
    if (length < 8 || length > 128 || !length) {
      alert("That is not a valid input, please try again.")
      generatePassword();
    }

 var con1 = confirm("Do you want to add lowercase letters?");
    if (con1 == true){
      stored = stored.concat(lower);
    }

 var con2 = confirm("Do you want to add capital letters");
    if (con2 == true){
      stored = stored.concat(upper);
    }

 var con3 = confirm("Do you want to add symbols? \nAvailable symbols: ! @ # $ % ^ & *");
    if (con3 == true){
      stored = stored.concat(symbol);
    }

 var con4 = confirm("Do you want to add numbers?");
    if (con4 == true){
      stored = stored.concat(numbers);
    }

for (var i = 0; i < length; i++) {
    pass += stored[(Math.floor(Math.random()*stored.length))];
}

return pass;

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