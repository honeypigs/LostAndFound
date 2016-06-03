var shade = document.querySelector(".shade");
var choice = document.querySelector("#choice");
var list = document.querySelector(".list");
var bottomNav = document.querySelectorAll(".bottomNav");

choice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		list.style.visibility = "visible";
		list.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		list.style.visibility = "hidden";
		list.setAttribute("visable","false");
	}
});
shade.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		list.style.visibility = "hidden";
		list.setAttribute("visable","false");
	}
});
list.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		list.style.visibility = "hidden";
		list.setAttribute("visable","false");
	}
});