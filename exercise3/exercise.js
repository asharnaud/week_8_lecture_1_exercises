function removeA () {
  var liEl = document.querySelectorAll('li')
  for (var i = 0; i < liEl.length; i++) {
    if (liEl[i].textContent.indexOf('a') !== -1) {
      liEl[i].remove()
    }
    liEl[i].title = liEl[i].textContent
  }
}

removeA()
