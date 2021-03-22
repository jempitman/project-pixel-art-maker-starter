// Setting default color
const defaultColor = "#000000";

//
window.addEventListener("load", startup, false);

function startup(){
  let colorPick = document.getElementById("colorPicker");
  colorPick.value = defaultColor;
  colorPick.addEventListener("change", setColor, false);
}

//Setting new pixel color based on change event in colorPicker
function setColor(event){
  //fetch color value of colorPicker
  let cellColor = document.getElementById("colorPicker").value;
  //setting cellColor value based on user selection in colorPicker
  event.target.value = cellColor;
}

// Select size input
function selectSizeInput(){
  // fetch inputHeight from DOM
  let height = parseInt(document.getElementById("inputHeight").value);
  // fetch inputWidth from DOM
  let width = parseInt(document.getElementById("inputWidth").value);

  // grid size check to heights/widths are >0 and <100 to prevent crashing
  if ((height < 0) || (height > 100)){
    alert("Invalid input, height must be between 1 and 100");
  } else if ((width < 0) || (width > 100)) {
    alert("Invalid input, width must be between 1 and 100");
  } else{
    makeGrid(height, width);
  }
}

// Build grid based on height and width inputs
function makeGrid(height, width) {

  //Capture pixelCanvas from DOM
  let table = document.getElementById("pixelCanvas");

  //Initializing table for dynamic build
  table.innerHTML = '';

  // outer for loop to create rows
  for (let i = 0; i < height; i++){

    //create table row object
    let row = document.createElement("tr");

    for (let j = 0; j < width; j++){
      //create data object cells (columns of <td>)
      //and append to end of table row
      let cell = document.createElement("td");
      //create listeners for each td element
      let cellListener = cell.addEventListener('click', colorCell, false);
      row.appendChild(cell);
    }
    //add the row to the end of the table
    table.appendChild(row);
  }

}

//function to color cells, based on click event listener
function colorCell(event){
  // store selected cell as coloredCell variable
  let coloredCell = event.target;
  // fetch current color value of colorPicker and store
  //as cellColor variable
  let cellColor = document.getElementById("colorPicker").value;
  //color cell with cellColor variable
  coloredCell.style.backgroundColor = cellColor;

}
