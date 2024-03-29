// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","@","#","$","%","^","&","*","?","/"];

var length = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial

function generatePassword() {

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
  
  while (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert ("Need to choose at least one parameter");
    var confirmLower = window.confirm("Do you want lowercase letters?")
    var confirmUpper = window.confirm("Do you want uppercase letters?")
    var confirmNumeric = window.confirm("Do you want numbers?")
    var confirmSpecial = window.confirm("Do you want special characters?")
  }

  var useChar = []

  if(confirmLower) {
   useChar = useChar.concat(lower)
  };
  if(confirmUpper) {
    useChar = useChar.concat(upper)
   };
  if(confirmNumeric) {
    useChar = useChar.concat(numeric)
   };
  if(confirmSpecial) {
    useChar = useChar.concat(special)
   };
   

  var randomPassword =""

  for (var i = 0; i < length; i++) {
    randomPassword = randomPassword + useChar[Math.floor(Math.random() * useChar.length)];
    console.log(randomPassword);
  }
  return randomPassword;
};



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);