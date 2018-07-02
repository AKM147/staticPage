//初始化加载
$(function(){
	setInterval('getSecurityLog()',3000);
});

function getSecurityLog(){
	$.ajax({
		type:"get",
		url:"/goform/getSecurityLog",
		async:true,
		
		data:{
			/*pingAddr:$('#pingAddr').val(),
			pingCount:$('#pingCount').val(),*/
		},
		success:function(data){
			$('#logText').text(data);
		}
	});
}
/*	$("#checkSecurity").change(function() {
		if($("input[type='checkbox']").is(':checked')==false){
			$('#gw_ip').attr("disabled","disabled");
			$('#gw_port').attr("disabled","disabled");
			$('#submitt').attr("disabled","disabled");
			$('#cancel').attr("disabled","disabled");
		}else{
           $('#pingAddr1').removeAttr("disabled");
		   $('#pingAddr2').removeAttr("disabled");
		   $('#submitt').removeAttr("disabled");
		   $('#cancel').removeAttr("disabled")
		}*/

//});
//});

//PING--提交
function settingSecurity(){
	//alert("1");
	$.ajax({
		type:"get",
		url:"/goform/settingSecurity",
		async:true,
		data:{
			gw_ip:$('#gw_ip').val(),
			gw_port:$('#gw_port').val(),
			
		},
		
		success:function(data){
			alert(data);
			//$('#logText').text(data);
		}
	});
}

function querySecurity(){
	//alert("2");
	$.ajax({
		type:"get",
		url:"/goform/querySecurity",
		async:true,
		dataType:'json',
		success:function(data){
			$('#gw_ip').val(data.gw_ip);
			$('#gw_port').val(data.gw_port);
		}
	});
}


//添加

//移除



