function checkCircle() {
    const moves = document.getElementById('moves').value.trim();
    
    let x = 0; // Horizontal position
    let y = 0; // Vertical position

    // Iterate through the move sequence
    for (let move of moves) {
        switch (move) {
            case 'U':
                y++; // Move up
                break;
            case 'D':
                y--; // Move down
                break;
            case 'L':
                x--; // Move left
                break;
            case 'R':
                x++; // Move right
                break;
            default:
                // If an invalid character is found, ignore it
                break;
        }
    }

    // Check if the robot is back to the origin (0, 0)
    const isCircle = (x === 0 && y === 0);
    document.getElementById('result').innerText = isCircle ? "true" : "false";
}
