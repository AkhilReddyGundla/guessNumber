let randomNumber = parseInt(Math.random()*100 + 1) 
const inputNum = document.querySelector("#guess")
const submit = document.querySelector("#submit-button")
const prevGuessess = document.querySelector(".lastGuesses")
const remGuessess = document.querySelector(".remGuesses")
const result = document.querySelector(".finalResult")
const startOver = document.querySelector(".result")


console.log(randomNumber)

const p = document.createElement('p')

let guessess = []
let playGame = true
let guessessRem = 9


if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const userInput =parseInt(inputNum.value)
        inputNum.value= ''
        validateInput(userInput);
    })
}

function validateInput(userInput){
    if(isNaN(userInput)){
        alert("enter valid number")
    }else if(userInput > 100){
        alert("enter number less than 100")
    }else if(userInput < 1){
        alert("enter number greater than 0")
    }else{
        if(guessessRem < 1){
            displayGuess(userInput)
            displayMessage(`Game over , Better luck for next time`)
            displayMessage(`random number is ${randomNumber}`)
            endGame()
        }else{
            guessess.push(userInput.val)
            checkGuess(userInput)
        }
    }
}

function checkGuess(userInput){
   if(userInput === randomNumber){
        displayMessage(`your guess is right ${randomNumber}`)
        result.style.color='green';
        endGame()
   }else if(userInput< randomNumber){
        displayMessage("Number is TOOO low")
    }else{
        displayMessage("Number is TOOO High")
    }
    displayGuess(userInput)

}
function displayGuess(userInput){
    guessessRem--;
    
    prevGuessess.innerHTML += ` ${userInput}`
    remGuessess.innerHTML = guessessRem
}

function displayMessage(message){
    result.innerHTML = `${message}`
}

function endGame(){
    inputNum.value = ''
    inputNum.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h3 id="newGame">Start new Game</h3>`
    p.style.color = "green"
    p.style.textAlign = "center"
    p.style.fontSize = '1rem'
    p.style.width = "100%"
    p.style.cursor = "pointer"
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
function newGame(){
    const newBtn = document.createElement("button")
    p.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        guessess = []
        guessessRem = 10
        remGuessess.innerHTML = 10
        prevGuessess.innerHTML = ""
        result.innerHTML = ''
        inputNum.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
        
    })
}
