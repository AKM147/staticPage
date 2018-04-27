//初始化加载
$(function(){

	  if($.cookie('netstats')!=1){
	  		  alert("非法访问");
	  		  window.location.replace("login.html");
	  }
});
