//初始化加载
$(function(){
	
});

//模块信息--获取
function ModuleInfo(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//模块升级--提交
function ModuleUpdate(){
	layer.msg("开始提交....");
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
	
}
