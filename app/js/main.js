var canvas;
var ctx;

var canvasOffset;
var offsetX;
var offsetY;

// start Onload
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvasOffset = $("#canvas").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;

$("#canvas").on('mousedown', function (e) {
    handleMouseDown(e);
});
// end Onload

var isDrawing = false;
var startX;
var startY;

function handleMouseDown(e) {
	var	mouseX = parseInt(e.clientX - offsetX);
	var mouseY = parseInt(e.clientY - offsetY);

	if (!isDrawing) {
		canvas.style.cursor = "crosshair";
		startX = mouseX;
		startY = mouseY;
	} else {
		ctx.rect(startX, startY, mouseX - startX, mouseY - startY);
		ctx.stroke();
		canvas.style.cursor = "default";
	}
	isDrawing = !isDrawing; // Inverting
}
