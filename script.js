// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = 
// Write password to the #password input
function writePassword() {

  
  var length = window.prompt("Enter number of characters in password between 8 and 128");
   
  if (!length) {
    return;
    }
  while(length <= 7 || length >= 129) {
      alert("Password length must be 8-128 characters");
      var length = window.prompt("Enter number of characters in password between 8 and 128");
    }
  
  var confirmLower = window.confirm("Do you want lowercase letters?")
  var confirmUpper = window.confirm("Do you want uppercase letters?")
  var confirmNumeric = window.confirm("Do you want numbers?")
  var confirmSpecial = window.confirm("Do you want special characters?")

  function generatePassword() {
  
    for (var i = 0; i < length; i++) {
      charSet(Math.floor(Math.random() * charSet.length));
    }
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
