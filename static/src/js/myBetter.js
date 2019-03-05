// 用zepto有问题用原生没问题
require(["zepto","better"], function($,Better) {
	 var scrollWrap = document.querySelector(".betterWrap");
	 var p = 1;

     for(var i = 0;i<20;i++){
     	  $(".content").append('<div class="li"><a href="https://www.baidu.com">'+ (i+1)+(i+1)+(i+1)+'</a></div>');
     }
   

    let wrap = document.querySelector('.betterWrap');
	let list = document.querySelector('.content');
	let bScroll = new Better(wrap,{
		click:true,
		pullUpLoad: {
			threshold: 50
		},
		pullDownRefresh: {
			threshold: -30,
			stop: 10
		} 
	});


   
  /* 下拉刷新 */
	bScroll.on("pullingDown",function(){
		list.classList.add("pullDown");
		
		setTimeout(function(){
			let inner = "";
			for (var i = 0; i < 20; i++) {
				inner += '<div class="li">这是新加的第'+i+'个li</div>'
			}
			list.innerHTML = inner;
			list.classList.remove("pullDown");
			list.classList.remove("pullUpover");
			bScroll.finishPullDown();
			bScroll.refresh();
			p = 1;
		},1000);
	});

   bScroll.on("pullingUp",function(){
       if(p == 4) {
       	    // $(".content").removeClass().addClass('pullUpover');
       	    list.classList.remove("pullingUp");
       	     list.classList.add("pullUpover");
       	     bScroll.finishPullUp();
       	     bScroll.refresh();
       }else{
       	   $(".content").addClass('pullingUp');
       	   setTimeout(function(){
	       	 var currut = p*20;
	       	 var nextLast = currut + 20;
	         for(var i = currut;i< nextLast;i++){
	     	  $(".content").append($('<div class="li">'+ (i+1)+'</div>'));
	     	  bScroll.finishPullUp();
	     	  bScroll.refresh();
	        }
	         p ++;
	           console.log(p)
	       },800) 
	      
       }
   })



 

  

})