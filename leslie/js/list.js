window.addEventListener("DOMContentLoaded",function(){
	var box = document.getElementsByClassName("box")[0];
	var goodsarr = [];
	$.ajax({
		type: "get",
		url: "../api/list.php",
		async: true,
		success: function(goodslist) {
		goodsarr = JSON.parse(goodslist);
//		console.log(goods)
		console.log(goodsarr);//拿到后端40天数据
		render(goodsarr);
		var yuanarr = goodsarr.slice(0);
		render(goodsarr.slice(0, 20));

		function render(arr){
			box.innerHTML = arr.map(function(item){				
				return `<div class="box" >
								<img src="${item.url}" />
								<p>${item.goodname}</p>
								<p class="price">${item.price}</p>
								<p>月销<span>${item.sales}</span>件</p>
							</div>`
			}).join("");
		}
		
		
		
		
		
		
		
		



		}
	})
})