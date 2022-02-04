import React, { Component } from 'react';



class Universe extends Component {
    state = {  } 

    render() { 

        var sun = new Image();
        var moon = new Image();
        var earth = new Image();

        function init() {
            sun.src = 'https://myremovebg.com//static/results/1643981338808878.png';
            moon.src = 'https://pngimg.com/uploads/moon/moon_PNG9.png';
            earth.src = 'https://icon-library.com/images/earth-icon-png/earth-icon-png-7.jpg';
            window.requestAnimationFrame(draw);
        }
        

        function draw() {

            var ctx = document.getElementById('canvas').getContext('2d');

            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, 300, 300); // clear canvas

            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
            ctx.save();
            ctx.translate(150, 150);

            // Earth
            var time = new Date();
            ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.translate(105, 0);
            //ctx.fillRect(0, -12, 40, 24); // Shadow
            ctx.drawImage(earth, -12, -12, earth.width * 0.1, earth.height * 0.1);

            // Moon
            ctx.save();
            ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            ctx.translate(0, 28.5);
            ctx.drawImage(moon, -3.5, -3.5, moon.width * 0.015, moon.height * 0.015);
            ctx.restore();

            ctx.restore();

            ctx.beginPath();
            ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
            ctx.stroke();

            ctx.drawImage(sun, 0, 0, 300, 300);

            window.requestAnimationFrame(draw);
        }

        init();
        return (
            <>
                <canvas id="canvas" width="300" height="300"></canvas>
                
            </>
        );
    }
}
 
export default Universe;