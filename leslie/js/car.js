window.addEventListener("DOMContentLoaded", function() {
	var carList = document.getElementsByClassName("settlement_c_content")[0];
//	var subPrice = document.getElementsByClassName("total")[0];
	var allPrice = document.getElementsByClassName("allPrice")[0];
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
		var alltotal = 0;
		carList.innerHTML = arr.map(function(item) {
			total = item.price * item.qty;
			alltotal += item.price * item.qty;
			return `<li class="carGoods" id="${item.id}">
	 		<div class="inp fl"><input type="checkbox" class="checkboxBtn" /></div>
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
	 				<span class="shuliang">${item.qty}</span>
	 				<input type="button" class="jia" value="+">
	 			</div>
	 		</div>
	 		<div class="total fl">${total.toFixed(2)}</div>
	 		<div class="delete">删除</div>
	 	</li>`
		}).join("");
		allPrice.innerHTML = alltotal.toFixed(2);
	}

	var checkboxAll = document.getElementById("checkboxAll");
	var checkedAll = document.getElementById("checkedAll");
	var checkboxBtn = document.getElementsByClassName("checkboxBtn");
	console.log(checkboxBtn)
	checkboxAll.onclick = function(){
		for(var i=0;i<checkboxBtn.length;i++){
            checkboxBtn[i].checked = checkboxAll.checked;
	    }
	}
	checkedAll.onclick = function(){
		for(var i=0;i<checkboxBtn.length;i++){
            checkboxBtn[i].checked = checkedAll.checked;
	    }
	}
	for(var i=0;i<checkboxBtn.length;i++){
        checkboxBtn[i].onclick = function(e){
            checkboxAll.checked = isCheckAll();
            checkedAll.checked = isCheckAll();
       }
    }
 	function isCheckAll(){
        var res = true;
        for(var i=0;i<checkboxBtn.length;i++){
            if(!checkboxBtn[i].checked){
                res = false;
                break;
            }
        }
        return res;
    }
	
	//删除商品
	var Cardelete = document.getElementById("Cardelete");
	console.log(Cardelete)
	Cardelete.onclick = function(){
		carList.innerHTML = "";
        allPrice.innerHTML = 0;
		Cookie.setCookie("goodslist");
	}



	jQuery(function($){
		console.log(arr)
		$(".jia").on("click",function(){
			var $qty = $(this).prev().html();
			$qty++;
			$(this).prev().html($qty);
			var $danjia = $(this).parent().parent().prev().html();
			var $jiage = $(this).parent().parent().next();
			$jiage.html(($danjia*$qty).toFixed(2));
			
			console.log(JSON.stringify(arr))
			Cookie.setCookie("goodslist", JSON.stringify(arr));
		})
		$(".jian").on("click",function(){
			var $qty = $(this).next().html();
			if($qty>1){
				$qty--;
			}
			$(this).next().html($qty);
			var $danjia = $(this).parent().parent().prev().html()
			var $jiage = $(this).parent().parent().next();
			$jiage.html(($danjia*$qty).toFixed(2))
		})
		
	})







})