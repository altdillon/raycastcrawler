

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
    computer graphics typically have the origin in the upper left corner, I don't want to do that.
    I will put my origin for this map in the lower left hand corner.  fite me
*/

class VertexMap {

    /*
        mapSizeX : size of the map in the x axis
        mapSizeY : size of the map in the y axis
        generatemaps : call back for instationg a map world
        ...
        will take in a list of vertices and make make sure that they all fit in the map world
    */

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
            
            let mapSpace = vec(this.mapSizeX,this.mapSizeY)
            this.mapVertices.forEach((vertex) => {
                let vStart = vertex.pStart
                let vEnd = vertex.pEnd
                // subtract vStart and Vend from mapSpace and find the magnitues
                // if the magnitudes are both positive then this works
                if(mapSpace.sub(vStart).mag() < 0 && mapSpace.sub(vEnd).mag() < 0){
                    // then do something. Maybe throw an exspection or something
                    // TODO: figure out something to do here!
                } 
            })            
        }
    }
}

/*
    Minimap object, draws a minimap somewhere on the screen
    This is no way interacts with the game world, but it's still part of the canvas
    basicly just show where the player is in space
*/

class MiniMap{
    constructor(minimapSizeX,minimapSizeY,posX,posY){
        this.minimapSizeX = minimapSizeX
        this.minimapSizeY = minimapSizeY
        this.pos = vec(posX,posY)
    }

    /*
        map function cribed from arduino
    */
    maphelper(x,in_min,in_max,out_min,out_max){
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }


    /*
        draw a marker for the player in the center of the mini map
    */
    drawPlayer(ctx,playerPos,playerdir){
        // draw a box at the center of the minimap
        // first figure out were the center of the map is on the canvas
        let minimap_centerX = this.pos.x + this.minimapSizeX/2
        let minimap_centerY = this.pos.y + this.minimapSizeY/2
        // then draw a rect
        ctx.fillRect(minimap_centerX,minimap_centerY,10,10)
    }

    /*
        go through all the vertices and render them on the minimap
    */
    drawVertices(ctx,worldmap,playerpos){
        // make a vector for the draw distance of the player
        let drawdist = vec(this.minimapSizeX/2,this.minimapSizeY/2)
        // iterate through all the world map vertices 
        worldmap.mapVertices.forEach((vectrix) => {
            // figure out if the vertex is with in draw distance for the player on the minimap
        
        })
    }

    // render a player on the mini map
    render(ctx,worldmap,player){
        ctx.stokeStyle = 'Black'
        ctx.strokeRect(this.pos.x,this.pos.y,this.minimapSizeX,this.minimapSizeY)
        // draw a marker for the player in the center of the box 
        this.drawPlayer(ctx,player.pos,player.dir)
        // ok, now go through the world map and draw all the vertices on the minimap
        this.drawVertices(ctx,worldmap,player.pos)
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

    raycast(ctx,orgPos){

    }
}