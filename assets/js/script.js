// Assignment code here

// array of special characheter to be included in password. 
var specialCharacters = [
    '@',
    '!',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '[',
    ']',
    '{',
    '}',
    '\\',
    '+',
    '?',
    ',',
    ':',
    ';',
    '_',
    '-',
    '/',
];

// array of numerical characheters to be in password
var numericCharaters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
]

// Array of letters to be in the password
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
]

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
]

// PROMPT FOR USER FOR PASSOWORD OPTIONS
function getPasswordOptions(){
    var length = parseInt(
        prompt('How mant characters would you like you password to contain (8-128)')
    );
    //cOntditional to check to make sure it is a numeber
    if (Number.isNaN(length)) {
        alert('password length must be provided as a NUMBER');
        return null;
    }
    //cOntditional to check to make sure it is a numeber
    if (length < 8) {
        alert('password length must be at least 8 characters long');
        return null;
    }
    //cOntditional to check to make sure it is a numeber
    if (length > 128) {
        alert('password length must be less than 129 characters');
        return null;
    }
    //Variable to stroe boolean regarding special characters
    var hasSpecialCharacters =confirm(

        'click OK to confirm including Special Characters'
    )
    //Variable to stroe boolean regarding special characters
    var hasNumericalCharacters =confirm(

        'click OK to confirm including Numerical Characters'
    )
    //Variable to stroe boolean regarding special characters
    var hasLowerCaseCharacters =confirm(

        'click OK to confirm including Lower Case Characters'
    )
    //Variable to stroe boolean regarding special characters
    var hasUpperCaseCharacters =confirm(

        'click OK to confirm including Upper Case Characters'
    )

    // condition statement to check fact sum
    if (
        hasSpecialCharacters === false &&
        hasNumericalCharacters === false &&
        hasLowerCaseCharacters === false &&
        hasUpperCaseCharacters === false
    )   {
        alert('Must select at least one character type');
        return null;
    }
    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericalCharacters: hasNumericalCharacters,
        hasLowerCaseCharacters: hasLowerCaseCharacters,
        hasUpperCaseCharacters: hasUpperCaseCharacters
    };

    return passwordOptions;
}

//function for get an random element from an array
function generatePassword() {
    var option = getPasswordOptions();
// variable to store password as it being generated
    var result = [];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);