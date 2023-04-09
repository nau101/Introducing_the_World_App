import { BoxGeometry,MathUtils , Mesh, MeshStandardMaterial,MeshToonMaterial,MeshMatcapMaterial, MeshBasicMaterial } from 'three';



function createCube(color, x, meshMaterial){
    const geometry = new BoxGeometry(0.8,0.8,0.8);
    const material = new meshMaterial({color});
    const cube = new Mesh(geometry,material);

    cube.position.x = x;
    cube.rotation.set(-0.3, -0.1, 0.8);
    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) =>{
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;

}


export {createCube};
