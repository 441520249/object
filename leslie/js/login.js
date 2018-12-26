window.addEventListener("DOMContentLoaded",function(){
	var username = document.getElementById("useName");
    var password = document.getElementById("usePassword");
    var btnSubmit = document.getElementById("loginBtn");
    var checkbox = document.getElementById("useCheckbox"); 
    // console.log(cookie)
    var cookie = document.cookie.split("; ");
	cookie.forEach(function(item){
        var arr = item.split("=");
        if(arr[0] == "uname"){
      location.href="../index.html";
        }
    })
	 btnSubmit.onclick = function(e){
            e.preventDefault();
            var _uname = username.value.trim();
            var _upwd = password.value.trim();
            if(_uname.length == 0 || _upwd.length == 0){
                alert("不能为空");
                return;
            }
            if(checkbox.checked){
                var d = new Date();
                d.setDate(d.getDate()+7);
                document.cookie = "uname="+_uname+"; expires="+d.toUTCString()+"; path=/";
//              document.cookie = "upwd="+_upwd+"; expires="+d.toUTCString();
                document.cookie = `upwd=${_upwd};expires=${d.toUTCString()};path=/`;
            }
      location.href="../index.html";
        }
	
	
	
})