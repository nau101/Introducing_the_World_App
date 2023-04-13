import { BoxGeometry,MathUtils,TextureLoader,  Mesh, MeshStandardMaterial,MeshToonMaterial,MeshMatcapMaterial, MeshBasicMaterial } from 'three';

function createMaterial() {
  // create a "standard" material
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png');
  const material = new MeshStandardMaterial({map: texture});
  material.transparent = true;
  return material;
  }


function createCube(){
    const geometry = new BoxGeometry(0.8,0.8,0.8);
    const material = createMaterial();
    const cube = new Mesh(geometry,material);

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.rotation.set(-0.5, -0.9, 0.8);
    
    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        };
       
    return cube;

}


export {createCube};
