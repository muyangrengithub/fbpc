$(function(){
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var flag5=false;
	doTest();
	doRegist();
	checkPhone();
	checkpassword();
	checkrepassword();
	checkemail();
	checkcode();
	console.log(localStorage);

//测试
function doTest(){
			/* localStorage.clear();*/
			localStorage.phone1="13218000532";
			localStorage.phone2="13218000531";
			
			localStorage.password1="s12345";
			localStorage.password2="s123456";
			localStorage.email1="123@qq.com";
			localStorage.email1="123@sina.com";
	
			localStorage.count=2;

			console.log(localStorage);
		}
//注册
function doRegist(){
	$(".submit").click(function(){
		if(flag1&&flag2&&flag3&&flag4&&flag5&&$("#read")[0].checked){
			var count=localStorage.count;
			if(!count){ 
				count=1;
			}else{
				count++;
			}

			localStorage.setItem("phone"+count,$("#phone").val());
			localStorage.setItem("password"+count,$("#password").val());
			localStorage.setItem("email"+count,$("#email").val());
			localStorage.setItem("count",count);
			location.href="regist.html";
		}
	})
	
}
//验证手机格式
function checkPhone(){
	$("#phone").blur(function(){
		//检测格式
		var reg=/^[1][0-9]{10}$/;
		var str=$(this).val();
		if(reg.test(str)){
			$(".phonei").show();
			$(".phonei2").hide();
			$(".phones").hide();
			$(this).css("border","1px solid #dadada");
			flag1=true;		
		}else{
			$(".phonei2").show();
			$(".phones").show();
			$(".phonei").hide();
			$(this).css("border","1px solid #fd874c");
			$(".phones").html('<img src="images/icon21.png" alt="">手机格式不正确');
		}
		//检查手机号是否存在
		var count=localStorage.count;
		for(var i=1; i<=count; i++){
			var phone=localStorage.getItem("phone"+i);
			if(phone==$(this).val()){
				$(".phonei2").show();
				$(".phones").show();
				$(".phonei").hide();
				$(this).css("border","1px solid #fd874c");	
				$(".phones").html('<img src="images/icon21.png" alt="">手机号已存在');
				flag1=false;
			}
		}
	})
}
//验证密码格式
function checkpassword(){
	$("#password").blur(function(){
		var reg=/^[a-z\$][\w\$\-]{2,9}$/i;
		var str=$("#password").val();
		if(reg.test(str)){
			$(".passwordi").show();
			$(".passwordi2").hide();
			$(".passwords").hide();
			$("#password").css("border","1px solid #dadada");
			flag2=true;		
		}else{
			$(".passwordi2").show();
			$(".passwords").show();
			$(".passwordi").hide();	
			$("#password").css("border","1px solid #fd874c");
		}
	})
}
//验证密码是否一致
function checkrepassword(){
	$("#repassword").blur(function(){
		if(($(this).val()==$("#password").val())&&($(this).val()!="")){
			$(".repasswordi").show();
			$(".repasswordi2").hide();
			$(".repasswords").hide();
			$(this).css("border","1px solid #dadada");
			flag3=true;	
		}else{
			$(".repasswordi2").show();
			$(".repasswords").show();
			$(".repasswordi").hide();
			$(this).css("border","1px solid #fd874c");	
		}
	})
}
//验证邮箱格式
function checkemail(){
	$("#email").blur(function(){
		var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
		var str=$("#email").val();
		if(reg.test(str)){
			$(".emaili").show();
			$(".emaili2").hide();
			$(".emails").hide();
			$(this).css("border","1px solid #dadada");
			flag4=true;		
		}else{
			$(".emaili2").show();
			$(".emails").show();
			$(".emaili").hide();
			$(this).css("border","1px solid #fd874c");		
		}
	})
}
//验证验证码
function checkcode(){
	$("#code").blur(function(){
		if($(this).val()=="nodick"){
			$(".codes").html('<img src="images/icon35.png" alt="">');
			$(this).css("border","1px solid #dadada");
			flag5=true;		
		}else{
			$(".codes").html('<img src="images/icon21.png" alt="">');
			$(this).css("border","1px solid #fd874c");	
		}
	})
}
})




