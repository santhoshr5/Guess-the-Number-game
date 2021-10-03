let userInput = document.getElementById('userInput')
let gameResult = document.getElementById('gameResult')


let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)

function checkGuess() {
    let guessNumber = parseInt(userInput.value)
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too High ,try again"
        gameResult.style.color = "orange"
        gameResult.style.fontWeight = "bold"
        gameResult.style.backgroundColor = ""
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too Low ,try again"
        gameResult.style.color = "orange"
        gameResult.style.fontWeight = "bold"
        gameResult.style.backgroundColor = ""
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations,your the Winner"
        gameResult.style.color = "green"
        gameResult.style.fontWeight = "bold"
        gameResult.style.backgroundColor = ""
    } else {
        gameResult.textContent = "Provide a valid integer input"
        gameResult.style.color = "red"
        gameResult.style.fontWeight = "bold"
        gameResult.style.backgroundColor = ""
    }

}