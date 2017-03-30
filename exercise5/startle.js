function booReaction () {
  var react = document.getElementById('reaction')
  react.src = 'https://media.giphy.com/media/fyg9iUe1Atm8/giphy.gif'
  console.log(react)
}

var everyThreeSeconds = 3 * 1000

function startle () {
  // todo: write code that produces a delayed reaction.
  setTimeout(booReaction, everyThreeSeconds)
}
