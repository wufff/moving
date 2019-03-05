define(['fade'], function(fade) {
	  var Mymodule = {};
	  Mymodule.w = function(text,fun,params){
	  	    var  body = document.getElementsByTagName("body")[0];
	  	    var div = document.createElement("div");
		   	div.id = "dialog-alert";
		   	div.className = "dialog-alert";
           if(!fun){
		         var html = '<div class="shade"></div>'
		            + '<div class="content" id="dialog-content">'
		            + '<div class="text"><span class="inner">'+ text +'</span></div>'
		            + '<div class="btn" id="dialog-alert-no">确定</div>'
		            + '</div>';
		     }else {
		           var html =  '<div class="shade"></div>'
		            + '<div class="content" id="dialog-content">'
		            + '<div class="text"><span class="inner">'+ text +'</span></div>'
		            + '<div class="btn">'
		            +'<span id="dialog-alert-no">取消</span>'
		            +'<span id="dialog-confirm-yes">确定</span>'
		            +'</div>'
		            + '</div>'; 
		     }
           div.innerHTML = html;
           body.appendChild(div);
           var  dialog = document.getElementById("dialog-alert");
           var  close = document.getElementById("dialog-alert-no");
           var yes = document.getElementById("dialog-confirm-yes");
           var content = document.getElementById("dialog-content");
           fade.fadeIn(content);
           close.onclick = function(){
           	   dialog.style.display = "none";
           	   body.removeChild(div);
           } 
           if(yes){
           	  yes.onclick = function(){
           	  	body.removeChild(div);
                fun(params); 
           	 }
           }
          
	  }
    return  Mymodule;
})