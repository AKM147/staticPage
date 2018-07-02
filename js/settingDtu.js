//初始化加载
$(function(){
	
});

//LAN主机配置 --提交
function settingDtu(){
	$.ajax({
		type:"post",
		url:"/goform/settingDtu",
		async:true,
		data:{
			mode:$('#mode').val(),
			server_ip:$('#server_ip').val(),
			server_port:$('#server_port').val(),
			local_port:$('#local_port').val(),
			baudrate:$('#baudrate').val(),
			parity:$('#parity').val(),
			data_bit:$('#data_bit').val(),
			stop_bit:$('#stop_bit').val(),
		},
		
		success:function(data){ 
			alert(data);
		}
	});
}

//LAN主机配置 --查询
function queryDtu(){
	//alert("1");
	$.ajax({
		type:"get",
		url:"/goform/queryDtu",
		async:true,
		dataType:'json',
		success:function(data){
			//alert(data.local_port);
			$('#mode').val(data.mode);
			$('#server_ip').val(data.server_ip);
			$('#server_port').val(data.server_port);
			$('#local_port').val(data.local_port);
			$('#baudrate').val(data.baudrate);
			$('#parity').val(data.parity);
			$('#data_bit').val(data.data_bit);
			$('#stop_bit').val(data.stop_bit);
			
		}
	});
}

