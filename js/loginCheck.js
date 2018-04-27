//打开字滑入效果
window.onload = function(){
	$(".connect p").eq(0).animate({"left":"0%"}, 600);
	$(".connect p").eq(1).animate({"left":"0%"}, 400);
};
//jquery.validate表单验证
$(document).ready(function(){
	jQuery.validator.addMethod("phone_number", function(value, element) { 
		var length = value.length; 
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/ 
		return this.optional(element) || (length == 11 && phone_number.test(value)); 
	}, "手机号码格式错误"); 
});
function validate(){
//	$(".password").val($.md5($(".password").val()));
	return $("#loginForm").validate({
		rules:{
			username:{
				required:true,//必填
			},
			password:{
				required:true,
			},
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
			},
			password:{
				required:"必须填写密码",
			},
		},

	})
}
function loginCheck(){
	//登陆表单验证
	if(validate().form()){
      $.cookie('netstats', '1'); 		//验证通过
		alert("开始提交");
		/*$.ajax({
		type:"get",
		url:"/goform/settingAPN1111",
		async:true,
		data : $("#loginForm").serialize(),
		success:function(data){
			console.log("fanhuizhi"+data)
		}
	});*/
	}
}
