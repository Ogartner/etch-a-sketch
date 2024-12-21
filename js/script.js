// GLOBAL
const container = document.querySelector('.container');
const btnThickness = document.querySelector('.btn-thick');
const btnRandomColor = document.querySelector('.btn-random-color');
const btnOpacity = document.querySelector('.btn-opacity');
const btnDefault = document.querySelector('.btn-default-mode');
let userInput = 30;
let randomColor;

// Create grid and add grid to container
const defaultSquare = () => {
  const square = document.createElement('div');
  square.style.flex = 1;
  square.style.backgroundColor = '#fff';
  return square;
};

// Create a row of 16 grids.
const createGridRow = () => {
  const gridRow = document.createElement('div');
  gridRow.style.display = 'flex';
  gridRow.style.flex = 1;
  for (let i = 0; i < userInput; i++) {
    const square = defaultSquare();
    gridRow.appendChild(square);
  }
  return gridRow;
};

// create 16 grid rows.
const gridBox = () => {
  for (let i = 0; i < userInput; i++) {
    const gridRow = createGridRow();
    container.appendChild(gridRow);
  }
};

// Choose between 10 - 100 (Level of thickness).
const thickness = () => {
  btnThickness.addEventListener('click', () => {
    while (true) {
      userInput = Number(
        prompt('Type a number between 10 - 100 (10=Very Thick, 100=Very Thin):')
      );
      if (userInput >= 10 && userInput <= 100) {
        reset();
        gridBox();
        break;
      } else {
        alert('Only numbers between 10 - 100 are valid!');
      }
    }
  });
};

// Default color
const defaultColor = () => {
  container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#555';
  });
};

// Random colors
const randomColors = () => {
  const randomNumber = Math.floor(Math.random() * 999999 + 1);
  randomColor = `#${randomNumber}`;
  return randomColor;
};

// Default mode when site loads up.
const defaultOnInit = () => {
  gridBox();
  defaultColor();
};

// Reset to default mode on click
const defaultMode = () => {
  btnDefault.addEventListener('click', () => {
    userInput = 30;
    reset();
    gridBox();
    defaultColor();
  });
};

// Random Color Mode
const randomColorMode = () => {
  btnRandomColor.addEventListener('click', () => {
    reset();
    gridBox();
    container.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = randomColors();
    });
  });
};

// Reset the grid-box.
const reset = () => {
  while (container.firstChild) {
    container.firstChild.remove();
  }
};

const init = () => {
  defaultOnInit();

  thickness();
  randomColorMode();

  defaultMode();
};

init();
