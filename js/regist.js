var n=5;
var timer;
var flag;
$(function(){
	var count=localStorage.count;
	$(".phonenum").html(localStorage.getItem("phone"+count)+"").addClass('num');
	$(".randomcode").html(generateRandomCode()+"").addClass('codeshow');
	$(".time").click(function(){
		timer=setInterval(timeshow, 1000);
	});
	$(".mycode").blur(function(){
		checkcode();
	});
	$(".ok").click(function(){
		checkregist();
	})
})
//验证码生成
function generateRandomCode(){
			var str="";
			for(i=1;i<=4;i++){
				var n=Math.floor(Math.random()*62);
				if(n<10){
					str+=n;
				}else if(n<36){
					str+=String.fromCharCode(65+n-10);
				}else{
					str+=String.fromCharCode(97+n-36);
				}
			}
			return str;
}
//倒计时
function timeshow(){
			n--;
			$(".times").html(n+"");
			if(n==0){
				n=5;
				$(".times").html(n+"");
				$(".randomcode").html(generateRandomCode()+"").addClass('codeshow');
				clearInterval(timer);
			}
		}
//验证验证码
function checkcode(){
	if($(".mycode").val().toUpperCase()==$(".randomcode").text().toUpperCase()){
		$(".codeerror").html("✅");
		flag=true;
	}else{
		$(".codeerror").html("❌");
		flag=false;
	}
}
function checkregist(){
	if(flag){
		location.href="login.html";
	}
}







