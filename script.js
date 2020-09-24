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


//////////added code by Samer/////////////

function generatePassword() {
            //criteria
            var passwordLength;
            var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var nums = ["0","1","2","3","4","5","6","7","8","9"];
            var specialChars = ['~','!','@','#','$','%','&','-','+','=','_'];

            //user selections
            var passwordCriteria = [];
            //output
            var generatedPassword = "";
            //take user choices for criteria
            ////////////////////////////////
            //password length
            passwordLength = prompt("How long should the password be?");
            //validate the input to be within 8-128
            while (passwordLength < 8 || passwordLength > 128) {
                alert("Password length should be between 8 and 128!");
                passwordLength = prompt("How long should the password be?");
            }

            //validate criteria input to include at least one choice
            var noChoice = false;
            do {
                alert("Please choose your criteria (at least one).");
                //include lowercase characters?
                var includeLower = confirm("Include lowercase characters?");
                if (includeLower) {
                    addArrays(lowercaseChars,passwordCriteria);
                    noChoice = true;
                }

                //include uppercase characters?
                var includeUpper = confirm("Include UPPERCASE characters?");
                if (includeUpper) {
                    addArrays(uppercaseChars,passwordCriteria);
                    noChoice = true;
                }

                //include numbers?
                var includeNum = confirm("Include numbers?");
                if (includeNum) {
                    addArrays(nums,passwordCriteria);
                    noChoice = true;
                }

                //include Special Characters?
                var includeSpecials = confirm("Include Special Characters?");
                if (includeSpecials) {
                    addArrays(specialChars,passwordCriteria);
                    noChoice = true;
                }
            
            } while (noChoice == false)

            for(var i=0; i<passwordLength; i++) {
              var randomIndex = Math.floor(Math.random() * passwordCriteria.length);
              generatedPassword += passwordCriteria[randomIndex];
              
            }
            return generatedPassword;
}
//func that adds x to result and returns result. will be used to add criteria chosen to passwordCriteria
function addArrays(x,result) {
    for(var i=0; i<x.length; i++)
    {
        result.push(x[i]);
    }
    return result;
}




