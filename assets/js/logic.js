const startButton = document.getElementById('start')
const questionsContainer = document.getElementById('questions')
const endScreen = document.getElementById('end-screen')
const timeDisplay = document.getElementById('time')
const scoreDisplay = document.getElementById('final-score')

let currentQuestion = 0
let time = 75

startButton.addEventListener('click', function() {
  document.getElementById('start-screen').classList.add('hide')
  loadQuestion(currentQuestion)
  questionsContainer.classList.remove('hide')
  timeDisplay.innerHTML = time
  setInterval(function() {
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
      currentQuestion++
      if(currentQuestion < questions.length) {
        loadQuestion(currentQuestion)
      } else {
        questionsContainer.classList.add('hide')
        endScreen.classList.remove('hide')
      }
    })
    questionsContainer.children[1].appendChild(optionElement)
  }  
}