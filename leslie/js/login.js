window.addEventListener("DOMContentLoaded",function(){
	var username = document.getElementById("useName");
    var usePassword = document.getElementById("usePassword");
    var btnSubmit = document.getElementById("loginBtn");
    var checkbox = document.getElementById("useCheckbox"); 
 
	
	
//	var register = true;
//		var xhr = new XMLHttpRequest();		 
//	        xhr.onreadystatechange = function(){
//	            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
//	             	  console.log(xhr.responseText);
//	            }
//	        }
////	        console.log(username.value,usePassword.value)
//		xhr.open('get',`../api/register.php?username=${username.value}&setPassword=${usePassword.value}&register=${register}`,true);
//		xhr.send(null);   
	
	
	var useNameOutput = document.getElementById("useNameOutput");
	var status = [200,304];
	username.onblur = function(){
			//1.创建异步请求对象
			var xhr = new XMLHttpRequest();		
			//4.等待响应数据解析完毕，处理服务器返回数据 
		        xhr.onreadystatechange = function(){
		            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
		             	 useNameOutput.innerHTML = xhr.responseText;
		             	 console.log(xhr.responseText)
		            }
		        }
		    //2.建立与服务器连接,设置请求参数 open(type,url,async)
			xhr.open('get',`../api/login.php?username=${username.value}&setPassword=${usePassword.value}`,true);
			// 3.发送请求 send()
			xhr.send(null);
		}
	
	
//	if(checkbox.checked){            	 
//      var d = new Date();
//      d.setDate(d.getDate()+7);
//      document.cookie = "uname="+_uname+"; expires="+d.toUTCString()+"; path=/";
//      document.cookie = `upwd=${_upwd};expires=${d.toUTCString()};path=/`;
//		document.cookie = "uname="+_uname+";path=/";
//		document.cookie = `upwd=${_upwd};path=/`;
//		Cookie.setCookie("uname",_uname,'','/')
//		Cookie.setCookie("upwd",_upwd,'','/')
//  }
//	var cookie = document.cookie.split("; ");
//	cookie.forEach(function(item){
//      var arr = item.split("=");
//      if(arr[0] == "uname"){
//    location.href="../index.html";
//      }
//  })
	 btnSubmit.onclick = function(e){
            e.preventDefault();
            var _uname = username.value.trim();
            var _upwd = usePassword.value.trim();
            if(_uname.length == 0 || _upwd.length == 0){
                alert("不能为空");
                return;
            }
			Cookie.setCookie("uname",_uname,'','/')
			Cookie.setCookie("upwd",_upwd,'','/')
      location.href="../index.html";
        }
	
	
	
	
	
})