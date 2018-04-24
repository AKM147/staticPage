//初始化加载
$(function(){
});

//模块信息
function ModuleInfo(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
		}
	});
}

//APN设置--提交
function SettingAPN(){
	$.ajax({
		type:"get",
		url:"/goform/settingAPN",
		async:true,
		data:{
			apn:$('#apn').val(),
		},
		success:function(data){
			console.log("fanhuizhi"+data)
			alert(data)
		}
	});
}

//APN设置--提交
function QueryAPN(){
	$.ajax({
		type:"get",
		url:"/goform/queryAPN",
		async:true,
		success:function(data){
			console.log("fanhuizhi"+data)
			apn:$('#apn').val(data)
			
		}
	});
}