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
        opac = opac+0.1
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