document.addEventListener("DOMContentLoaded", function () {
    const upper = document.getElementById("uppercase");
    const lower = document.getElementById("lowercase");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    const passwordLength = document.getElementById("length");
    const passwordBox = document.getElementById("password_box");
    const copyToClipboard = document.getElementById("copy_btn");
    const generateBtn = document.getElementById("generate_btn");
  
    const keys = {
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      number: "0123456789",
      symbol: "!@#$%^&*()_+~\\|}{[]:;?></-=",
    };
  
    function generateCharacter(set) {
      return set[Math.floor(Math.random() * set.length)];
    }
  
    function createPassword() {
      if (
        !upper.checked &&
        !lower.checked &&
        !number.checked &&
        !symbol.checked
      ){
        return;
      }
      let generatedPassword = "";
      while (generatedPassword.length < passwordLength.value) {
        if (upper.checked) {
          generatedPassword += generateCharacter(keys.upperCase);
        }
        if (lower.checked) {
          generatedPassword += generateCharacter(keys.lowerCase);
        }
        if (number.checked) {
          generatedPassword += generateCharacter(keys.number);
        }
        if (symbol.checked) {
          generatedPassword += generateCharacter(keys.symbol);
        }
      }
      password_box.innerText = truncateString(generatedPassword,passwordLength.value);
    }
  
    const copyToClipboardFunction = () => {
        const password = passwordBox.innerHTML;
        navigator.clipboard.writeText(password);
        setTimeout(() => {
            copyToClipboard.innerText = "COPIED";
            copyToClipboard.style.background = "red";
        },0);
      };
  
    createPassword();
    copyToClipboard.addEventListener("click", copyToClipboardFunction);
    generateBtn.addEventListener("click", createPassword);
  });

  function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
  