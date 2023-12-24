const startButton = document.getElementById('start')
const questionsContainer = document.getElementById('questions')
const endScreen = document.getElementById('end-screen')
const timeDisplay = document.getElementById('time')
const scoreDisplay = document.getElementById('final-score')

let currentQuestion = 0
let time = 75
let timer = undefined

const resultDisplay = document.createElement('div')
questionsContainer.appendChild(resultDisplay)

startButton.addEventListener('click', function() {
  document.getElementById('start-screen').classList.add('hide')
  loadQuestion(currentQuestion)
  questionsContainer.classList.remove('hide')
  timeDisplay.innerHTML = time
  timer = setInterval(function() {
    time--
    timeDisplay.innerHTML = time
  }, 1000)
})

function loadQuestion(currentQuestion) {
  questionsContainer.children[0].innerHTML = questions[currentQuestion].title
  questionsContainer.children[1].innerHTML = ''
  for (const [optionIndex, option] of questions[currentQuestion].choices.entries()) {
    const optionElement = document.createElement('button')
    optionElement.innerHTML = (optionIndex + 1) + '. ' + option
    optionElement.addEventListener('click', function() {
      if(optionIndex == questions[currentQuestion].answer) {
        resultDisplay.innerHTML = 'Correct!'
      } else {
        resultDisplay.innerHTML = 'Wrong!'
        time -= 10
        timeDisplay.innerHTML = time
      }
      currentQuestion++
      if(currentQuestion < questions.length) {
        loadQuestion(currentQuestion)
      } else {
        questionsContainer.classList.add('hide')
        endScreen.classList.remove('hide')
        clearInterval(timer)
        scoreDisplay.innerHTML = time
      }
    })
    questionsContainer.children[1].appendChild(optionElement)
  }  
}

const submitScore = document.getElementById('submit')
submitScore.addEventListener('click', function() {
  window.location.href = "highscores.html?name=" + document.getElementById('initials').value;
})