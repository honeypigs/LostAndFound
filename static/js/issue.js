var shade = document.querySelector(".shade");
var infoDevice = document.querySelector(".info-device");
var thingDevice = document.querySelector(".things-device");
var infoItem = document.querySelector("#info-item");
var thingsItem = document.querySelector("#things-item");
var data = {};

function hideItem () {
	shade.style.visibility = "hidden";
	shade.setAttribute("visable","false");
	thingsItem.style.visibility = "hidden";
	thingsItem.setAttribute("visable","false");
	infoItem.style.visibility = "hidden";
	infoItem.setAttribute("visable","false");
}

infoDevice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		infoItem.style.visibility = "visible";
		infoItem.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		hideItem();
	}
});

thingDevice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		thingsItem.style.visibility = "visible";
		thingsItem.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		hideItem();
	}
});

thingsItem.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		hideItem();
	}
});
infoItem.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		hideItem();
	}
});
shade.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		hideItem();
	}
});

window.onload = function() {
	var ul = document.getElementsByTagName('ul');
	var info = document.querySelectorAll(".info");
	for (var i = 0; i < ul.length; i++) {
		ul[i].style.listStyle = "none";
		ul[i].style.textAlign = "center";
	};

}
 
