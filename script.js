// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var specialList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "\\", "^", "_", "`", "{", "|", "}", "~"]
    var passwordLength = window.prompt("How long would you like the password to be? Minimum length of 8 characters, maximum length of 128 characters");
    
    if (!passwordLength) {
        return;
    }
     else if (passwordLength > 128) {
    window.alert("Too many characters!");
    generatePassword();
    } 

    else if (passwordLength < 8) {
        window.alert("Not enough characters!");
         generatePassword();
    }
    else {
        var lower = window.confirm("Do you want lowercase letters in your password? (Okay for yes, Cancel for no)");
        var upper = window.confirm("Do you want uppercase letters in your password? (Okay for yes, Cancel for no)");
        var numeral = window.confirm("Do you want numbers in your password? (Okay for yes, Cancel for no)");
        var special = window.confirm("Do you want special characters in your password? (Okay for yes, Cancel for no)");
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
