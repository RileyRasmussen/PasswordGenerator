// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  console.log("generate");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var length = prompt("pick a length for your password between 8 and 128 characters.");
  if (length === "" || length === null || length < 8 || length > 128) {
  }
  else{
    window.alert("Please provide a valid password length between 8 and 128 characters.");
  }

 var Uppercase = prompt("pick whether you would like upper case letters. Press yes(y) or No(n)");
 if (Uppercase != "y"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 }
 
 else if(Uppercase != "n"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 }

 var Lowercase = prompt("pick whether you would like lower case letters. Press yes(y) or No(n)");
 if (Lowercase!= "y"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 }
 
 else if (Lowercase!= "n"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 }

 var numeric = prompt("pick whether you would like numereric characters (numbers). Press yes(y) or No(n)");
 if (numeric!= "y"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 } 
 
 else if (numeric!= "n"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
}

 var special = prompt("pick whether you would like special characters (!@#$ etc.). Press yes(y) or No(n)");
 if (special!= "y"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 } 

else if (special!= "n"){
  window.alert("Please pick either yes (y) or no (no)");
  generatePassword();
 }

var alphalower = "abcdefghijklmnopqrstuvwxyz";
var alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

const isUpper = Uppercase == "y";
const isLower = Lowercase == "y";
const isNumeric = numeric == "y";
const isSpecial = special == "y";

if (isUpper === "n" || "" || null && isLower === "n" || "" || null && isNumeric === "n" || "" || null && isSpecial === "n" || "" || null){
  window.alert("no valid characters available based upon your choices. Please restart.");
  return;
}

if(!isUpper){
  alphaupper = "";
}
if(!isLower){
  alphalower = "";
}
if(!isNumeric){
  numbers = "";
}
if(!isSpecial){
  symbols = "";
}

const characters = alphalower + alphaupper + numbers + symbols;

  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
