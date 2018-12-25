window.addEventListener("DOMContentLoaded",function(){
	var box = document.getElementsByClassName("list_l_content_c")[0];
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
									<img class="imgUrl" src="${item.url}" />
									<p>${item.goodname}</p>
									<p class="price">${item.price}</p>
									<p>月销<span>${item.sales}</span>件</p>
								</div>`
				}).join("");
				getImgUrlArr();
			}

			//分页
			var sp1 = document.getElementsByClassName("sp1")[0];
			var sp2 = document.getElementsByClassName("sp2")[0];
			var sp5 = document.getElementsByClassName("sp1")[1];
			var sp6 = document.getElementsByClassName("sp2")[1];
			sp1.onclick = function() {
				goodsArr = goodsarr.slice(0, 20);
				render(goodsArr);
			}
			sp2.onclick = function() {
				goodsArr = goodsarr.slice(20, 40);
				render(goodsArr);
			}
			sp5.onclick = function() {
				goodsArr = goodsarr.slice(0, 20);
				render(goodsArr);
			}
			sp6.onclick = function() {
				goodsArr = goodsarr.slice(20, 40);
				render(goodsArr);
			}
			var sp3 = document.getElementsByClassName("sp3")[0];
			var sp4 = document.getElementsByClassName("sp4")[0];
			sp4.onclick = function() {
				var _sp3 = sp3.value
				if(sp3.value == 1){
					goodsArr = goodsarr.slice(0, 20);
					render(goodsArr);
				}
				if(sp3.value == 2){
					goodsArr = goodsarr.slice(20, 40);
					render(goodsArr);
				}
			}
			
			//排序
			var zonghe = document.getElementsByClassName("zonghe")[0];
			var xiaoliang = document.getElementsByClassName("xiaoliang")[0];
			var renqi = document.getElementsByClassName("renqi")[0];
			var jiage = document.getElementsByClassName("jiage")[0];
			var down = true;
			jiage.onclick = function(e) {
				if(down == true) {		
					e.target.children[0].classList.add("xia")
					e.target.children[0].classList.remove("shang")
					goodsarr.sort(function(a, b) {
						return b.price - a.price;
					})
					render(goodsarr);
					down = false;
				} else if(down == false) {
					e.target.children[0].classList.add("shang")
					e.target.children[0].classList.remove("xia")
					goodsarr.sort(function(a, b) {
						return a.price - b.price;
					})
					render(goodsarr);
					down = true;
				}
			}
			renqi.onclick = function(e) {
				if(down == true) {		
					e.target.children[0].classList.add("xia")
					e.target.children[0].classList.remove("shang")
					goodsarr.sort(function(a, b) {
						return b.sales - a.sales;
					})
					render(goodsarr);
					down = false;
				} else if(down == false) {
					e.target.children[0].classList.add("shang")
					e.target.children[0].classList.remove("xia")
					goodsarr.sort(function(a, b) {
						return a.sales - b.sales;
					})
					render(goodsarr);
					down = true;
				}
			}		
			xiaoliang.onclick = function(e) {
				if(down == true) {		
					e.target.children[0].classList.add("xia")
					e.target.children[0].classList.remove("shang")
					goodsarr.sort(function(a, b) {
						return b.sales - a.sales;
					})
					render(goodsarr);
					down = false;
				} else if(down == false) {
					e.target.children[0].classList.add("shang")
					e.target.children[0].classList.remove("xia")
					goodsarr.sort(function(a, b) {
						return a.sales - b.sales;
					})
					render(goodsarr);
					down = true;
				}
			}				
			zonghe.onclick = function(e) {
				if(down == true) {		
					e.target.children[0].classList.add("xia")
					e.target.children[0].classList.remove("shang")
					goodsarr.sort(function(a, b) {
						return b.id - a.id;
					})
					render(goodsarr);
					down = false;
				} else if(down == false) {
					e.target.children[0].classList.add("shang")
					e.target.children[0].classList.remove("xia")
					goodsarr.sort(function(a, b) {
						return a.id - b.id;
					})
					render(goodsarr);
					down = true;
				}
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