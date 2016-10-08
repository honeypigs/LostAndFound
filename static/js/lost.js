	var shade = document.querySelector(".shade");
	var choice = document.querySelector("#choice");
	var list = document.querySelector(".list");
	var bottomNav = document.querySelectorAll(".bottomNav");
	var body = $('body'),startY = 0 ,endY;
	var content = $('#content');
	var page = 1,pre_page = 1;
	var category = "all";	

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
		content.empty();
		if (shade.getAttribute("visable") == "true") {
			category = e.target.textContent;
			hideList();
			$.ajax({ //返回分类页面
			  type: 'GET',
			  url: 'http://weixin.324.ist/laf/view/lost/' + category,
			  // type of data we are expecting in return:
			  dataType: 'json',
			  timeout: 10000,
			  success: function(data){
			  	data.data.forEach(function(item,index,data){
							var node;
							if (data.length != 0) {
								node = '<a href = "http://weixin.324.ist/laf/detail/'  + item.pro_id + 
								'" class = "section"><img src="' + item.wx_avatar + 
								'" alt="." class = "headImg"><div class = "info"><span class = "name">' + category + 
								'</span><span class = "time">' + item.created_at + 
								'</span><span class = "user">发布者：' + item.connect_name + 
								'</span><p class = "mainInfo">' + item.pro_description +
								'</p></div></a>'
							}
							content.append(node);
						})
			  },
			  error: function(xhr, type){
			  }
			})
		}
	});

	window.onload = function () {
		$.ajax({ //返回Json数据
			type: 'GET',
			url: 'http://weixin.324.ist/laf/view/lost/' + category,
			dataType: 'json',
			timeout: 10000,
			success: function(data){
				data.data.forEach(function(item,index,data){
					var node;
					if (data.length != 0) {
						node = '<a href = "http://weixin.324.ist/laf/detail/'  + item.pro_id + 
						'" class = "section"><img src="' + item.wx_avatar + 
						'" alt="." class = "headImg"><div class = "info"><span class = "name">' + category + 
						'</span><span class = "time">' + item.created_at + 
						'</span><span class = "user">发布者：' + item.connect_name + 
						'</span><p class = "mainInfo">' + item.pro_description +
						'</p></div></a>'
					}
					content.append(node);
				})
			},
			error: function(xhr, typ
			}
		})


		body.on('touchmove',function (e) {
			endY = body.scrollTop();
			if ((endY - startY) > 500) {
				startY = endY;
				page++;
				$.ajax({ //返回Json数据
					type: 'GET',
					url: 'http://weixin.324.ist/laf/view/lost/' + category + '/' + page,
					dataType: 'json',
					timeout: 10000,
					success: function(data){
						data.data.forEach(function(item,index,data){
							var node;
							if (data.length != 0) {
								node = '<a href = "http://weixin.324.ist/laf/detail/'  + item.pro_id + 
								'" class = "section"><img src="' + item.wx_avatar + 
								'" alt="." class = "headImg"><div class = "info"><span class = "name">' + category + 
								'</span><span class = "time">' + item.created_at + 
								'</span><span class = "user">发布者：' + item.connect_name + 
								'</span><p class = "mainInfo">' + item.pro_description +
								'</p></div></a>'
							}
							content.append(node);
						})
					},
					error: function(xhr, type)
					}
				})
			}

		})
	}