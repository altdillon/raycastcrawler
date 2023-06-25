
/*
    Very minimal vector math libary, why did I do this?  I have no idea why... 
    But it's kind of nice for some basic stuff. It'll make the game better
    ...
    Everything here is in radians
    anything in or out is assumed to be in radians
*/
class Vector {
    
    constructor(x,y,mag,angle){
        if(x && y){
            this.x = x
            this.y = y
        } else if(mag && angle) {
            this.x = mag * Math.cos(angle)
            this.y = mag * Math.sin(angle)
        }

    }

    mag(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }

    angle(){
        if(this.x == 0) {
            if(this.y >= 0){
                return Math.PI/2
            } else {
                return -Math.PI/2
            }
        }
        return Math.atan(this.y/this.x)
    } 

    unit(){
        let unitX = this.x / this.mag()
        let unitY = this.y / this.mag()
        return new Vector(unitX,unitY)
    }

    add(othervec) {
        let sumX = this.x + othervec.x
        let sumY = this.y + othervec.y
        return new Vector(sumX,sumY)
    }

    sub(othervec) {
        let diffX = this.x - othervec.x
        let diffY = this.y - othervec.y
        return new Vector(diffX,diffY)
    }

    dot(othervec) {
        let dotProduct = this.x * othervec.x + this.y * othervec.y
        return dotProduct
    }
}