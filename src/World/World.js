import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
//import { createIco } from './components/icoSahedron.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

//    const icoSa = createIco();
    const cubes = [
        createCube(0x44aa88,  0),
        createCube(0x8844aa, -2),
        createCube(0xaa8844,  2),
      ];
    
    cubes.forEach((cube) => {
        scene.add(cube);
    });
    
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
