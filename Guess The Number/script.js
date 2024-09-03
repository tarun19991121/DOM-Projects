let Num = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')

const prevGuesses = document.querySelector('.prevGuesses')

const remaining = document.querySelector('.remaining')

const lowOrHigh = document.querySelector('.lowOrHigh')

const results = document.querySelector('.results')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter A Valid Number")
    }
    else if(guess < 1 || guess > 100){
        alert("Please Enter A Number Only Between 1 and 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess == 10){
            displayGuess(guess)
            displayMsg(`Game Over, Random Number was ${Num}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === Num){
        displayMsg(`Bravo!!! You guessed it right`)
        endGame()
    }
    else if(guess < Num){
        displayMsg(`Boo!! Number is too LOW`)
    }
    else if(guess > Num){
        displayMsg(`Boo!! Number is too HIGH`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    prevGuesses.innerHTML+=`| ${guess} | `
    numGuess = numGuess+1
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(message){
lowOrHigh.innerHTML = `<h2>${message}<h2/>`
}

function endGame(){
   userInput.value=""
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
   results.appendChild(p)
   playGame=false
   newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        Num = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        prevGuesses.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        results.removeChild(p)
        playGame=true
    })
}