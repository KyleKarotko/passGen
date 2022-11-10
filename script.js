// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9',
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

//function to get options wanted for password

function getPasswordOptions () { 

//prompt asking how many characters the user would like to use
  var length = parseInt(
    prompt("How many characters would you like your passwrod to be?(must be between 8 and 128 characters"), 10
  )
  if(length < 8) {
    alert("Must be at least 8 characters!");
    return;
  }
  
  if(length > 128) {
    alert("must be less than 128 characters");
  }
//prompts asking what kind of characters the user would like to have in their password
  var useLowercase = confirm("Would you like to use lowercase characters?");
  var useUppercase = confirm("Would you like to use UPPERCASE characters?");
  var useSpecialCharacters = confirm("Would you like to use $peci@l characters?");
  var useNumericCharacters = confirm("Would you like to use numeric characters?");
  if (
    !useSpecialCharacters &&
    !useNumericCharacters &&
    !useLowercase &&
    !useUppercase
  ) {
    alert('Must select at least one character type');
    return;
  }
  // object to store user input
  var passwordOptions = {
    length: length,
    useSpecialCharacters: useSpecialCharacters,
    useNumericCharacters: useNumericCharacters,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
  };

  return passwordOptions;
}

// function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//function to generate the password
function generatePassword (){
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var charactersUsed = [];


// if statement(s) adding new characters to password
   if (!options) return null;

  if (options.useSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    charactersUsed.push(getRandom(specialCharacters));
  }

  if (options.useNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    charactersUsed.push(getRandom(numericCharacters));
  }

  if (options.useLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    charactersUsed.push(getRandom(lowerCasedCharacters));
  }

  if (options.useUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    charactersUsed.push(getRandom(upperCasedCharacters));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < charactersUsed.length; i++) {
    result[i] = charactersUsed[i];
  }

  return result.join('');

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

