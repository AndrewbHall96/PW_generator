// Assignment Code
function generatePassword() {
  var password = ""

  //ask prompt
  var characterLength = parseInt(
    prompt("How many characters would you like your password to contain?"));
  console.log(characterLength);
  if (isNaN(characterLength) === true) {
    alert("Password length must be provided as a number");
    return
  }
  if (characterLength < 10) {
    alert("Code must be at least 10 characters");
    return
  }
  if (characterLength > 130) {
    alert("Code must be less than 130 characters");
    return
  }

  var includeSpec = confirm("Click OK to confirm including special characters.");

  var includeNum = confirm("Click OK to confirm including numeric characters.");

  var includeLow = confirm("Click OK to confirm including lowercase characters.");

  var includeUpp = confirm("Click OK to confirm including uppercase characters.");

  var randomChoice = Math.floor(Math.random() * 130); 
  //need to generate number between 10-130. //Inside a  loop. Will run for however many times the character length.

  //array of special characters (an array of special characters) 
  //create another array called numeric characters which will hold the string 0-9
  //Create a varaibale that is an array of lowercase chacacters 
  //Function -- Random number will be a separate function to get a password
  //Last function will generate password

  return password
  //last step.
}
var generateBtn = document.querySelector("#generate");
//looking  for something in the page. Grabs something on the page with the #. Attaches a variable.

// Write password to the #password input
//create new function "generatePassword" This will return created a generated password. Build a string that is the password.
function writePassword() {
  console.log("click")
  var password = generatePassword();
  //Create this function^
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
