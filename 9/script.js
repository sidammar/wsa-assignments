function calculateGrade() {
    // Get the marks from the input fields
    const marks1 = parseFloat(document.getElementById('subject1').value);
    const marks2 = parseFloat(document.getElementById('subject2').value);
    const marks3 = parseFloat(document.getElementById('subject3').value);

    // Check if all marks are valid numbers
    if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3)) {
        document.getElementById('result').innerText = 'Please enter valid marks for all subjects.';
        return;
    }

    // Calculate the average marks
    const average = (marks1 + marks2 + marks3) / 3;

    // Determine the grade based on the average
    let grade;
    switch (true) {
        case (average >= 90):
            grade = 'Ex';
            break;
        case (average >= 80):
            grade = 'A+';
            break;
        case (average >= 70):
            grade = 'A';
            break;
        case (average >= 60):
            grade = 'B+';
            break;
        default:
            grade = 'Fail';
            break;
    }

    // Display the result
    document.getElementById('result').innerText = `Average Marks: ${average.toFixed(2)} - Grade: ${grade}`;
}
