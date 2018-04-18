//初始化加载
$(function(){
	
});


//版本信息--获取
function VersionInfo(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//版本升级--提交
function VserionUpdate(){
	layer.msg("开始提交....");
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
