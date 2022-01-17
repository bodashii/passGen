// Assignment code here
console.clear();

// ask user which character types to include

// user confirms lowercase, uppercase, numeric, and/or special characters

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

if ( passwordLength < 8 || passwordLength > 128){
  window.alert("Sorry, wrong number. Please try again!");
}
debugger;
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(passPref)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.passPref.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return 
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// const randomChar = {
//   lower: getLowerChar,
//   upper: getUpperChar, 
//   number: getNumber,
//   symbol: getSpecialChar
// }

// function secureMathRandom() {
//   return window.crypto.getRandomValues(newUint32Array(1))[0] / (Math.pow(2, 32) - 1);
// }

// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const upperCharEl = document.getElementById('upperChar');
// const lowerCharEl = document.getElementById('lowerChar');
// const specialCharEl = document.getElementById('specialChar');
// const numbersEl = document.getElementById('numbers');

// while(i = 0, i < passwordLength, i++ );{
//   function getLowerChar() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   }

//   function getUpperChar() {
//     return String.fromCharCode(Math.floor(Math.random() *26) +65);
//   }

//   function getNumber() {
//     return String.fromCharCode(Math.floor(Math.random() *10) + 48);
//   }

//   function getSpecialChar() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
//   }

//   console.log(getLowerChar);
//   console.log(getUpperChar);
//   console.log(getNumber);
//   console.log(getSpecialChar);

//   const randomChar = {
//     lower: getLowerChar,
//     upper: getUpperChar,
//     number: getNumber,
//     symbol: getSpecialChar
//   }; 





  
};


//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
