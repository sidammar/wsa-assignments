function swapCase() {
    // Get input text
    let inputText = document.getElementById("inputText").value;
    let result = "";

    // Loop through each character in the input text
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        // Check if the character is lowercase
        if (char === char.toLowerCase()) {
            result += char.toUpperCase(); // Convert to uppercase
        } else {
            result += char.toLowerCase(); // Convert to lowercase
        }
    }

    // Display the result
    document.getElementById("output").innerHTML = `Swapped Case: ${result}`;
}
