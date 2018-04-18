//初始化加载
$(function(){
});

//PING--提交
function Ping(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}


//选择诊断方式
$(function(){
	$('input[name="identity"]').change(function() { 
	var Diagtype=$('input[name="identity"]:checked').val();
    if(Diagtype==1){
    	$('.Ping').css("display", "block");
    	$('.DiagT').text("Ping");
    	$('.operateType').text("Ping");
    	$('.TraceRoute').css("display", "none");
    }else{
    	$('.TraceRoute').css("display", "block");
    	$('.DiagT').text("TraceRoute");
    	$('.operateType').text("TraceRoute");
    	$('.Ping').css("display", "none");
    }
    });
});