function generatePatterns() {
    generatePatternA();
    generatePatternB();
    generatePatternC();
}

function generatePatternA() {
    let output = '';
    for (let i = 1; i <= 4; i++) {
        output += (i + ' ').repeat(i).trim() + '\n';
    }
    document.getElementById('patternA').innerText = output.trim();
}

function generatePatternB() {
    let output = '';
    let number = 2;
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < i; j++) {
            output += number + ' ';
            number++;
        }
        output += '\n';
    }
    document.getElementById('patternB').innerText = output.trim();
}

function generatePatternC() {
    let output = '';
    for (let i = 5; i >= 1; i--) {
        output += '* '.repeat(i).trim() + '\n';
    }
    document.getElementById('patternC').innerText = output.trim();
}
