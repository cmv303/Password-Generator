//Variables
var numbers = 1234567890;
var symbols = "!#$%&*+<=>?@;"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
var lowerCaseLetters = upperCaseLetters.toString().toLowerCase();
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var charLength = "";
var passCombos = "0";


function generatePassword () {
console.log("Button is pressed! If it works, make it return something")//take out at end


//CRITERIA
let statusNum = confirm("Would you like to include numbers in your password?");
if (statusNum == true) {
  alert("great, numbers will be included")
}
else {
  alert("ok, no numbers will be included")
};

let statusSymb = confirm("Would you like to include symbols in your password?");
if (statusSymb == true) {
  alert("great, symbols will be included")
}
else {
 alert("ok, no symbols will be included")

};

let statusLCL = confirm("Would you like to include lowercase letters in your password?");
if (statusLCL == true) {
  alert("great, lowercase will be included")
}
else {
  alert("ok, no lowercase will be included")

};

let statusUCL = confirm("Would you like to include uppercase letters in your password?");
if (statusUCL == true) {
  alert("great, uppercase will be included")
}
else {
  alert("ok, no uppercase will be included")

};
//! NOT WORKING
prompt("Choose a password length between 8 and 128 characters");
if (charLength > 8 || charLength < 128) { 
  alert("on it!")
}
else {
  alert("Please try again! Must be between 8-128 characters in lenght")

}; 
//!

if (!statusLCL, !statusNum, !statusSymb, !statusUCL ==true) {
  alert("one or more criteria must be defined")
}
else {};


//concatenating all variables
let passCombos = statusNum.length + Number(statusSymb.length) + Number(statusLCL.length) + Number(statusUCL.length) + Number(charLength.length)
console.log(typeof passCombos); //number
console.log(passCombos); //! nan???

return generatePassword;


//TODO WHERE DOES MATH.FLOOR(MATH.RANDOM()) GO???

}


// Write password to the #password input

function writePassword() {
  var password = generatePassword(passCombos);

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---
//1. starting at the beginning, opening up console to see what errors it first gives us. tells us "generatePassword is undefined"...so let's define it. As a user I want to press the generate password button and in turn get a password. I need to first connect my button to the writePassword function by defining generatePassword as a function//

//2. added back in all my declared variables

//3. re-add the prompts within the function so as to have them appear only after button is pressed.

//4. Now i NEED it to write a password after all criteria is selected. I also NEED to apply values to passwordText