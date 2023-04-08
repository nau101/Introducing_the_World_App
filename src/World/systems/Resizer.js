const setSize = (container,camera,renderer) => {

    // Set the camera's aspect ratio to match the container's proportions
    camera.aspect = container.clientWidth / container.clientHeight;
    
    //update camers frsutum
    camera.updateProjectionMatrix();

    // next, set the renderer to the same size as our container element
    renderer.setSize(container.clientWidth,container.clientHeight);
    
    // finally, set the pixel ratio to ensure our scene will look good on mobile devices
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer{
    constructor(container, camera, renderer){  
        //set initial size on load 
        setSize(container,camera,renderer);
        
        window.addEventListener("resize", ()=>{
          setSize(container,camera,renderer);  
          //perform any custom actions
          this.onResize();
        });
        
    }
  onResize(){}  
}

export {Resizer};