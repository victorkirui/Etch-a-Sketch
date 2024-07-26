const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

//This function creates grids of 16x16. creates the number of grids added by user
function createGrids(num) {
  let divsArray = [];
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  for (let i = 0; i < screenWidth; i++) {
    let div = document.createElement("div");
    div.style.width = `${num}px`;
    div.style.height = `${num}px`;
    div.setAttribute("class", "grid");
    divsArray.push(div);
  }

  divsArray.forEach((div) => {
    container.appendChild(div);
  });

  //Selecting the grids using it's className
  const grids = document.querySelectorAll(".grid");

  addHoverEffects(grids);
}

//Function that listens for user input and capture number entered
btn.addEventListener("click", () => {
  const number = window.prompt("Enter a number between 1 and 100");
  if (number > 0 && number <= 100) {
    createGrids(number);
  }
});

// // Adding hover effect on the grids

function addHoverEffects(grids) {
  let gridsArray = Array.from(grids);

  gridsArray.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.background = `rgb(255,36,${x})`;
      // grid.style.background = "hsl(89, 24%, 69%)";
    });

    grid.addEventListener("mouseleave", () => {
      grid.style.background = "none";
    });
  });
}
