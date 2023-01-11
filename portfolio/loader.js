const canvas = document.getElementById("canvas");
        //if we want to draw anything at all on the canvas, we need to get its DOM element and call getContext("2d") to get access to canvas API.
        const c = canvas.getContext("2d");
        
        //Keeping track of window size
        let w;
        let h;
        const setCanvasExtents = () =>{
            w = document.body.clientWidth;
            h = document.body.clientHeight;
            canvas.width = w;
            canvas.height = h;
        };

        setCanvasExtents();

        window.onresize = () =>{
            setCanvasExtents();
        };

        //Each star is represented by an object that holds x,y,z coodinates. We create 10k of them and put them in an array.The center point of the coordinate system will be drawn to the centre of our canvas.
        /*  x values range from -800 to +800
            y values range from -450 to +450
            z values range from 0 to 1000.
            These ranges are not entirely arbitrary. Its kept to create a 16:9 rectangle*/
        const makeStars = count =>{
            const out = [];
            for(let i=0;i<count;i++){
                const s = {
                    x: Math.random() * 1600 - 800,
                    y: Math.random() * 900 - 450,
                    z: Math.random() * 1000
                };
                out.push(s);
            }
            return out;
        };

        let stars = makeStars(10000);

        /*Drawing the background:The clear function just fills the entire canvas with our background color*/
        const clear = () =>{
            c.fillStyle = "black";
            c.fillRect(0, 0, canvas.width, canvas.height);
        };

        /*Drawing a single star: We will color each pixel with a brightness between 0 and 1.The higher the value the brighter the pixel.The putPixel functiondetermines the rgb color of our pixel.*/
        const putPixel = (x, y, brightness) => {
            const intensity = brightness * 255;
            const rgb = "rgb(" + intensity +"," + intensity + "," + intensity + ")";
            c.fillStyle = rgb;
            c.fillRect(x, y, 1, 1);;
        };

        /*Moving the stars: We want to move the stars in the starfield towards us.We need to decrease the z-value for that.Once they come close to the screen we send them back to keep it happening in a loop*/
        const moveStars = distance => {
            const count= stars.length;
            for(var i=0;i<count;i++){
                const s = stars[i];
                s.z -= distance;
                while(s.z<=1){
                    s.z = 1000;
                }
            }
        };

        /*The next important thing is to control the speed at which the animation happens.We could go with setTimeout or setInterval, but the most convenient thing would be to ask the browser to invoke us on next screen refresh, at the same time giving a high -resolution clock value.The browser calls the init and passes the high-resolution clock value.*/
        let prevTime;
        const init = time =>{
            prevTime = time;
            requestAnimationFrame(tick);
        };

        /*The tick function determines the time passed since last refresh, moves te animation forward, draws the current state of stars and requests next screen refresh*/
        const tick = time =>{
            let elapsed = time - prevTime;
            prevTime = time;
            moveStars(elapsed*0.1);
            clear();
            const cx = w/2;
            const cy = h/2;
            const count = stars.length;
            for(var i=0;i<count;i++){
                const star =stars[i];
                const x = cx+star.x/(star.z * 0.001);
                const y = cy+star.y/(star.z * 0.001);

                if(x<0 || x>=w || y<0 || y>=h){
                    continue;
                }
                /*We want the stars to appear brighter when close to screen and distant ones to be dimmer.The const d sets this value.The star furthest away is at z=1000, so we can get a linear brightness scale by dividing z by 1000.*/
                const d = star.z / 1000.0;
                const b = 1-d*d;

                putPixel(x,y,b);
            }
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(init);