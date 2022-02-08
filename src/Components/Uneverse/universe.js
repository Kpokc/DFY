import React, { Component } from 'react';
import pc from '../Img/pc.png';
import mouse from '../Img/mouse.png';
import pcu from '../Img/pcu.png';


class Universe extends Component {
    state = {  } 

    render() { 

        var sun = new Image();
        var moon = new Image();
        var earth = new Image();

        function init() {
            sun.src = pcu;
            moon.src = mouse;
            earth.src = pc;
            
            window.requestAnimationFrame(draw);
        }
        

        function draw() {

            var ctx = document.getElementById('canvas').getContext('2d');
            
            //ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, 300, 300); // clear canvas
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
            ctx.save();
            ctx.translate(150, 150);

            // PC
            var time = new Date();
            ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.translate(105, 0);
            //ctx.fillRect(0, -12, 40, 24); // Shadow
            ctx.drawImage(earth, -17, -15, earth.width * 0.07, earth.height * 0.07);

            
            // Mouse
            ctx.save();
            ctx.rotate(((2* Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            ctx.translate(-5, -5);
            ctx.drawImage(moon, -25, -25, moon.width * 0.025, moon.height * 0.025);

            ctx.restore();
            
            ctx.restore();

            ctx.beginPath();
            ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
            ctx.stroke();

            ctx.drawImage(sun, 95, 100, 100, 100);

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