const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

//This function creates grids of 16x16. creates the number of grids inputed by user
function createGrids(num) {
  let divsArr = [];
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  for (let i = 0; i < screenWidth; i++) {
    let div = document.createElement("div");
    div.style.width = `${num}px`;
    div.style.height = `${num}px`;
    div.setAttribute("class", "grid");
    divsArr.push(div);
  }

  divsArr.forEach((div) => {
    container.appendChild(div);
  });

  //Selecting the grids using it's classname
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
      grid.style.background = " red";
    });
  });
}
