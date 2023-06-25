
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

        }
    }
}

/*
    RayCaster is the class for puting the actual ray cast on the screen
*/

class RayCaster{

    constructor(windowWidth,windowHeight){
        this.windowHeight = windowHeight
        this.windowWidth = windowWidth
    }

    raycast(){

    }
}