let userScore = 0;
let compScore = 0;

//Score Board
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');

//Results
const result_div = document.getElementById('result');

//Choices
const compChoice_span = document.querySelector('.comp-choice-image');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

//Reset Game
const reset_div = document.getElementById('button')

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors']
    index = Math.floor(Math.random()*3);
    return choices[index];
}

//Capitalize
function title(string) {return `${string[0].toUpperCase()}${string.slice(1)}`;}

function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
    result_div.innerHTML = `${title(userChoice)} beats ${title(compChoice)}! <span class="animated fadeIn" id="green-glow">You Win!</span>`;
}

function lose(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice)
    compScore++;
    compScore_span.innerHTML = compScore;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
    result_div.innerHTML = `${title(compChoice)} beats ${title(userChoice)}! <spanc class="animated fadeIn" id="red-glow">You Lose!</span>`;
}

function draw(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 500);
    result_div.innerHTML = `${title(compChoice)} and ${title(userChoice)}! <span class="animated fadeIn" id="yellow-glow">I'ts a draw!</span>`;
}

function getCompChoiceImage(compChoice) {
    switch(compChoice) {
        case 'rock':
            return "<img src='images/rock.png'>"
        
        case 'paper':
            return "<img src='images/paper.png'>"

        case 'scissors':
            return "<img src='images/scissors.png'>"
    }
}

function game(userChoice) {
    const compChoice = getCompChoice();
    compChoice_span.innerHTML = getCompChoiceImage(compChoice)

    switch(userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);
            break;
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, compChoice);
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, compChoice);
            break;
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    compChoice_span.innerHTML = ""
    result_div.innerHTML = 'Make your move!'
}

function main() {
    rock_div.addEventListener('click', () => game('rock'))
    paper_div.addEventListener('click', () => game('paper'))
    scissors_div.addEventListener('click', () => game('scissors'))
    reset_div.addEventListener('click', () => resetGame())
}

main();