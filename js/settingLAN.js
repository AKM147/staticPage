//初始化加载
$(function(){
	
});

//LAN主机配置 --提交
function LANConfig(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//DHCP配置--提交
function DHCPConfig(){
	layer.msg("开始提交了......");
	/*$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});*/
}

//绑定地址列表--获取
function DeviceList(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//添加列表--提交
function AddDevice(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//是否启用
$(function(){
	$("#Enable").change(function() { 
	  if($(this).prop("checked")==true){
	  	 $('.ipsetting').removeAttr("disabled");
	  }else{
	  	$('.ipsetting').attr("disabled", true);
	  }
    });
});