
var chars = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sChars = [ "@", "!", "$", "*", "%", ">", "(",")", "<", "?", ",", "+", "="];
var emojis = ["😇", "😅", "🤪", "🤬", "😂", "😒", "😩"];

var createPw = document.getElementById("createPw");

var pwDisplay = document.querySelector("#passwordDisplay");


function createPassword() {
var possibilities = []

var length = parseInt(prompt("How long does this password need to be?"))

if (length < 8 || length > 128 || isNaN(length)) {
    alert ("Password does not meet criteria")
} else{
    
    var charsTrue = confirm ("Do you want chars?")
    var numsTrue = confirm("Do you want numbers")
    var sCharsTrue = confirm("Do you want special characters?")
    var emojisTrue = confirm ("Do you want emojis?")

    if (charsTrue) possibilities.push(chars) 
    if (numsTrue) possibilities.push(nums)
    if (sCharsTrue) possibilities.push(sChars)
    if (emojisTrue) possibilities.push(emojis)

    var pw = ""

    while (pw.length < length) {
         for( let i = 0; i < possibilities.length; i++) {
            if (pw.length < length) { 
                let rand = Math.floor(Math.random() * possibilities[i].length)
            pw += possibilities[i][rand]
            }    
        }
  }
  pwDisplay.textContent = pw;
}
}

document.querySelector("#createPw").addEventListener("click", createPassword);
