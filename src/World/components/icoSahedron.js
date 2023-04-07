import { IcosahedronGeometry, Mesh, MeshBasicMaterial,MeshStandardMaterial} from 'three';

function createIco(){
    const geometry = new IcosahedronGeometry(0.9,0);
    const material = new MeshStandardMaterial({color: 'lightgreen'});
    const icoSa = new Mesh(geometry,material);
    icoSa.position.x = 2;
    return icoSa;
}

export{createIco};