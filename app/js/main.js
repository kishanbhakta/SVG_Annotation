// Global variables start
var canvas;
var ctx;

var canvasOffset;
var offsetX;
var offsetY;

var isDrawing = false;

// Global variables end

// start Onload
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvasOffset = $("#canvas").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;

$("#canvas").on('mousedown', function (e) {
    handleMouseDown(e);
}).on('mouseup', function(e) {
    handleMouseUp();
}).on('mousemove', function(e) {
    handleMouseMove(e);
});
// end Onload


// Start mouse drag collections
var startX;
var startY;

function handleMouseUp() {
	isDrawing = false;
	canvas.style.cursor = "default";
}

function handleMouseMove(e) {
	if (isDrawing) {
		var mouseX = parseInt(e.clientX - offsetX);
		var mouseY = parseInt(e.clientY - offsetY);

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.rect(startX, startY, mouseX - startX, mouseY - startY);
		ctx.stroke();

	}
}
function handleMouseDown(e) {
	canvas.style.cursor = "crosshair";
	isDrawing = true;
	startX = parseInt(e.clientX - offsetX);
	startY = parseInt(e.clientY - offsetY);
}
// End mouse drag collections

// Have annotation menu options show and have a commit button to commit annotation and automatically save as png file
// First disable native context menu
function annotationMenuPopup(e) {

}
