document.addEventListener("DOMContentLoaded", function() {
	//滚回顶部
	var live = document.getElementById("live");
	window.onscroll =  function(){
        if(window.scrollY > 0){
            live.style.display = "block";
        }else if(window.scrollY < 10){
            live.style.display = "none";
        }
    }
	live.isMove = false;
	live.onclick = function() {
		if(!live.isMove) {
			var timer = setInterval(function() {
				live.isMove = true;
				window.scrollBy(0, -50);
				if(window.scrollY <= 0) {
					clearInterval(timer);
					live.isMove = false;
				}
			}, 30);
		}
	};
	//
	//轮播图
    $('.carousel').carousel({
      interval: 2000
    })
    
    
    //渲染页面
    var gbox = document.getElementsByClassName("gbox")[0];
	var goodsarr = [];
	$.ajax({
		type: "get",
		url: "../api/list.php",
		async: true,
		success: function(goodslist) {
			
			goodsarr = JSON.parse(goodslist);
			console.log(goodsarr);//拿到后端40天数据
			render(goodsarr);
			var yuanarr = goodsarr.slice(0);
			render(goodsarr.slice(0, 5));
	
			function render(arr){
				gbox.innerHTML = arr.map(function(item){				
					return `<li class="goods fl">
						<img class="imgUrl" src="${item.url}" />
						<div class="discount">${item.discount}折</div>
						<div class="goodscontent fl">${item.goodname}</div>
						<div class="buy fr">立即抢购</div>
						<div class="price">￥${item.price}</div>
					</li>`
				}).join("");
				getImgUrlArr();
			}
				//传递数据
			function getImgUrlArr(){
				var imgUrlArr = document.getElementsByClassName("imgUrl");
				console.log(imgUrlArr)
				for(var i = 0; i < imgUrlArr.length; i++) {
					imgUrlArr[i].idx = i;
					imgUrlArr[i].onclick = function(){
						console.log(goodsarr[this.idx].id)
						location.href = `detail.html?id=${goodsarr[this.idx].id}`;
					}
				}
			}	
			
			
			
				
		}
	})


})