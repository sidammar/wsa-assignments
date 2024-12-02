function generateFizzBuzz() {
    const n = 100; // Set the upper limit
    let output = '';

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz, ';
        } else if (i % 3 === 0) {
            output += 'Fizz, ';
        } else if (i % 5 === 0) {
            output += 'Buzz, ';
        } else {
            output += i + ', ';
        }
    }

    // Remove the trailing comma and space, then display the result
    document.getElementById('result').innerText = output.slice(0, -2);
}
