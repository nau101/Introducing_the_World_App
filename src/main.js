import {World} from  './World/World.js';
//main fucntion
function main(){
    //reference to the container element
    const container = document.querySelector('#scene-container');

    //1. Create instance of the World app
    const world = new World(container);

    //2. Render the scene
    world.render();

}

main();
