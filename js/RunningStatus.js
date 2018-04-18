//初始化加载
$(function(){
	deviceInfo();
});

//设备信息
function deviceInfo(){
	$.ajax({
		type:"get",
		url:"/goform/deviceInfo",
		async:true,
		success:function(data){
			alert(data);
		}
	});
}

//CPU使用率
function CPUUsageRate(){
	$.ajax({
		type:"post",
		url:"/goform/CPUUsageRate",
		async:true,
		data:{
			name:"zhangsan",
			age:18
		},
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