function start() 
{
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = correctTime(m);
s = correctTime(s);
document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
//calling the function every second
var t = setTimeout(start, 1000);
}
//adding the zero if needed
function correctTime(i) 
{
if (i < 10) {
i = "0" + i;
}
return i;
}