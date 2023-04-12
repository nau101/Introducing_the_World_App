import { BoxGeometry,MathUtils, Mesh, MeshStandardMaterial,MeshToonMaterial,MeshMatcapMaterial, MeshBasicMaterial } from 'three';


function createCube(color ,x,meshMaterial){
    const geometry = new BoxGeometry(0.5,0.5,0.5);
    const material = new meshMaterial({color});
    const cube = new Mesh(geometry,material);

    cube.rotation.set(-0.3, -0.1, 0.8);
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
