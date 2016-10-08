var shade = document.querySelector(".shade");
var choice = document.querySelector("#choice");
var list = document.querySelector(".list");
var bottomNav = document.querySelectorAll(".bottomNav");
var body = $('body'),startY = body.scrollTop() ,endY;

function hideList() {
	shade.style.visibility = "hidden";
	shade.setAttribute("visable","false");
	list.style.visibility = "hidden";
	list.setAttribute("visable","false");
}

choice.addEventListener("click",function () {
	if (!shade.getAttribute("visable") || shade.getAttribute("visable") == "false") {
		shade.style.visibility = "visible";
		shade.setAttribute("visable","true");
		list.style.visibility = "visible";
		list.setAttribute("visable","true");
	} else if (shade.getAttribute("visable") == "true") {
		hideList();
	}
});
shade.addEventListener("click",function () {
	if (shade.getAttribute("visable") == "true") {
		hideList();
	}	
});
list.addEventListener("click",function (e) {
	if (shade.getAttribute("visable") == "true") {
		hideList();
		$.ajax({ //返回分类页面
		  type: 'GET',
		  url: 'http://weixin.324.ist/laf/view/lost/' + e.target.textContent 
		  + '/' + page,
		  // type of data we are expecting in return:
		  dataType: 'json',
		  timeout: 10000,
		  success: function(data){

		  },
		  error: function(xhr, type){
		    alert('Ajax error!')
		  }
		})
	}
});

window.onload = function () {
	body.on('touchmove',function (e) {
		endY = body.scrollTop();
		if ((endY - startY) > 200) {
			$.ajax({ //返回Json数据
				type: 'GET',
				url: 'http://weixin.324.ist/laf/view/lost/{category?}/{page?}',
				dataType: 'json',
				timeout: 10000,
				success: function(data){
					data.forEach(function(item,index,data){
						var node;
						if (data.length != 0) {
							node = '<a href = "' + /* detailURL */ + 
							'" class = "section"><img src="' + /* userImageURL */ + 
							'" alt="." class = "headImg"><div class = "info"><span class = "name">' + /* thingsName */ + 
							'</span><span class = "time">' + /* time */ + 
							'</span><span class = "user">发布者：' + /* userName */ + 
							'</span><p class = "mainInfo">' + /* mainInfo */ +
							'</p></div></a>'
						}
						body.append(node);
					}) 
					startY = endY;
				},
				error: function(xhr, type){
					alert('Ajax error!')
				}
			})
		}

	})
}