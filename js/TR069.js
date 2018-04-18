//初始化加载
$(function(){
	
});

//FTP配置--提交
function TR069Config(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}


//是否启用TR069？
$(function(){
	$("#EnableTr069").change(function() { 
	  if($(this).prop("checked")==true){
       $('.setTR069').css("display", "block");
	  }else{
       $('.setTR069').css("display", "none");
	  }
    });
});