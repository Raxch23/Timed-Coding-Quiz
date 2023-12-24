const highscoresDisplay = document.getElementById('highscores')

const clearHighscoresButton = document.getElementById('clear')
clearHighscoresButton.addEventListener('click', function() {
  highscoresDisplay.innerHTML = ''
})

const newHighscore = document.createElement('div')
newHighscore.innerHTML = new URL(window.location).searchParams.get('name')
highscoresDisplay.appendChild(newHighscore)