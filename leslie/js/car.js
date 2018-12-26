window.addEventListener("DOMContentLoaded", function() {
	var carList = document.getElementsByClassName("settlement_c_content")[0];
	//var subPrice = document.getElementsByClassName("total")[0];
	var arr = Cookie.getCookie("goodslist") || [];

	if(typeof arr == "string") {
		arr = JSON.parse(arr);
	}
	render();

	carList.onclick = function(e) {
		if(e.target.className == "delete") {
			var cli = e.target.parentElement;
			var cid = cli.getAttribute("id")
			var i;
			arr.some(function(item, idx) {
				console.log(item, idx)
				i = idx;
				return item.id == cid;
			})
			arr.splice(i, 1)
			render();
			Cookie.setCookie("goodslist", JSON.stringify(arr));
		}
	}

	function render() {
		var total = 0;
		carList.innerHTML = arr.map(function(item) {
			total = item.price * item.qty;
			return `<li class="carGoods" id="${item.id}">
	 		<div class="inp fl"><input type="checkbox" id="checkboxBtn" /></div>
	 		<div class="img fl"><img src="${item.url}" /></div>
	 		<div class="con fl">
	 			<p>${item.goodname}</p>
	 			<p>赠品</p>
	 		</div>
	 		<div class="style fl">
	 			<p>颜色：共同</p>
	 			<p>款式：共同</p>
	 		</div>
	 		<div class="price fl">${item.price}</div>
	 		<div class="quantity fl">
	 			<div class="btn">
	 				<input type="button" class="jian" value="-">
	 				<span>${item.qty}</span>
	 				<input type="button" class="jia" value="+">
	 			</div>
	 		</div>
	 		<div class="total fl">${total}</div>
	 		<div class="delete">删除</div>
	 	</li>`

		}).join("");
	}

})