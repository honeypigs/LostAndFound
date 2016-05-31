var shade = document.querySelector(".shade");
var infoDevice = document.querySelector(".info-device");
var thingDevice = document.querySelector(".things-device");
var infoItem = document.querySelector("#info-item");
var thingsItem = document.querySelector("#things-item");

infoDevice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		infoItem.style.visibility = "visible";
		infoItem.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		infoItem.style.visibility = "hidden";
		infoItem.setAttribute("visable","false");
	}
});

thingDevice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		thingsItem.style.visibility = "visible";
		thingsItem.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		thingsItem.style.visibility = "hidden";
		thingsItem.setAttribute("visable","false");
	}
});

thingsItem.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		thingsItem.style.visibility = "hidden";
		thingsItem.setAttribute("visable","false");
	}
});
infoItem.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		infoItem.style.visibility = "hidden";
		infoItem.setAttribute("visable","false");
	}
});
shade.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		shade.style.visibility = "hidden";
		shade.setAttribute("visable","false");
		thingsItem.style.visibility = "hidden";
		thingsItem.setAttribute("visable","false");
		infoItem.style.visibility = "hidden";
		infoItem.setAttribute("visable","false");
	}
});

window.onload = function() {
	var ul = document.getElementsByTagName('ul');
	for (var i = 0; i < ul.length; i++) {
		ul[i].style.listStyle = "none";
		ul[i].style.textAlign = "center";
		console.log(ul[i]);
	};
}
 
