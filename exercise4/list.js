function addItem () {
    // get the text typed into the input field
  var text = document.getElementById('item').value

    // todo: create a new list item and append it to the ordered list
  var liEl = document.createElement('li')
  liEl.textContent = text
  document.getElementById('list').appendChild(liEl)
    // clear the text in the input field
  document.getElementById('item').value = ''
}
