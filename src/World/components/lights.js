import { DirectionalLight, PointLight} from "three";

function createLights(){
    const light = new DirectionalLight('white',10);
    light.position.set(0,10,10);

    return light;
}

export {createLights};