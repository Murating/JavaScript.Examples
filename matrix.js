alert("/Code by Murat\\ \nModified code\n\n If you'd like to change the randomness of the color find the r, g, and b var, also you can us as many numbers/letters from 0-f.")
//Code by Adrian Gheorghe
window.onload=function(){
// geting canvas by id c
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//color pattern for matrix
var r = "7f0";
var g = "f80";
var b = "f09";
//chinese characters - taken from the unicode charset
var matrix = "СЪЕШЬЭТИХМЯГКИХФРАНЦУЗКИХБУЛОКДАВЫПЕЙЧАЮ!123456789@#$%^&*()*&^%";
//converting the string into an array of single characters
matrix = matrix.split("");
r = r.split("");
g = g.split("");
b = b.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
drops[x] = 1; 

//drawing the characters
function draw()
{
//a random color to print 
var coltext = "#00ff00"/* + r[Math.floor(Math.random()*r.length)] + g[Math.floor(Math.random()*g.length)] + b[Math.floor(Math.random()*b.length)]*/;
//Black BG for the canvas
//translucent BG to show trail
ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = coltext; //color text
ctx.font = font_size + "px arial";
//looping over drops
for(var i = 0; i < drops.length; i++)
{
//a random chinese character to print
var text = matrix[Math.floor(Math.random()*matrix.length)];
//x = i*font_size, y = value of drops[i]*font_size
ctx.fillText(text, i*font_size, drops[i]*font_size);

//sending the drop back to the top randomly after it has crossed the screen
//adding a randomness to the reset to make the drops scattered on the Y axis
if(drops[i]*font_size > c.height && Math.random() > 0.975)
drops[i] = 0;

//incrementing Y coordinate
drops[i]++;
}
}

setInterval(draw, 35);
};
//Code by Adrian Gheorghe