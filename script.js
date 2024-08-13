let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    
    attempts++;
    
    if (userGuess === secretNumber) {
        resultElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resultElement.style.color = 'green';
        attemptsElement.textContent = '';
    } else if (userGuess < secretNumber) {
        resultElement.textContent = 'Too low! Try again.';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'Too high! Try again.';
        resultElement.style.color = 'red';
    }
    
    attemptsElement.textContent = `Attempts: ${attempts}`;
}

