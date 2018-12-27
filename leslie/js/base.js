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
	//登录
	var topLogin = document.getElementById("topLogin");
	var topLoginName = document.getElementById("topLoginName");
	var topLoginOut = document.getElementById("topLoginOut");

	var obj={};
	var brr = document.cookie.split("; ");
//	console.log(brr)
	brr.forEach(function(item){
        var crr = item.split("=");
        obj[crr[0]] =  crr[1]; 
//      console.log(obj)
	})
	if(document.cookie == ''){
		topLoginName.style.display = 'none'
		topLoginOut.style.display = 'none'
	}
	else if(document.cookie != ''){
		topLoginName.style.display = 'inline-block'
		topLoginOut.style.display = 'inline-block'
		topLoginName.innerHTML = obj.uname;
		topLoginOut.innerHTML = "退出";
		topLogin.style.display = 'none'
	}
	topLoginOut.onclick = function(){
		topLogin.innerHTML = "请登录";
		topLoginName.innerHTML = '';
		topLoginOut.innerHTML = "";
		Cookie.delCookie("uname",'/')
		Cookie.delCookie("upwd",'/')
	}
	
})