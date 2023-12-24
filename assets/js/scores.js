const highscoresDisplay = document.getElementById('highscores')

const clearHighscoresButton = document.getElementById('clear')
clearHighscoresButton.addEventListener('click', function() {
  highscoresDisplay.innerHTML = ''
})