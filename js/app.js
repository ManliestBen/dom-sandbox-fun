let colors = ['cornflowerblue', 'red', 'tan', 'fuchsia', 'blanchedalmond', 'mediumspringgreen', 'rebeccapurple','thistle','papayawhip', 'lime']

let colorSquareContainer = document.querySelector('.container')

console.log(colorSquareContainer);

// loop through the colors array
colors.forEach(color => {
  // create a div
  let newDiv = document.createElement('div')
  newDiv.style.backgroundColor = color
  // assign the style property of the div to color the background
  newDiv.className = 'color-square'
  // append div to a container element
  colorSquareContainer.appendChild(newDiv)
})