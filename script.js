// Assignment code here



// user confirms lowercase, uppercase, numeric, and/or special characters

// validate user input and one character type should be selected

// a password is generated that matches the selected criteria

// password is displayed in an alert or written to the page
debugger; 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // display prompt so user can choose how many characters in new password
const passwordLength = window.prompt("Choose a number between 8 and 128!")
// user inputs password length 8-128
console.log(passwordLength);

if ( passwordLength < 8 || passwordLength > 128){
  window.alert("Sorry, wrong number. Please try again!");
}
else{
  function generatePassword(){
    const pickLowercase = document.getElementById('pickLowercase')
    const pickUppercase = document.getElementById('pickUppercase')
    const pickNumbers = document.getElementById('pickNumbers')
    const pickSymbols = document.getElementById('pickSymbols')
    const form = document.getElementById('passGenForm')

    const pickLowercase = document.getElementById('pickLowercase')
    const pickUppercase = document.getElementById('pickUppercase')
    const pickNumbers = document.getElementById('pickNumbers')
    const pickSymbols = document.getElementById('pickSymbols')

    const LOWERCASE_CHAR_CODES = arrayCharacters(97, 122)
    const UPPERCASE_CHAR_CODES = arrayCharacters(65, 90)
    const NUMBER_CHAR_CODES = arrayCharacters(48, 57)
    const SYMBOL_CHAR_CODES = arrayCharacters(33, 47).concat(
      arrayCharacters(58,64)
    ).concat(
      arrayCharacters(91, 96)
    ).concat(
      arrayCharacters(123, 126)
    )

    form.addEventListener('submit', e =>{
      e.preventDefault()
      const pickLowercase = pickLowercase.checked
      const pickUppercase = pickUppercase.checked
      const pickNumbers = pickNumbers.checked
      const pickSymbols = pickSymbols.checked
      const password = generatePassword(pickLowercase, pickUppercase, pickNumbers, pickSymbols)
      passwordDisplay.innerText = password
    })

    function generatePassword(passwordLength, pickUppercase, pickNumbers, pickSymbols) {
      let randomChar = LOWERCASE_CHAR_CODES
      if (includeUppercase) randomChar = randomChar.concat(UPPERCASE_CHAR_CODES)
      if (includeNumbers) randomChar = randomChar.concat(NUMBERS_CHAR_CODES)
      if (includeSymbols) randomChar = randomChar.concat(SYMBOLS_CHAR_CODES)

      const passwordRandom = []
      for (let i = 0; i < passwordLength; i++) {
        const randomPassword = randomChar[Math.floor(Math.random() * randomChar.length)]
        passwordRandom.push(String.fromCharCode(randomPassword))
      }
      return passwordRandom.join('')
    }

    function arrayCharacters(low, high){
      const array = []
      for (let i = low; i <= high; i++){
        array.push(i)
      }
      return array
    }

  }
}






  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
