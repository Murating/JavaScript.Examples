function generate2(numpnt,radius)
{ var begin = Date.now();
var wrap = document.getElementById("sphere");
wrap.classList.remove("rotate");
wrap.style.width = 200+"px";
wrap.style.height = 200+"px";
wrap.innerHTML = '';
var x,y,z,f,t,xo,yo;

/* 
* code by Yaroslav Pieskov
* On PC - loop n— time to generate 1362 elements: 59ms, 65ms, 52ms, 61ms
*
* On PC - loop n++ time to generate 1362 elements: 72ms, 71ms, 66ms, 60ms
*/
//for(n=numpnt;n>=1;n--){
for(n=1;n<=numpnt;n++){
f = Math.acos(-1 + (2 * n - 1) / numpnt); 
t = Math.sqrt(numpnt * Math.PI) * f;
x = Math.round(radius * Math.sin(f) * Math.cos(t)); 
y = Math.round(radius * Math.sin(f) * Math.sin(t));
z = Math.round(radius * Math.cos(f));
xo = Math.atan(y/z)*180/Math.PI;
yo = Math.atan(x/z)*180/Math.PI;
zo =Math.atan(y/x)*180/Math.PI;

var el=document.createElement('div');
el.id="s"+n;
el.style.position = "absolute";
el.style.left = "90px";
el.style.top = "90px";
el.style.width = "10px";
el.style.height = "10px";
el.style.backgroundColor="hsla("+ Math.ceil(360/numpnt*n) +",50%, 50%, .7)";

var t="translateX("+x+"px) translateY("+y+"px) translateZ("+z+"px) rotateX("+xo+"deg) rotateY("+yo+"deg) rotateZ("+zo+"deg)";// 
el.style.webkitTransform = t;
el.style.MozTransform = t;
el.style.msTransform = t;
el.style.OTransform = t;
el.style.transform = t;

wrap.appendChild(el);


}
var end = Date.now();
var time = document.getElementById("gtime")
time.innerHTML=end - begin+"ms";
wrap.classList.add("rotate");
}

function rotate(){
document.getElementById("sphere").classList.toggle("rotate");
}

function run(){
var polygon = prompt ("set number of elements", 362); 
//var polygon = 1362
generate2(polygon, 160);
}
window.onload=function(){
var btn = document.getElementById("rotate")
btn.addEventListener("click", rotate);
btn = document.getElementById("new")
btn.addEventListener("click", run);
run();
}