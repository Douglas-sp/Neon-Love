/*var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//initialize the GL context
var gl = canvas.getContext("");
if(!gl){
    console.error("Unable to initialize WebGL.");
}
*/


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the heart stroke style
ctx.strokeStyle = '#ff0080';
ctx.lineWidth = 8;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Set the heart glow style
ctx.shadowBlur = 15;
ctx.shadowColor = '#ff0080';

// Draw the heart shape
ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();

// Draw the heart outline
ctx.stroke();

// Animate the glow effect
let glow = 15;
const glowDirection = 1;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = glow;
  glow += glowDirection;
  if (glow > 25 || glow < 5) {
    glowDirection *= -1;
  }
  requestAnimationFrame(animate);
}
animate();