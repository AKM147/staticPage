//初始化加载
$(function(){
	
});


//版本信息--获取
function VersionInfo(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		success:function(data){
			
		}
	});
}

//版本升级--提交
function upldForm(){
	$.ajax({
		type:"post",
		url:"/goform/upldForm",
		enctype:"multipart/form-data",
		async:true,
		success:function(data){
			alert(data);
		}
	});
}

function uploadFileSubmit(){
	alert("ok")
}
