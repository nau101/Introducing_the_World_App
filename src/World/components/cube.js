import { BoxGeometry,MathUtils,TextureLoader,  Mesh, MeshStandardMaterial,MeshToonMaterial,MeshMatcapMaterial, MeshBasicMaterial } from 'three';

function createMaterial(color) {
  // create a "standard" material
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png');
  const material = new MeshStandardMaterial({map: texture,  bumpMap: texture});
  material.transparent = true;
  return material;
  }


function createCube(color,x,meshMaterial){
    const geometry = new BoxGeometry(0.8,0.8,0.8);
    const material = createMaterial(color);
    const cube = new Mesh(geometry,material);

    cube.rotation.set(-0.5, -0.9, 0.8);
    const radiansPerSecond = MathUtils.degToRad(30);
    cube.position.x = x;

    const half = window.innerWidth/2;
    let currentPos = cube.position.x;

    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
      
        if (currentPos < half) { 
            cube.position.x += delta * 1;
          } 
        else if(currentPos >= half){
            cube.position.x -= delta * 1; 
            if(currentPos > half*2){
                cube.position.set(x,0,0);
                currentPos = 0;   
            }
          }
        else {}

          currentPos++;
        };
       
    return cube;

}


export {createCube};
