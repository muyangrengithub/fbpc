var count=localStorage.count;
var flag=false;
$(function(){
	//doTest();
	//显示登录名
	$(".loginname").html(localStorage.getItem("phone"+count)+"");
	//点击立即登录弹出登陆界面
	$(".dologin").click(function(){
		$(".over").slideDown("300");
		$(".pwdlogin").slideDown("300");
		n=0;
	})
	//点击切换登录模式
	$(".pwdlg").click(function(){
		$(".pwdlogin").show();
		$(".codelogin").hide();
	})
	$(".codelg").click(function(){
		$(".pwdlogin").hide();
		$(".codelogin").show();
	})
	//点击弹窗其他地方关闭弹窗
	$(".pwdlogin").parent().siblings().click(function()
	{	
		n++;
		if(n>=2){
			$(".over").slideUp("300");
			$(".pwdlogin").slideUp("300");
			n=0;
		}
	})
	//验证帐号密码是否一致
	$(".pwdo").blur(function(){
		flag=checkphonepwd();
	})
	//点击登录按钮判断转入成功页面
	$(".login1").click(function(){
		if(flag){
			location.href="success.html";
		}
	})
})
//测试专用
function doTest(){
			localStorage.clear();
			localStorage.phone1="13218000532";
			localStorage.phone2="13218000531";
			
			localStorage.password1="s12345";
			localStorage.password2="s123456";
			localStorage.email1="123@qq.com";
			localStorage.email2="123@sina.com";
	
			localStorage.count=2;

			console.log(localStorage);
		}
//验证帐号密码是否一致
function checkphonepwd(){
	var phone=$(".phoneo").val();
	var password=$(".pwdo").val();
	for(var i=1;i<=count;i++){
		var ph=localStorage.getItem("phone"+i);
		var pwd=localStorage.getItem("password"+i);
		if((phone==ph)&&(password==pwd)){
			$(".errorshow").slideUp("300");
			return true;
		}
	}
	$(".errorshow").slideDown("300");
   /* $(".phoneo").val()="";
	$(".pwdo").val()="";*/
	return false;
}