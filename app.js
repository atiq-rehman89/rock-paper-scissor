const compdisplay = document.getElementById('comp-choice')
const userdisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const choiceBtn = document.querySelectorAll('button')
let userChoices;
let compChoice;
let result;
let btnchoc = [];
btnchoc.push(choiceBtn[0], choiceBtn[1], choiceBtn[2]);

//main function
let newbtn = btnchoc.map(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userChoices = e.target.id;
    userdisplay.innerHTML = userChoices;
    generateCompChoice();
    generateResult();
}));

// function to generate computer choice
function generateCompChoice() {
    let randomNum = Math.floor(Math.random() * btnchoc.length) + 1
    console.log(randomNum)
    if (randomNum == 1) {
        compChoice = 'rock'
    } else if (randomNum == 2) {
        compChoice = 'paper'
    } else {
        compChoice = 'scissor'
    }
    compdisplay.innerHTML = compChoice
}

//function to generate result
function generateResult() {
    if (userChoices == compChoice) {
        result = 'its a Draw!'
    }
    if (userChoices == 'rock' && compChoice == 'paper') {
        result = 'You Win! Congrates....'
    }
    if (userChoices == 'paper' && compChoice == 'rock') {
        result = 'You Lose! Sorry Better luck Next Time....'
    }
    if (userChoices == 'scissor' && compChoice == 'rock') {
        result = 'You Win! Marvelous....'
    }
    if (userChoices == 'rock' && compChoice == 'scissor') {
        result = 'You Lose! Sorry Better Luck Next Time....'
    }
    if (userChoices == 'scissor' && compChoice == 'paper') {
        result = 'You Win! Weldone....'
    } if (userChoices == 'paper' && compChoice == 'scissor') {
        result = 'You Lose! Sorry Try Again....'
    }
    resultdisplay.innerHTML = result
}




































// console.log(diskl)
// const number = new Array()

// const diskl = [];
// for (let i = 0; i < choiceBtn.length; i++) {
//     diskl.push(choiceBtn[i].s)
//     console.log(diskl)

// }