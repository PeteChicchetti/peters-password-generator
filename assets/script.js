// // Assignment code here

// Variables for function to generate password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*";
var numbers = "0123456789";
var stored = "";
var pass = "";


// Length variable is determined by the user input in the prompt window and
// writes an if statement to continue or reset the function is the input is invalid
function generatePassword() {
 var length = Number(prompt("How many characters would you like to use between 8-128?"));
    if (length < 8 || length > 128 || !length) {
      alert("That is not a valid input, please try again.")
      generatePassword();
    }
// con1 refers to the first confirm window and if the value is "ok" or true the code will execute
// and add all lower case characters from variable "lower" into the "stored" variable to hold the data 
 var con1 = confirm("Do you want to add lowercase letters?");
    if (con1 == true){
      stored = stored.concat(lower);
    }
// con2 refers to the second confirm window and if the value is "ok" or true the code will execute
// and add all upper case characters from variable "upper" into the "stored" variable and while using
// .concat the previous data is kept and added onto
 var con2 = confirm("Do you want to add capital letters");
    if (con2 == true){
      stored = stored.concat(upper);
    }
// con3 refers to the second confirm window and if the value is "ok" or true the code will execute
// and add all special characters from variable "symbol" into the "stored" variable and while using
// .concat the previous data is kept and added onto
 var con3 = confirm("Do you want to add symbols? \nAvailable symbols: ! @ # $ % ^ & *");
    if (con3 == true){
      stored = stored.concat(symbol);
    }
// con4 refers to the second confirm window and if the value is "ok" or true the code will execute
// and add all numbers from variable "numbers" into the "stored" variable and while using
// .concat the previous data is kept and added onto
 var con4 = confirm("Do you want to add numbers?");
    if (con4 == true){
      stored = stored.concat(numbers);
    }
// The final for loop is run to find the length of the user value that was input into the prompt window
// then the "pass" variable is used to store each indivial value being added to the return
// the array of "stored" is used to find a random value from the previously concatenated variables which
// were all added to "stored" and used in "stored.length" to find a random value for each character in the desired password
// and the for loop for run over and over adding random characters until the "length" reaches the users input value
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