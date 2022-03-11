const display = document.querySelector(".display");
let innerDisplay = parseInt(display.innerHTML);
console.log(innerDisplay);
const increment = () => {
	innerDisplay++;
	display.innerHTML = innerDisplay;
};
const decrement = () => {
	if (innerDisplay > 0) {
		innerDisplay--;
		display.innerHTML = innerDisplay;
	} else {
		alert("You can't go below 0");
	}
};
const reset = () => {
	innerDisplay = 0;
	display.innerHTML = innerDisplay;
};
