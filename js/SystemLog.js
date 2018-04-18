//初始化加载
$(function(){
	
});

//配置网络--提交
function InternetConfig(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//配置本地--提交
function localConfig(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
//提取本地--提交
function lcoalExtract(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
	
}

//选择系统日志方式
$(function(){
	$('input[name="identity"]').change(function() { 
	var Diagtype=$('input[name="identity"]:checked').val();
    if(Diagtype==1){
    	$('.internet').css("display", "block");
    	$('.logSrc').text("网络");
    	$('.localhost').css("display", "none");
    }else{
    	$('.localhost').css("display", "block");
    	$('.logSrc').text("本地");
    	$('.internet').css("display", "none");
    }
    });
});