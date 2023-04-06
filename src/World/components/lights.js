import { DirectionalLight, PointLight, RectAreaLight } from "three";

function createLights(){
    const light = new DirectionalLight('white',15);
    light.position.set(5,5,0);
    return light;
}

export {createLights};