

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
        helper method/function for maping the location of the player on the cap world to where the player is on the mini map
    */
    mapPlayer2Minimap(playerPos){
        let minX = this.pos.x 
        let maxX = this.minimapSizeX
        let minY = this.pos.y
        let maxY = this.minimapSizeY

    }

    // draw the player on the mini map
    drawPlayer(ctx,playerPos,playerAngle){
        // draw a box at player pos
        let sizeX = 10
        let sizeY = 10
        let cornerX = playerPos.x - sizeX/2
        let cornerY = playerPos.y - sizeY/2
        // draw a rect
        ctx.fillStyle = 'black'
        ctx.fillRect(cornerX,cornerY,sizeX,sizeY)
    }

    // render a player on the mini map
    render(ctx,worldmap,player){
        ctx.stokeStyle = 'Black'
        ctx.strokeRect(this.pos.x,this.pos.y,this.minimapSizeX,this.minimapSizeY)
        // draw the player at localtion 0,0 on the minimap
        this.drawPlayer(ctx,player.pos,player.dir)
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