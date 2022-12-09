var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "#", "$", "%", "&", "*", "+", "<", "=", ">", "?", "@"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseLetters = upperCaseLetters.toString().toLowerCase();

console.log(typeof numbers); //object
console.log(typeof symbols); //object
console.log(typeof lowerCaseLetters); //string

// * * CANNOT SELECT NONE.
//* * EACH prompt should generate at least 1 character, but ALL prompts should generate the whole password?? //

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

let Password = confirm("Here's your password!");
if (Password ==!true) {
  alert("Start Over")
}
else if (Password == true) {
  function writePassword(value) {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value.alert("Here you go!") = password;
}}




//! not working...Number of Chars needed 8-128
 // let i = 8; i < 128;
// if (numbers >= [8]) {
//   console.log("Your password is long enough!")
//   return generatePassword
// }

// ! NOT WORKING
// let statusChar = prompt("How many characters long will your password be?");
// if (statusChar == true) {
//   console.log("You pressed ok!")
// }

// else {
//   console.log("You pressed no!")
// } 

//! -- 
// if under 8
// return false
// if over 128
// return false
// if >= 8 || <=128
// return true
//!


// TODO: below //
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword(value) {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// } //TODO MESSAGE TO MYSELf, i used ^^ above as an alert....

console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// TODO: Password should be written either as an ALERT or ON THE PAGE //


