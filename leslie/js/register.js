document.addEventListener("DOMContentLoaded",function(){
	//判断是否手机号
	var phoneNum = document.getElementsByClassName("phoneNum")[0];
	var phoneOutput = document.getElementById("phoneOutput");
	var status = [200,304];
	phoneNum.onblur = function(){
		if(checkPhone(phoneNum.value) == false){
			phoneOutput.innerHTML = "请输入你的手机号码"
			phoneNum.value ="";
		}else if(checkPhone(phoneNum.value) == true){
			phoneOutput.innerHTML = ""
			//1.创建异步请求对象
			var xhr = new XMLHttpRequest();		
			//4.等待响应数据解析完毕，处理服务器返回数据 
		        xhr.onreadystatechange = function(){
		            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
		             	 phoneOutput.innerHTML = xhr.responseText;
	//	             	 console.log(xhr.responseText)
		            }
		        }
		    //2.建立与服务器连接,设置请求参数 open(type,url,async)
			xhr.open("get",`../api/register.php?phoneNum=${phoneNum.value}`,true);
			// 3.发送请求 send()
			xhr.send(null);
		}
	}
	//检查手机号
	function checkPhone(num){ 
    var phone = num;
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){  
        return false; 
       }else{
       	return true;
       }
	}
	//设置密码
	var setPassword = document.getElementsByClassName("setPassword")[0];
	setPassword.onblur = function(){
		if(!/^\S{6,20}$/.test(setPassword.value)){
		phoneOutput.innerHTML = "密码格式不合法"
		setPassword.value ="";
        return;
        }else{
        	phoneOutput.innerHTML = "";
        }
	}
	//二次密码
	var confirmPassword = document.getElementsByClassName("confirmPassword")[0];
	confirmPassword.onblur = function(){
		if(confirmPassword.value != setPassword.value){
		phoneOutput.innerHTML = "密码不一致"
		setPassword.value ="";
		confirmPassword.value ="";
        return;
        }else{
        	phoneOutput.innerHTML = "";
        }
	}
	//获取验证码
	var getRandomBtn = document.getElementById("getRandomBtn");
	getRandomBtn.onclick = function(){
		getRandomBtn.value = cal();
	}
	function cal(){
		randomMa="";
		var randomarr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','0','P','Q','R','S','T','U','V','W','X','Y','Z'];
		for(i=0;i<4;i++){
			randomMa = randomMa + randomarr[parseInt(Math.random()*62)];
		}
	    return randomMa ;
	}
	//点击按钮判断
	var getRandom = document.getElementsByClassName("getRandom")[0];
	var registerBtn = document.getElementById("registerBtn");
	var check = document.getElementById("check")
	registerBtn.onclick = function(){
		if((phoneNum.value).trim()=="" || (setPassword.value).trim()=="" || (confirmPassword.value).trim()=="" ){
			alert("请输入全部信息");
		}else if(inp.checked == false){
			alert("请勾选")
		}else if(getRandom.value == randomMa){
			alert("验证成功");
//			location.href = '../index.html';
		}else if(getRandom.value != randomMa){
			alert("您的验证码有误");
			cal();
		}
		var register = true;
		var xhr = new XMLHttpRequest();		 
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
	             	  console.log(xhr.responseText);
	            }
	        }
	        console.log(phoneNum.value,setPassword.value)
		xhr.open('get',`../api/register.php?phoneNum=${phoneNum.value}&setPassword=${setPassword.value}&register=${register}`,true);
		xhr.send(null);   
	}
	
	
	






	
})