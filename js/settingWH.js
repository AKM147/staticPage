//初始化加载
$(function(){
	
});

//重启 --提交
function restartDevice(){
	layer.msg("开始重启了....");
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
//恢复出厂设置--提交
function RestoreSetting(){
	layer.msg("开始恢复出厂设置....");
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//下载配置文件--获取
function DownloadConfig(){
	layer.msg("开始下载配置文件....");
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//恢复配置文件--提交
function RestoreConfig(){
	layer.msg("已确定上传....");
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
