
/*
    A vertex is kind of the basic unit of anything on the map.  A vertex can either be part of a closed or open shape
    A vertex is basicly a vector that runs between two points.  We can either have a vertex that can exist between two points
*/

class Vertex {
    constructor(pStart,pEnd,color,bitmap){
        this.pStart = pStart;
        this.pEnd = pEnd;
        if(color){
            this.color = color
        } else if(bitmap) {
            this.bitmap = bitmap
        }
    }
}


/*
    Vertex is the graphics side of the map.  The player exist somewhere on this.

*/

class VertexMap {
    constructor(mapSizeX,mapSizeY,generatemaps){
        this.mapSizeX = mapSizeX
        this.mapSizeY = mapSizeY
        this.mapVertices = [] // array of vertex objects... I think I spelled vertices correctly
        // iterate thorugh a map and add verexices 
        if(generatemaps){
            // if generate map is defined then use that function to add an object
            generatemaps(this.mapVertices)
            // validate that all the vertices are within bounds for the map
            // fist use some highly complex map to define the map as a closed area 
            // assume the map is rectangle 
            debugger
            let mapSpace = Vector(this.mapSizeX,this.mapSizeY)
            this.mapVertices.forEach((vertex) = {

            })            
        }
    }
}

/*
    RayCaster is the class for puting the actual ray cast on the screen
*/

class RayCaster{

    constructor(windowWidth,windowHeight,fov,raycastpoints){
        // how many pixes to draw the window
        this.windowHeight = windowHeight
        this.windowWidth = windowWidth
        // ray casting paramaters, fox and how many rays to cast with
        this.fov = fov
        this.raycastpoints = raycastpoints
    }

    /*
        This is the main raycasting function.  This takes a position at vector orgPos and then draws out the ray cast functions from that point
        this function will try to be be somewhat future proof.  ray hit detection will rely on a recurisve function that will be usefull if variable height 
        walls ever become an option
    */

    raycast(orgPos){

    }
}