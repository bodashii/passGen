// Assignment code here







// a password is generated that matches the selected criteria

// password is displayed in an alert or written to the page
// Get references
const generateBtn = document.querySelector("#generate")
const confirmBtn = document.querySelector('#confirm')
const pickLowercase = document.getElementById('#pickLowercase')
const pickUppercase = document.getElementById('#pickUppercase')
const pickNumbers = document.getElementById('#pickNumbers')
const pickSymbols = document.getElementById('#pickSymbols')
const passPref = document.getElementById('passPref')
const password = document.getElementById('password')

let checked = (pickLowercase || pickUppercase || pickNumbers || pickSymbols === true);

// validate user input and one character type should be selected


function passLength() {
  
  const passwordLength = window.prompt("Choose a number between 8 and 128!");

  if (passwordLength >= 8 && passwordLength <= 128){
  // shows user password criteria selection
  passPref.classList.add('show');
  console.log(passwordLength);
  return passwordLength;
}else {
  window.alert("Sorry that's not a number between 8 and 128. Try again!");
}

// user confirms lowercase, uppercase, numeric, and/or special characters
confirmBtn.addEventListener('click', generatePassword);

function generatePassword() {
  
  function checked(){
    let useLowercase = pickLowercase.checked;
    let useUppercase = pickUppercase.checked;
    let useNumbers = pickNumbers.checked;
    let useSymbols = pickSymbols.checked;
  }
  // check if one criteria has been selected if/else

  if (useLowercase || useUppercase || useNumbers || useSymbols == false){
    window.alert("Please pick at least one option!");
  }
  else{
    function writePassword(){
      const useLowercase = arrayCharacters(97, 122)
      const useUppercase = arrayCharacters(65, 90)
      const useNumbers = arrayCharacters(48, 57)
      const useSymbols = arrayCharacters(33, 47).concat(
        arrayCharacters(58,64)
      ).concat(
        arrayCharacters(91, 96)
      ).concat(
        arrayCharacters(123, 126)
      )
      }

      function arrayCharacters(low, high){
        const array = [useLowercase, useUppercase, useNumbers, useSymbols]
        for (let i = low; i <= high; i++){
          array.push(i)
        }
        return array;
      }
    }

    for (let i = 0; i < passwordLength; i++) {
      const passwordRandom = writePassword[Math.floor(Math.random() * passwordLength.length)]
      passwordRandom.push(String.fromCharCode(passwordRandom))
      }
      return passwordRandom.join('')
      }
      const password = passwordRandom.innerHTML;
      password.value = passwordRandom.innerText;
    }
    passPref.remove('show');
  checked();
  writePassword();
  
  };
generateBtn.addEventListener('click', passLength);
