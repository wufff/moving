define(['fastClick'], function(fastClick) {
	// fastClick
	fastClick.attach(document.body);
	// 返回按钮
	if(document.querySelector(".back")){
		document.querySelector(".back").onclick = function() {
		window.history.go(-1);
	    }
	}
})