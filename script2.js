
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "#", "$", "%", "&", "*", "+", "<", "=", ">", "?", "@"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseLetters = upperCaseLetters.toString().toLowerCase();
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


console.log(typeof numbers); //object
console.log(typeof symbols); //object
console.log(typeof lowerCaseLetters); //string
console.log(typeof generateBtn); //object
console.log(typeof password); //object



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

// let statusChar = prompt("Choose a password length between 8 and 128 characters.");
// if (statusChar > 8) {
//   console.log ("invalid")
// }

let Password = confirm("Here's your password!");
generateBtn.addEventListener("click", password);
if (Password ==!true) {
  alert("Start Over")
}
// else if (Password == true) {
//   function writePassword(value) {
//     const password = generatePassword();
//     const passwordText = document.querySelector("#password");
//     passwordText.value.alert("Here you go!") = password;
// }}




// // TODO: below //
// // Get references to the #generate element


// Write password to the #password input
// function writePassword(value) {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// } //TODO MESSAGE TO MYSELf, i used ^^ above as an alert....

console.log(password)
// Add event listener to generate button




// TODO: Password should be written either as an ALERT or ON THE PAGE //
