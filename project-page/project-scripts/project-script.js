let colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
	colorWell = document.querySelector("#colorWell");
	colorWell.value = defaultColor;
	colorWell.addEventListener("input", updateFirst, false);
	colorWell.addEventListener("change", updateAll, false);
	colorWell.select();
}
function updateFirst(event){
	const p = document.querySelector("p");
	if (p) {
		p.style.color = event.target.value; 
	}
}
function updateAll(event){
	document.querySelectorAll("p").forEach((p) =>{
		p.style.color = event.target.value;
	});
}