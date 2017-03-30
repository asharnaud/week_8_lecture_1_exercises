function currentTime () {
  var today = new Date()
   document.getElementById('time').innerHTML = today.toLocaleTimeString()
}

var everySecond = 1 * 1000

var clock = setInterval(currentTime, everySecond)
