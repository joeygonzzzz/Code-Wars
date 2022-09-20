//Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function area(h, w) {
	if(h > 0 && w > 0){
		return h * w
	}else{
		return -1
	}
}