//初始化加载
$(function(){
// layer.msg('玩命加载中...', {icon: 16,shade: [0.5, '#999'],scrollbar: false,offset: 'c', time:100000}) ;  
});

//设备信息
function deviceInfo(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//CPU使用率
function CPUUsageRate(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}


//内存使用率
function MemoryUsageRate(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
//WAN口状态
function WANStatus(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//LAN口状态
function LANStatus(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}
//设备数量
function deviceCount(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}