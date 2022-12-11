// Assignment Code
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "#", "$", "%", "&", "*", "+", "<", "=", ">", "?", "@"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseLetters = upperCaseLetters.toString().toLowerCase();
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var charLength;


function generatePassword () {
console.log("Button is pressed! If it works, make it return something")

let statusNum = confirm("Would you like to include numbers in your password?");
if (statusNum == true) {
  console.log("You pressed ok!")
}
else {
  console.log("You pressed no!")
};

let statusSymb = confirm("Would you like to include symbols in your password?");
if (statusSymb == true) {
  console.log("You pressed ok!")
}
else {
  console.log("You pressed no!")

};

let statusLCL = confirm("Would you like to include lowercase letters in your password?");
if (statusLCL == true) {
  console.log("You pressed ok!")
}
else {
  console.log("You pressed no!")

};

let statusUCL = confirm("Would you like to include uppercase letter in your password?");
if (statusUCL == true) {
  console.log("You pressed ok!")
}
else {
  console.log("You pressed no!")

};

prompt("Choose a password length between 8 and 128 characters");
if (charLength < 8 || charLength > 128) { //NOT WORKING
  console.log("correct value!")
}
else {
  console.log("incorrect value")

};

return "Here's your password"

}


// Write password to the #password input

function writePassword(value) {
  var password = generatePassword();

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---
//1. starting at the beginning, opening up console to see what errors it first gives us. tells us "generatePassword is undefined"...so let's define it. As a user I want to press the generate password button and in turn get a password. I need to first connect my button to the writePassword function by defining generatePassword as a function//

//2. added back in all my declared variables

//3. re-add the prompts within the function so as to have them appear only after button is pressed.

//4. Now i NEED it to write a password after all criteria is selected. I also NEED to apply values to passwordText