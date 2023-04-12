import { PerspectiveCamera } from 'three';

var frameCount = 0; 
function createCamera(){
    const camera = new PerspectiveCamera(
        35, // fov 
        1, //aspect ratio
        0.1, //near clipping
        100, // far clipping
    );
   
    camera.position.set(0,0,10);
    camera.tick = (delta) => {
        var pos = frameCount % 10;
        if (frameCount < 600) {
            camera.position.z += delta * pos;
        } else if (frameCount >= 600 && frameCount < 1200) {
            camera.position.z -= delta * pos;
        } else {
            camera.position.set(0, 0, 10);
            frameCount = 0;
        }
        frameCount++;
    };
    

    return camera;
}

export {createCamera};
