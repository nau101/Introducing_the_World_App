import { Color, Scene } from 'three';

function createScene(){
    const scene = new Scene();
    scene.background = new Color('ivory'); 
    // css color names: https://www.w3schools.com/colors/colors_names.asp
    return scene;
}

export {createScene};