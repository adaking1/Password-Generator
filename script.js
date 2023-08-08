// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // I first created variables to hold lists of all the possible characters
    var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperList = lowerList.map(letter => letter.toUpperCase())
    var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var specialList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "\\", "^", "_", "`", "{", "|", "}", "~"]
    
    // This is a prompts the user to enter a number
    var passwordLength = window.prompt("How long would you like the password to be? Minimum length of 8 characters, maximum length of 128 characters");
    
    // if the user presses cancel, an empty string is returned as to not have "undefined" printed on the scren
    if (!passwordLength) {
        return "";
    }

    // if the user enters anything other than a number, an alert pops up and returns from the function
    else if (isNaN(Number(passwordLength))) {
        window.alert("Invalid Input");
        return "";
    }

    // if the password is too long an alert pops up and returns from the function
    else if (passwordLength > 128) {
    window.alert("Too many characters!");
    return "";
    } 

    // if the password is too short an alert pops up and returns from the function
    else if (passwordLength < 8) {
        window.alert("Not enough characters!");
         return "";
    }

    // if the user submits a valid number, then this else statement runs
    else {
        // These variables ask the user a question about their desired password parameters, and the answer is stored as a boolean
        var lower = window.confirm("Do you want lowercase letters in your password? (Okay for yes, Cancel for no)");
        var upper = window.confirm("Do you want uppercase letters in your password? (Okay for yes, Cancel for no)");
        var numeral = window.confirm("Do you want numbers in your password? (Okay for yes, Cancel for no)");
        var special = window.confirm("Do you want special characters in your password? (Okay for yes, Cancel for no)");
        
        // this variable is declared as an empty list so it can be added to below
        var charPool = [];

        // Declared these variables and set them as true by default so they can be turned to false if their type gets selected. 
        // This will be used later to make sure all selected types are in the password
        var lowerType = true;
        var upperType = true;
        var numberType = true;
        var specialType = true;
       
        // If no character type is selected you return from the function and an alert pops up
        if (!(lower || upper || numeral || special)) {
            window.alert("You need at least one character type. Try again.");
            return "";
        }

        // if a character type is selected, the list of that character type gets added to the original empty list
        // if more than one are selected, than all corresponding charactertype lists get added to that list
        // the type is changed to false to create a starting point to make sure all selected types end up in the password
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

        // declare an empty string variable to store the password
        var password1 = "";

        // This loop iterates the amount of times the desired password is
        for (var i=0; i<passwordLength; i++) {
            // this chooses a random item in the pool of characters
            var character = charPool[Math.floor(Math.random()*charPool.length)];
            // this adds that random character to the end of the password
            password1 = password1 + character;
    
            // if the random character is a part of a selected character type, their boolean variable changes to true.
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

            // It will start over if all the selected types are not in the password
            if (!(lowerType || upperType || numberType || specialType)) {
                if (password1.length == passwordLength) {
                    i=0;
                    password1 = "";
                }
            }
            // If the password has all the desired types and is the correct length, it will return the password to the page
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
