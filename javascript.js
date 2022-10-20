const container = document.getElementById("container");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
  };
};
makeRows(16, 16);

// restart //
const resetBtn = document.querySelector('button');
resetBtn.addEventListener("click", clear);
function clear() {
  const allDivs = document.querySelectorAll(".grid-item");
  allDivs.forEach((allDivs) => {
    allDivs.style.backgroundColor = "rgba(255, 255, 255)";
  });
}


// drawing //
const grid = document.getElementById("container");

let colorTrigger = false;

container.addEventListener('mousedown', () => {      
  colorTrigger = true;  
});   

container.addEventListener('mouseup', () => {      
  colorTrigger = false;  
});

function draw(color){                                           //draw function with current color
  let coloredRowElements = document.querySelectorAll('.grid-item'); //Create list of grid elements
  
  for (let coloredRowElement of coloredRowElements){
      
      coloredRowElement.addEventListener('mousedown', () => {
          coloredRowElement.style.backgroundColor = color;             
      })  
      
      coloredRowElement.addEventListener('mousemove', () => {
          if (colorTrigger)
          coloredRowElement.style.backgroundColor = color;                 
      })
  }            
}

color = document.getElementById("color").value; 
draw(color)