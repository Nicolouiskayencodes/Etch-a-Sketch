let container = document.querySelector("#container");

//Form a grid nxn
function makeGrid(n) {
  for (let j=0; j<n; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i=0; i<n; i++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      let opac = 0
      pixel.addEventListener("mouseover", () =>{
        let color = Math.floor(Math.random()*10);
        if (color === 0) {
          pixel.style.backgroundColor = "black";
        } else if (color === 1) {
          pixel.style.backgroundColor = "red";
        } else if (color === 2) {
          pixel.style.backgroundColor = "blue";
        } else if (color === 3) {
          pixel.style.backgroundColor = "yellow";
        } else if (color === 4) {
          pixel.style.backgroundColor = "purple";
        } else if (color === 5) {
          pixel.style.backgroundColor = "green";
        } else if (color === 6) {
          pixel.style.backgroundColor = "orange";
        } else if (color === 7) {
          pixel.style.backgroundColor = "pink";
        } else if (color === 8) {
          pixel.style.backgroundColor = "cyan";
        } else if (color === 9) {
          pixel.style.backgroundColor = "brown";
        }
        opac = opac+0.1;
        pixel.style.opacity = opac;
      });
      row.appendChild(pixel);
    }
    container.appendChild(row);
    console.log(j);
  }
}



makeGrid(16);

//Change grid size

let button = document.querySelector("button");

button.addEventListener("click", () => {
  rows = prompt("How many rows and columns?");
  if (rows <=100 && rows > 1) {
    container.replaceChildren("")
    makeGrid(rows);
  } else {
    alert("You must choose a number less than or equal to 100")
  }
})