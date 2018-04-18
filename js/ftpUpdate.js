//初始化加载
$(function(){
	
});

//FTP配置--提交
function FTPConfig(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}


//是否启用版本升级？
$(function(){
	$("#EnableFtp").change(function() { 
	  if($(this).prop("checked")==true){
       $('.setFtp').css("display", "block");
	  }else{
       $('.setFtp').css("display", "none");
	  }
    });
});