const image = document.getElementById('image');

// Set the initial position of the image
let x = 0;
let y = 0;

// Update the position of the image based on the arrow key pressed
function moveImage(event) {
	switch(event.keyCode) {
		case 37: // left arrow
			x -= 10;
			break;
		case 38: // up arrow
			y -= 10;
			break;
		case 39: // right arrow
			x += 10;
			break;
		case 40: // down arrow
			y += 10;
			break;
	}
	image.style.left = x + 'px';
	image.style.top = y + 'px';
}

// Add an event listener to the document object
document.addEventListener('keydown', moveImage);
