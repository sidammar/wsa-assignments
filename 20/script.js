function generateUniquePIN() {
    // Get the desired PIN length from input
    let length = parseInt(document.getElementById("pinLength").value);

    // Check if the input length is valid (between 1 and 10)
    if (isNaN(length) || length <= 0 || length > 10) {
        document.getElementById("output").innerHTML = "Please enter a valid length between 1 and 10.";
        return;
    }

    let pin = "";
    let usedDigits = new Set();

    // Generate a unique PIN of the specified length
    while (pin.length < length) {
        // Generate a random digit from 0 to 9
        let digit = Math.floor(Math.random() * 10);
        
        // Ensure the digit is unique
        if (!usedDigits.has(digit)) {
            pin += digit;
            usedDigits.add(digit);
        }
    }

    // Display the generated PIN
    document.getElementById("output").innerHTML = `Generated PIN: ${pin}`;
}
