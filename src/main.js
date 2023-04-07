import {World} from  './World/World.js';
//main fucntion


/*  Onclick show container 
  function showDiv() {
    var div = document.querySelector("#scene-container");
    var button = document.querySelector("button");
    if (div.style.display === "none") {
        div.style.display = "block";
        button.style.display = "none";

    } else {
      div.style.display = "none";
      button.style.display = "block";
    }
  }
 */ 
 
function main() {
  const container = document.querySelector("#scene-container");

  // 1. Create instance of the World app
  const world = new World(container);
  
  // 2. Render the scene
  world.render();
  
  /* Renders container on button click
   container.style.display = "none";

  //add an event listener to the button element
   const startButton = document.querySelector("button");
   startButton.addEventListener("click", showDiv);
   */
}
  
  
  main();









