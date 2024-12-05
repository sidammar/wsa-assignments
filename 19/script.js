function generateFibonacci() {
    // Get the number of terms from input
    let terms = parseInt(document.getElementById("termsInput").value);

    // Check if the input is a valid number greater than 0
    if (isNaN(terms) || terms <= 0) {
        document.getElementById("output").innerHTML = "Please enter a valid number greater than 0.";
        return;
    }

    let fibonacciSeries = [];
    let a = 0, b = 1;

    // Generate the Fibonacci sequence
    for (let i = 0; i < terms; i++) {
        fibonacciSeries.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    // Display the result
    document.getElementById("output").innerHTML = `Fibonacci Series: ${fibonacciSeries.join(", ")}`;
}
