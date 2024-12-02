function calculateSum() {
    const n = parseInt(document.getElementById('number').value);

    // Validate input
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = 'Please enter a valid positive integer.';
        return;
    }

    // Calculate the sum of series a: 1 + 1/2 + 1/3 + ... + 1/n
    let sumA = 0;
    for (let i = 1; i <= n; i++) {
        sumA += 1 / i;
    }

    // Calculate the sum of series b: 2 + 4 + 6 + ... + n (even numbers)
    let sumB = 0;
    for (let i = 2; i <= n; i += 2) {
        sumB += i;
    }

    // Display results
    document.getElementById('result').innerText = `a) ${sumA.toFixed(2)}\nb) ${sumB}`;
}
