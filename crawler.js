
/*
    top level javascript file for the game
*/

(function(){

    /*
        holds some handy settings for what we're doing with the game and whatnot
    */

    let gameSettings = {
        showFPS: true // frames per second
    }

    /*
        init function,
        just some basic functionality to handle some setups for game logic 
    */

    function gameinit(){

    }
        
   // onload event to setup the canvas window
    window.onload = () => {
        let canvas = document.getElementById('gamecanvas')
        if(canvas.getContext){
            // get window width and height of the window
            let windowHeight = window.innerHeight
            let windowWidth = window.innerWidth
            // set the canvas to that height
            canvas.height = windowHeight
            canvas.width = windowWidth 
            console.log('canvas height: '+canvas.height+' canvas width: '+canvas.width)
            // setup the canvas and start the game loop
            let ctx = canvas.getContext("2d");
            // make a top level draw loop with some basic information about frame rate 
            let frameInfo = {
                frameCounter: 0.0,
                lastTime: 0.0,
                lastFrameCount: 0.0,
                frameTime: 0.0
            }

            /* 
                Drawloop for our world 
                handle handle some screen updates and maybe draw the FPS
            */

            function drawloop(){
                
                
                let dt = (Date.now() - frameInfo.lastTime)/1000.0 // compute the delta between this frame and the last one
                frameInfo.lastTime = Date.now()
                // figure out if one second has passed
                if(frameInfo.frameTime >= 1.0){
                    // get the frame count and reset the counters
                    frameInfo.lastFrameCount = frameInfo.frameCounter
                    frameInfo.frameCounter = 0
                    frameInfo.frameTime = 0
                } else {
                    // intigrate dt into frame time and incriment the grame counter 
                    frameInfo.frameTime += dt
                    frameInfo.frameCounter ++
                }

                //ctx.clearRect(0,0, window.innerHeight,window.innerWidth)
                //ctx.fillStyle = 'black'
                ctx.clearRect(0,0,window.outerWidth,window.outerWidth)
                // display the current frame rate in the upper right hand side of the screen
                if(gameSettings.showFPS){
                    ctx.font = '20px serif' // just pulled from an exsample
                    // parametricly figure out where to put the fps count
                    let fpsX = Math.floor(window.outerWidth - window.outerWidth/14)
                    let fpsY = Math.floor(window.innerHeight / 20)
                    //ctx.fillStyle = 'yellow'
                    ctx.fillText("FPS: "+frameInfo.lastFrameCount,fpsX,fpsY)
                }

                // before we draw anything bank the screen 
                window.requestAnimationFrame(drawloop)
            }

            // after the screen had been setup, init the game logic and kick off the drawloop
            gameinit()
            window.requestAnimationFrame(drawloop) 
        } else {
            alert("could not get canvas contest");
        }
    }
})()