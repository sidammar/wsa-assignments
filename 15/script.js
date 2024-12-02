function swapNumbers() {
    // Get input values
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    // Swap without using third variable
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    // Display the results
    document.getElementById("output").innerHTML = `After swapping:<br>Number 1: ${num1}<br>Number 2: ${num2}`;
}
