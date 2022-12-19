//Variables
var numbers = "1234567890";
var symbols = "!#$%&*+<=>?@;"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
var lowerCaseLetters = upperCaseLetters.toLowerCase();
var generateBtn = document.querySelector("#generate");
var charLength = 0;
var comboStrings= ""; //concatenated strings FOR password combos
var passCombos = ""; //all possible password combinations


//CRITERIA NEEDED TO GENERATE PASSWORD
function generatePassword () {
let statusNum = confirm("Would you like to include numbers in your password?");
if (statusNum == true) {
  alert("great, numbers will be included")
  comboStrings = comboStrings.concat(numbers)
}
else {
  alert("ok, no numbers will be included")
};
// console.log(comboStrings); TO TEST IF WORKING

let statusSymb = confirm("Would you like to include symbols in your password?");
if (statusSymb == true) {
  alert("great, symbols will be included")
  comboStrings = comboStrings.concat(symbols)
}
else {
 alert("ok, no symbols will be included")
};
// console.log(comboStrings); TO TEST IF WORKING

let statusLCL = confirm("Would you like to include lowercase letters in your password?");
if (statusLCL == true) {
  alert("great, lowercase will be included")
 comboStrings = comboStrings.concat(lowerCaseLetters)
}
else {
  alert("ok, no lowercase will be included")
};

let statusUCL = confirm("Would you like to include uppercase letters in your password?");
if (statusUCL == true) {
  alert("great, uppercase will be included")
 comboStrings = comboStrings.concat(upperCaseLetters)
}
else {
  alert("ok, no uppercase will be included")
};
// console.log(comboStrings); TO TEST IF STILL WORKING

let charLength = prompt("Choose a password length between 8 and 128 characters");
if (charLength >= 8 && charLength <= 128) {
  alert("Generating your password...")
}
else {
  alert("Please try again! Must be between 8-128 characters in length")
};

if (!statusLCL, !statusNum, !statusSymb, !statusUCL == true ) {
  alert("one or more criteria must be defined");
}
else {}; //! DOES THIS NEED TO START WITH A LET STATEMENT?? see red note below to see if these are related. ALSO, REMEMBER THAT IMAGE LINK IS BROKEN IN README. WHY?


function psPleaseWork() {
  let password = ""
  for (let i=0; i < charLength; i++) {
    let rndSelect = Math.floor(Math.random() * comboStrings.length);
    let newSelect = comboStrings[rndSelect];
    password = password.concat(newSelect);
  }
  return password
}

return psPleaseWork()

}



function writePassword(generateBtn) {
  generateBtn.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//! THIS STILL RETURNS A PASSWORD, EVEN IF NO CRITERIA IS DEFINED. WHY??