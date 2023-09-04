const inputBox = document.querySelector("input[type='text']");
const copyButton = document.querySelector(".copy");
const generatePasswordButton = document.querySelector(".generate");
generatePasswordButton.addEventListener("click", () => {
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialChar = "~`!@#$%^&*()_+-={}|[];:'<>,./?";
    let password = "";
    password += lowerLetters[Math.floor(Math.random() * 26)];
    password += upperLetters[Math.floor(Math.random() * 26)];
    password += numbers[Math.floor(Math.random() * 10)];
    password += specialChar[Math.floor(Math.random() * 22)];
    const allChar = lowerLetters + upperLetters + numbers + specialChar;
    while (password.length <= 12) {
        password+=allChar[Math.floor(Math.random() * 84)];
    }
    inputBox.value = password;
});
copyButton.addEventListener("click", () => {
    inputBox.select();
    document.execCommand("copy");
});