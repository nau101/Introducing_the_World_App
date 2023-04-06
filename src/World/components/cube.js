import { BoxGeometry, Mesh, MeshStandardMaterial,MeshToonMaterial,MeshMatcapMaterial } from 'three';

function createCube(color, x){
    const geometry = new BoxGeometry(0.8,0.8,0.8);
    const material = new Mesh({color});
    const cube = new Mesh(geometry,material);
    cube.position.x = x;
    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;

}


export {createCube};
