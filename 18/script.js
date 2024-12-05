function checkOddOrEven() {
    // Get the input number and validate
    let number = parseInt(document.getElementById("numberInput").value);

    // Check if the input is a valid number
    if (isNaN(number)) {
        document.getElementById("output").innerHTML = "Oops! Please enter a valid number.";
        return;
    }

    // Determine if the number is odd or even
    if (number % 2 === 0) {
        document.getElementById("output").innerHTML = `The number ${number} is Even!`;
    } else {
        document.getElementById("output").innerHTML = `The number ${number} is Odd!`;
    }
}
