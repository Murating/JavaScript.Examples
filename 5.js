var rain = [
"Имя:Murat Jemmiyev\x0A\x0A\x0A Особенности:\x0A1:Читается Матрица слова\x0A2:Multi-цветы\x0A\x0A ***Murating***",
"onload", "Murat",
"getElementById", "2d",
"getContext", "height",
"innerHeight", "width",
"innerWidth", "f8e", "0c0",
"50f", " MURAT ", "0", "split",
"", "#", "random", "length",
"floor", "fillStyle",
"rgba(3, 0, 3, 0.05)",
"fillRect", "font",
"px source code pro",
"fillText"
];
alert(rain[0]);
window[rain[1]] = function() {
var c = document[rain[3]](
rain[2]);
var ctx = c[rain[5]](rain[
4]);
c[rain[6]] = window[rain[
7]];
c[rain[8]] = window[rain[
9]];
var r = rain[10];
var g = rain[11];
var b = rain[12];
var matrix = rain[13];
matrix = matrix[rain[15]](
rain[14]);
r = r[rain[15]](rain[16]);
g = g[rain[15]](rain[16]);
b = b[rain[15]](rain[16]);
var font_size = 9;
var columns = c[rain[8]] /
font_size;
var drops = [];
for (var x = 0; x < columns; x++) {
drops[x] = x - 130
}

function draw() {
var coltext = rain[17] +
r[Math[rain[20]](
Math[rain[18]]
() * r[rain[
19]])] + g[Math[
rain[20]](
Math[rain[
18]]() * g[
rain[19]
])] + b[Math[
rain[20]](
Math[
rain[18]
]() * b[rain[
19]])];
ctx[rain[21]] = rain[
22];
ctx[rain[23]](0, 0, c[
rain[8]], c[
rain[6]]);
ctx[rain[21]] = coltext;
ctx[rain[24]] =
font_size + rain[25];
for (var i = 0; i < drops[
rain[19]]; i++) {
var text = matrix[Math[
rain[20]
](Math[rain[
18]]() *
matrix[
rain[
19]
])];
ctx[rain[26]](text,
i * font_size,
drops[i] *
font_size);
if (drops[i] *
font_size > c[
rain[6]] &&
Math[rain[18]]
() > 0.975) {
drops[i] = 0
}
drops[i]++
}
}
setInterval(draw, 15)
}