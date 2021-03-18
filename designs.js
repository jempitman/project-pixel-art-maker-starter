// Select color input
// Select size input
function selectSizeInput(){
  // fetch inputHeight from DOM
  let height = parseInt(document.getElementById("inputHeight").value);
  //console.log("Required height is " + height);

  // fetch inputWidth from DOM
  let width = parseInt(document.getElementById("inputWidth").value);
  //console.log("Required width is " + width);

  return [height, width];

}
// When size is submitted by the user, call makeGrid()

function makeGrid() {

  // call selectSizeInput function to fetch Height
  // and Width measurements from input dialogs
  let size = selectSizeInput();

  //extract height and width measurements
  let height = size[0];
  let width = size[1];

  //Capture pixelCanvas from DOM
  let table = document.getElementById("pixelCanvas");

  // outer for loop to create rows
  for (let i = 0; i < height; i++){

    // checking rows are being created correctly
    //console.log("Creating row " + i);

    //create table row object
    let row = document.createElement("tr");

    for (let j = 0; j < width; j++){

      //checking columns are being created correctly
      //console.log("Creating column " + j)

      //create data object cells (columns of <td>)
      //and append to end of table row
      let cell = document.createElement("td");
      //let cellText = document.createTextNode("cell in row " + i + ", column "+ j);
      //cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //add the row to the end of the table
    table.appendChild(row);
  }

}
