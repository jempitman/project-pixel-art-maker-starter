// Setting default color
const defaultColor = "#000000";

//Event listener to set up Initialization once page has loaded
window.addEventListener("load", startup, false);

// Function to set default color and start eventListener for colorPicker
function startup(){
  let colorPicker = document.getElementById("colorPicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("change", setColor, false);
}

//Setting new cell color based on user dismissing in colorPicker dialogue
function setColor(event){
  //fetch current color value of colorPicker
  let cellColor = document.getElementById("colorPicker").value;
  //setting cellColor value based on new user selection in colorPicker
  event.target.value = cellColor;
}

// Select size input
function selectSizeInput(){
  // fetch inputHeight from DOM
  let height = parseInt(document.getElementById("inputHeight").value);

  // fetch inputWidth from DOM
  let width = parseInt(document.getElementById("inputWidth").value);

//makeGrid only if valid input has been received
  if (validInput(width) && validInput(height)){
    makeGrid(height, width);
  }else {
    alert("Invalid input, height/width must be between 1 and 100");
  }

}

// grid size check to heights/widths are >0 and <100 to prevent crashing
function validInput(value){
  return ((value >= 1) && (value <= 100));
}

// Build grid based on height and width inputs
function makeGrid(height, width){

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
