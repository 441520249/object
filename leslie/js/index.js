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
					
})