// Select color input
/*
function selectColor() {
  document.getElementById("colorPicker").addEventListener("change", onChangeColor);

}
//capture value
//var color = document.getElementById("colorPicker").value;
//document.getElementById("colorPicker").addEventListener("change", onChangeColor);

function onChangeColor(){
  console.log(document.getElementById("colorPicker").value);
}

*/
// Select size input
function selectSizeInput(){

  // fetch inputHeight from DOM
  let height = parseInt(document.getElementById("inputHeight").value);
  //console.log("Required height is " + height);

  // fetch inputWidth from DOM
  let width = parseInt(document.getElementById("inputWidth").value);
  //console.log("Required width is " + width);

  makeGrid(height, width);

}

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {

  //Capture pixelCanvas from DOM
  let table = document.getElementById("pixelCanvas");

  //Initializing table for dynamic build
  table.innerHTML = "";

  // outer for loop to create rows
  for (let i = 0; i < height; i++){

    //create table row object
    let row = document.createElement("tr");

    for (let j = 0; j < width; j++){
      //create data object cells (columns of <td>)
      //and append to end of table row
      let cell = document.createElement("td");
      //let cellListener = cell.addEventListener('click', clickHandler);
      let cellListener = cell.addEventListener('click', function (e){
        var td = e.target;
        td.style.backgroundColor = 'red';
      });
      //let cellText = document.createTextNode("cell in row " + i + ", column "+ j);
    //  cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //add the row to the end of the table
    table.appendChild(row);
  }

}

//function clickHandler(){
  //console.log("clicked");
  //var el =

//}
