import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube(color, x){
    const geometry = new BoxGeometry(1.5,1.5,1.5);
    const material = new MeshBasicMaterial({color});
    const cube = new Mesh(geometry,material);
    cube.position.x = x;
    return cube;

}


export {createCube};
