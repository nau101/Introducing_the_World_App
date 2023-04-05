import { IcosahedronGeometry, Mesh, MeshBasicMaterial} from 'three';

function createIco(){
    const geometry = new IcosahedronGeometry(0.9,0);
    const material = new MeshBasicMaterial({color: 'lightgreen'});
    const icoSa = new Mesh(geometry,material);
    
    return icoSa;
}

export{createIco};