// Assignment code here


// ask user which character types to include

// user confirms lowercase, uppercase, numeric, and/or special characters

const randomChar = {
  lower: getLowerChar,
  upper: getUpperChar,
  number: getNumber,
  symbol: getSpecialChar
}; 

function getLowerChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getLowerChar());

function getUpperChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getUpperChar());

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getNumber());

function getSpecialChar() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getSpecialChar());



// validate user input and one character type should be selected

// a password is generated that matches the selected criteria

// password is displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // display prompt so user can choose how many characters in new password
var passwordLength = window.prompt("Choose a number between 8 and 128!")
// user inputs password length 8-128
console.log(passwordLength);

// 

const randomChar = {
  lower: getLowerChar,
  upper: getUpperChar, 
  number: getNumber,
  symbol: getSpecialChar
}

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCharEl = document.getElementById('upperChar');
const lowerCharEl = document.getElementById('lowerChar');
const specialCharEl = document.getElementById('specialChar');
const numbersEl = document.getElementById('numbers');

while(i = 0, i < passwordLength, i++ );{
  function getLowerChar() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getUpperChar() {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }

  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  }

  function getSpecialChar() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  console.log(getLowerChar);
  console.log(getUpperChar);
  console.log(getNumber);
  console.log(getSpecialChar);





  
};


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
