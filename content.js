var toAppend = document.getElementById("body");
let displayElem = document.createElement("div");
displayElem.classList.add("append__display");
toAppend.appendChild(displayElem);

var counter = 0;
var counterStart = setInterval(counterFun, 1000);

function counterFun() {
	counter++;
	var resCounter = counter.toString(); // Converting couner value to string in order to display it in DOM
	displayElem.innerHTML =
		"Countdown" +
		`<p class = "newTabDisp">` +
		resCounter +
		`</p>` +
		`<p class = "secDisp">` +
		"sec" +
		`</p>`;

	if (counter === 5) {
		clearInterval(counterStart); // Stopping the counter
		var url = "https://news.google.com";
		window.location = url;
	}
}
