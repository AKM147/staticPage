//初始化加载
$(function(){
	doWork();
	deviceInfo();
	setInterval('doWork()',10000);
});
function doWork(){
	sysInfo();
	WANStatus();
	LANStatus();
}
//系统信息

function sysInfo(){
	$.ajax({
		type:"get",
		url:"/goform/sysInfo",
		async:true,
		dataType:'json',
		success:function(data){
			$('#uptime').text(data.uptime);
		}
	});
}
//设备信息
function deviceInfo(){
	$.ajax({
		type:"get",
		url:"/goform/deviceInfo",
		async:true,
		dataType:'json',
		success:function(data){
			//alert(data.product_Modle);
			$('#product_Name').text(data.product_Name);
			$('#product_Modle').text(data.product_Modle);
			$('#hw_ver').text(data.hw_ver);
			$('#fw_ver').text(data.fw_ver);

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
		url:"/goform/WANStatus",
		async:true,
		dataType:'json',
		data:{
			//name:"zhangsan",
			//age:18
		},
		success:function(data){	
			$('#netmode').text(data.netmode);
			$('#netStatus').text(data.netStatus);
			$('#simStatus').text(data.simStatus);
			$('#ecmStatus').text(data.ecmStatus);
			$('#csq').text(data.csq);
			$('#APN').text(data.apn);
			$('#wanip').text(data.wanip);
			$('#wanmask').text(data.wanmask);
			$('#wanmac').text(data.wanmac);
		}
	});
}

//LAN口状态
function LANStatus(){
	$.ajax({
		type:"get",
		url:"/goform/LANStatus",
		async:true,
		dataType:'json',
		success:function(data){
			$('#lanIp').text(data.lanip);
			$('#lanMask').text(data.lanmask);
			$('#lanMac').text(data.lanmac);			
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