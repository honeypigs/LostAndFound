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

thingsItem.addEventListener("click",function (e) {
	if (shade.getAttribute("visable") == "true") {
		data.category = e.target.textContent;
		thingDevice.querySelector('.item').innerText = e.target.textContent;
		hideItem();
	}
});
infoItem.addEventListener("click",function (e) {
	if (shade.getAttribute("visable") == "true") {
		data.property = e.target.textContent;
		infoDevice.querySelector('.item').innerText = e.target.textContent;
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

	var issue = document.querySelector('#issue');
	var detail = document.querySelector('textarea');
	var pickTime = document.querySelector('#picktime');
	var place = document.querySelector('#place');
	var phone = document.querySelector('#phone');
	var qq = document.querySelector('#qq'); 
	issue.addEventListener('click',function () {

		data.detail = detail.value;
		data.pickTime = pickTime.value;
		data.place = place.value;
		data.phone = phone.value;
		data.qq = qq.value;
		console.log(data);
		$.ajax({ //发送数据
			type: 'POST',
			url: 'http://weixin.324.ist/laf/create',
			data: data,
		  	// type of data we are expecting in return:
		  	dataType: 'json',
		  	timeout: 10000,
		  	success: function(data){
		  		console.log(data);
		  	},
		  	error: function(xhr, type){
		  		alert('Ajax error!')
		  	}
		})
	})
}

