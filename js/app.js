/*-------------------- Constants --------------------*/
let colors = ['cornflowerblue', 'red', 'tan', 'fuchsia', 'blanchedalmond', 'mediumspringgreen', 'rebeccapurple','thistle','papayawhip', 'lime']



/*----------------- Variables (state) -------------*/
let selectedColor
let lastClicked


/*--------- Cached Element References ------------*/
let colorSquareContainer = document.getElementById('square-container')
let selectedColorSquare = document.getElementById('selected-color')
let resetBtn = document.querySelector('button')


/*---------- Event Listeners -----------------*/
colorSquareContainer.addEventListener('click', handleClickColor)
colorSquareContainer.addEventListener('mouseover', handleMouseOver)
colorSquareContainer.addEventListener('mouseout', handleMouseOut)
resetBtn.addEventListener('click', init)

/*----------------- Functions -------------------*/

init()


function handleClickColor(evt) {
  // determine which square was clicked
  // get the color from that square 
  // set selectedColor to that color
  console.log('handle click running')
  selectedColor = evt.target.style.backgroundColor
  lastClicked = evt.target.style.backgroundColor
  render()
}

function handleMouseOver(evt) {
  selectedColor = evt.target.style.backgroundColor
  render()
}

function handleMouseOut(evt) {
  selectedColor = lastClicked
  render()
}


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

function init() {
  // setting state variables to initial state
  selectedColor = 'cornflowerblue'
  lastClicked = 'cornflowerblue'
  render()
}

function render() {
  // display updated state
  selectedColorSquare.style.backgroundColor = selectedColor
  selectedColorSquare.innerText = selectedColor
}
