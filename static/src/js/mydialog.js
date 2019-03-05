require(["zepto","dialog"], function($,dialog) {
     $(".tast1").click(function(){
     	 dialog.w('<span class="icon-ask-circle"></span>密码不对-！',function(){
     	 	 alert(123);
     	 });
     })
})