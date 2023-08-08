// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperList = lowerList.map(letter => letter.toUpperCase())
    var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var specialList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "\\", "^", "_", "`", "{", "|", "}", "~"]
    var passwordLength = window.prompt("How long would you like the password to be? Minimum length of 8 characters, maximum length of 128 characters");

    if (!passwordLength) {
        return "";
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
        console.log([lower, upper, numeral, special]);
        var charPool = [];
        var lowerType = true;
        var upperType = true;
        var numberType = true;
        var specialType = true;
       
        if (!(lower || upper || numeral || special)) {
            window.alert("You need at least one character type. Try again.");
        }
        if (lower) {
            charPool = charPool.concat(lowerList);
            lowerType = false;
        }
        if (upper) {
            charPool = charPool.concat(upperList);
            upperType = false;
        }
        if (numeral) {
            charPool = charPool.concat(numberList);
            numberType = false;
        }
        if (special) {
            charPool = charPool.concat(specialList);
            specialType = false;
        }
        console.log(charPool);

        var password1 = "";

        for (var i=0; i<passwordLength; i++) {
            var character = charPool[Math.floor(Math.random()*charPool.length)];
            password1 = password1 + character;
            console.log(password1);
            if (character in lowerList) {
                lowerType = true;
            }
            if (character in upperList) {
                upperType = true;
            }
            if (character in numberList) {
                numberType = true;
            }
            if (character in specialList) {
                specialType = true;
            }

            if (!(lowerType || upperType || numberType || specialType)) {
                if (password1.length == passwordLength) {
                    i=0;
                    password1 = "";
                }
            }
            else {
                if (password1.length == passwordLength) {
                    return password1;
                }
            }

        }
        
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
