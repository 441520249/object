document.addEventListener("DOMContentLoaded",function(){
	var mainShopImg = document.getElementById("mainShopImg");
	var shopName = document.getElementsByClassName("detail_b_news_header")[0];
	var price = document.getElementsByClassName("price")[0];
	var sales = document.getElementsByClassName("sales")[0];
	var discount = document.getElementsByClassName("discount")[0];
	
	var gid = location.search.slice(1).split("=")[1];
	console.log(location.search)
	//1.创建异步请求对象
	var xhr = new XMLHttpRequest();
	var lctSrcObj = {};
	//4.等待响应数据解析完毕，处理服务器返回数据 
	var status = [200, 304];
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
		lctSrcObj = JSON.parse(xhr.responseText)[0];
		//渲染
		mainShopImg.src = lctSrcObj.url;
		shopName.innerHTML = lctSrcObj.goodname;
		price.innerHTML = lctSrcObj.price;
		sales.innerHTML = lctSrcObj.sales;
		discount.innerHTML = lctSrcObj.discount;
		}
	}
	//2.建立与服务器连接,设置请求参数 open(type,url,async)
	xhr.open("get", `../api/detail.php?gid=${gid}`, true);
	// 3.发送请求 send()
	xhr.send(null);


	//购物车
	var shopCar = document.getElementsByClassName("shopCar")[0];
	var jia = document.getElementsByClassName("jia")[0];
	var jian = document.getElementsByClassName("jian")[0];
	var shuliang = document.getElementsByClassName("shuliang")[0];
	var qtyd = 1;
	jia.onclick = function(){
		qtyd++
		shuliang.innerHTML = qtyd;
	}
	jian.onclick = function(){
		if(qtyd > 1){
			qtyd--
		}
		shuliang.innerHTML = qtyd;
	}
	var getBuycar = document.getElementById("getBuycar");
	var arr = Cookie.getCookie("goodslist") || [];
        if(typeof arr == "string"){
            arr = JSON.parse(arr);
        }
	getBuycar.onclick = function(){
		lctSrcObj.qty = shuliang.innerHTML ;
		console.log(lctSrcObj.qty)
		var gid = lctSrcObj.id;
		var i;
		var res = arr.find(function(item,idx){
			i = idx;
			return item.id == gid
		});
		if(res){
			arr[i].qty = arr[i].qty*1+lctSrcObj.qty*1;
		}else{
			arr.push(lctSrcObj)
		}
		Cookie.setCookie("goodslist",JSON.stringify(arr));
		console.log(arr)
		
		//飞去购物车
		var cloneImg = mainShopImg.cloneNode();
		cloneImg.classList.add('clone-img');
		cloneImg.style.left = mainShopImg.offsetLeft+400 + 'px';
        cloneImg.style.top = mainShopImg.offsetTop+400 + 'px';
        document.body.appendChild(cloneImg);
        animation(cloneImg,{left:shopCar.offsetLeft+200,top:shopCar.offsetTop},30,function(){
        	document.body.removeChild(cloneImg);
        });
	}
		
	
	//放大镜
	 jQuery(function($){
            var $ampBox=$("#ampBox");
            var $img=$("#ampBox img");
            var $sp=$(".sp");
            var $imgBox=$(".imgBox");
            var $imgBig=$(".imgBox img");
            $ampBox.on("mouseover",function(){
                $sp.css("display","block");
                $imgBox.css("display","block"); 
            }).on("mouseout",function(){
                $sp.css("display","none");
                $imgBox.css("display","none"); 
            }).on("mousemove",function(e){
                var scale=3;
                $sp.css({width:$ampBox.outerWidth()/scale,height:$ampBox.outerHeight()/scale});
                $imgBig.attr("src",$img[0].src).css({width:$ampBox.outerWidth()*scale});
                var $ox=e.pageX-$ampBox[0].offsetLeft-$sp.outerWidth()/2;
                var $oy=e.pageY-$ampBox[0].offsetTop-$sp.outerHeight()/2;
                if($ox<=0){
                    $ox=0
                }else if($ox>=$ampBox.outerWidth()-$sp.outerWidth()){
                    $ox=$ampBox.outerWidth()-$sp.outerWidth();
                }
                if($oy<=0){
                    $oy=0
                }else if($oy>=$ampBox.outerHeight()-$sp.outerHeight()){
                    $oy=$ampBox.outerHeight()-$sp.outerHeight();
                }
                $sp.css({left:$ox,top:$oy});
                $imgBig.css({marginTop:-$oy*scale,marginLeft:-$ox*scale});
            })
        })




})