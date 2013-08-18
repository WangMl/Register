
//箭头显示
      function showJian1(src1,src2){	 
	   for(var i=1;i<6;i++){
	   document.getElementById("jiantou"+i).src=src2;	
	   }
	   document.getElementById("jiantou1").src=src1;
	   }
	    function showJian2(src1,src2){
	    for(var i=1;i<6;i++){
	   document.getElementById("jiantou"+i).src=src2;	
	   }
	   document.getElementById("jiantou2").src=src1;
	   }
	    function showJian3(src1,src2){
	   for(var i=1;i<6;i++){
	   document.getElementById("jiantou"+i).src=src2;	
	   }
	   document.getElementById("jiantou3").src=src1;  
	   }
	    function showJian4(src1,src2){
	   for(var i=1;i<6;i++){
	   document.getElementById("jiantou"+i).src=src2;	
	   }
	   document.getElementById("jiantou4").src=src1;  
	   }
	    function showJian5(src1,src2){
	   for(var i=1;i<6;i++){
	   document.getElementById("jiantou"+i).src=src2;	
	   }
	   document.getElementById("jiantou5").src=src1;  
	   }
//content内容页的切换
	   function branch1(){
		for(var i=1;i<6;i++){
		  $("#content"+i).css("display","none");
		}
	      $("#content1").css("display","block");
		  for(var i=1;i<6;i++){
		  $("#page"+i).css("display","none");
		}
	      $("#page1").css("display","block");
	   }
	  function branch2(){
          for(var i=1;i<6;i++){
		  $("#content"+i).css("display","none");
		}
		  $("#content2").css("display","block");
		    for(var i=1;i<6;i++){
		  $("#page"+i).css("display","none");
		}
	      $("#page2").css("display","block");
	   }
	    function branch3(){
          for(var i=1;i<6;i++){
		  $("#content"+i).css("display","none");
		}
		   $("#content3").css("display","block");
		     for(var i=1;i<6;i++){
		  $("#page"+i).css("display","none");
		}
	      $("#page3").css("display","block");
	   }
	    function branch4(){
          for(var i=1;i<6;i++){
		  $("#content"+i).css("display","none");
		}
		   $("#content4").css("display","block");
		     for(var i=1;i<6;i++){
		  $("#page"+i).css("display","none");
		}
	      $("#page4").css("display","block");
	   }
	    function branch5(){
          for(var i=1;i<6;i++){
		  $("#content"+i).css("display","none");
		}
		   $("#content5").css("display","block");
		     for(var i=1;i<6;i++){
		  $("#page"+i).css("display","none");
		}
	      $("#page5").css("display","block");
	   }
//item透明度的改变	   
	  function change1(){
		 $("#iterm1").addClass("touming");
		   }
      function start1(){
		 $("#iterm1").removeClass("touming");
		   }
		    function change2(){
		 $("#iterm2").addClass("touming");
		   }
      function start2(){
		 $("#iterm2").removeClass("touming");
		   }
		    function change3(){
		 $("#iterm3").addClass("touming");
		   }
      function start3(){
		 $("#iterm3").removeClass("touming");
		   }
		    
	
<!--展现方法-->		
   function show(v1,v2){	   
	 	   for(var i=1;i<6;i++){
		    $("#gengduo"+v1+i).css("display","none");
		   }
		   
	    for(var i=1;i<6;i++){
		    $("#zhankai"+v1+i).css("display","block");
		   }
	    $("#zhankai"+v1+v2).css("display","none");
		   for(var i=1;i<6;i++){
		    $("#guanbi"+v1+i).css("display","none");
		   }
	    $("#guanbi"+v1+v2).css("display","block");
		   for(var i=1;i<6;i++){
		    $("#hide"+v1+i).css("display","none");
		   }
	   $("#hide"+v1+v2).css("display","block");
	  
	   $("#gengduo"+v1+v2).css("display","block");
    
	   for(var i=1;i<6;i++){
		    $("#empty"+v1+i).css("display","none");
		   }
	  $("#empty"+v1+v2).css("display","block");
	   }   
<!--隐藏方法-->
	 function hide(v1,v2){
		  for(var i=1;i<6;i++){
		    $("#guanbi"+v1+i).css("display","none");
		   }
	  $("#gengduoa"+v1).css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+v1+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+v1+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+v1+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+v1+i).css("display","none");
		   }
		 }
