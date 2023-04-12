import { MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, MeshToonMaterial, MathUtils} from 'three';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createIco } from './components/icoSahedron.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;
let loop;

class World {
  constructor(container) {

    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    light = createLights();
    loop = new Loop(camera,scene,renderer);
    container.append(renderer.domElement);

    // Challange exercises

    /* const meshb = createIco();
    const cube1 = createCube('purple',0, MeshPhongMaterial);
    cube1.rotation.x = 45*Math.PI/180;
    cube1.scale.set(.5,.5,.5);
    meshb.scale.set(1.2,1.2,1.2);
    cube1.add(meshb);
    
    scene.add(cube1);
    */
    const cubes = [
        createCube(0x44aa88, 0 , MeshStandardMaterial),
        createCube(0x8844aa, -1, MeshToonMaterial),
        createCube(0xaa8844,  1, MeshBasicMaterial),
      ];
    
    cubes.forEach((cube) => {
        scene.add(cube);
        loop.updatables.push(cube);
    });

    // camera zoom out / in
    //loop.updatables.push(camera);
    scene.add(light);
    const resizer = new Resizer(container, camera, renderer);
   
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
    }

  start(){
    loop.start();
      }
      
  stop(){
    loop.stop();
    }
  tick(){};
}

export { World };
