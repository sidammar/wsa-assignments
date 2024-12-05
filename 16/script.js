function generateArmstrongNumbers() {
    let result = "Armstrong Numbers between 100 and 999:<br>";

    // Loop through numbers from 100 to 999
    for (let num = 100; num <= 999; num++) {
        // Extract hundreds, tens, and units place digits
        let hundreds = Math.floor(num / 100);
        let tens = Math.floor((num % 100) / 10);
        let units = num % 10;

        // Calculate the sum of cubes of each digit
        let sumOfCubes = (hundreds ** 3) + (tens ** 3) + (units ** 3);

        // Check if the number is an Armstrong number
        if (sumOfCubes === num) {
            result += num + "<br>";
        }
    }

    // Display the result
    document.getElementById("output").innerHTML = result;
}
