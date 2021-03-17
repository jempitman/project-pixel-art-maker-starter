// Select color input
// Select size input
function selectSizeInput(){
  // fetch inputHeight from DOM
  let height = parseInt(document.getElementById("inputHeight").value);
  console.log("Required height is " + height);

  // fetch inputWidth from DOM
  let width = parseInt(document.getElementById("inputWidth").value);
  console.log("Required width is " + width);

  return [height, width];

}
// When size is submitted by the user, call makeGrid()

function makeGrid() {

  let size = selectSizeInput();
  let height = size[0];
  let width = size[1];

  //Capture pixelCanvas from DOM
  let table = document.getElementById("pixelCanvas");

  //Create tableBody element
  let tableBody = document.createElement("tableBody");

  // outer for loop to create rows
  for (let i = 0; i < height; i++){

    //create table row object
    let row = document.createElement("tr");

    //create data object cells (<td>) and append to end
    //of table row
    for (let j = 0; j < width; j++){
      let cell = document.createElement("td");
      let cellText = document.createTextNode("cell in row " + i + ", column "+ j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //add the row to the end of the table
    tableBody.appendChild(row);
  }

  //link the tableBody to pixelCanvas
  table.appendChild(tableBody);

}
