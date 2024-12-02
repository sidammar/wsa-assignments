function playNim() {
    const stones = parseInt(document.getElementById('stones').value);

    // Validate input
    if (isNaN(stones) || stones < 1 || stones > 100) {
        document.getElementById('result').innerText = 'Please enter a valid number of stones (1-100).';
        return;
    }

    // Determine the winner
    if (stones === 4) {
        document.getElementById('result').innerText = "Your friend won the game.";
    } else {
        document.getElementById('result').innerText = "You won the game.";
    }
}
