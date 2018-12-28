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
			render(goodsarr.slice(0, 20));
			function render(arr){
				gbox.innerHTML = arr.map(function(item){				
					return `<li class="goods fl">
						<div class="imgBox">
						<img class="imgUrl" src="${item.url}" />
						</div>
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
	
	//倒计时
	var countDown = document.getElementById("countDown");
	var d = new Date("2019/01/01 00:00:00");
    endTime();
    var timer = setInterval(endTime, 1000)
	 function endTime(){
        var now = new Date();
        // 2. 获取之间相差的毫秒数/1000=>秒
        var offset = parseInt((d.getTime() - now.getTime())/1000);
        var seconds = offset%60;
        var minute = parseInt(offset/60)%60;//65分钟：1小时5分钟
        var hour = parseInt(offset/60/60)%24;//25小时：1天1小时
        var tian = parseInt(offset/60/60/24);       
        countDown.innerHTML = tian+"天"+hour+"小时"+minute+"分钟"+seconds+"秒";
        //3. 如果差值小于等于0，清除定时器，换图片，文字隐藏
        if(offset <= 0){
            clearInterval(timer);
            countDown.innerHTML = "";
        }
    }

	
	jQuery(function($){
		//选项卡
		$(".imgUrl").on("mouseover",function(){
			this.style.width ='180px';	
			this.style.height ='180px';
		})
		$(".imgUrl").on("mouseout",function(){
			this.style.width ='160px';	
			this.style.height ='160px';			
		})
		

		//点击轮播
		var move = true;
		$("#shop_rbtn").on("click",function(){
			if(!move){
				return;
			}else{
				move = true;
				var $leng = 188;
				var $gbox = $(this).prev()
				console.log($gbox.position().left)
				$gbox.animate({left:($gbox.position().left-$leng)},500,function(){
					move = false;
				})
			}
		})
		$("#shop_lbtn").on("click",function(){
			var $leng = 188;
			var $gbox = $(this).next()
			if($gbox.position().left > 0){
				$gbox.position().left = 0
			}else{
				$gbox.animate({left:($gbox.position().left+$leng)},500,function(){
					console.log(111)
				})
			}
		})
		
		
		
		
	})
	
	
	
	
	


})