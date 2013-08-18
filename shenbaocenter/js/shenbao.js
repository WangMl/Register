
//导航栏控制
function showTu1(src1,src2){
     $("#fabu1").css("display","block");
	  $("#fabu2").css("display","none");
	  $("#manager1").css("display","none");
	  $("#manager2").css("display","block");
	  $("#information1").css("display","none");
	  $("#information2").css("display","block");
	  $("#container1").css("display","block");
	  $("#container2").css("display","none");
	  $("#container3").css("display","none");
	  $("#content1").css("display","block");	  
	   document.getElementById("jiantou1").src=src1;
	   document.getElementById("jiantou2").src=src2;
	   document.getElementById("jiantou3").src=src2;
	    document.getElementById("jiantou4").src=src2;
	   document.getElementById("jiantou5").src=src2;
   }
  
function showTu2(src1,src2){
     $("#fabu1").css("display","none");
	 $("#fabu2").css("display","block");
	 $("#manager1").css("display","block");
	 $("#manager2").css("display","none");
	 $("#information1").css("display","none");
	 $("#information2").css("display","block");
	 $("#container1").css("display","none");
     $("#container2").css("display","block");
	  $("#container3").css("display","none");
	$("#contentb1").css("display","block");
	  document.getElementById("jiantoub1").src=src1;
	   document.getElementById("jiantoub2").src=src2;
	 for(var i=1;i<6;i++){	 	 
	 $("#content"+i).css("display","none");
		 }
   }
 
      function showTu3(src1,src2){
     $("#fabu1").css("display","none");
	 $("#fabu2").css("display","block");
	 $("#manager1").css("display","none");
	 $("#manager2").css("display","block");
	 $("#information1").css("display","block");
	 $("#information2").css("display","none");
	  $("#container1").css("display","none");
     $("#container2").css("display","none");
	  $("#container3").css("display","block");
	   document.getElementById("jiantouf1").src=src1;
	   document.getElementById("jiantouf2").src=src2;

	 for(var i=1;i<6;i++){	 	 
	 $("#content"+i).css("display","none");
		 }
		 $("#content5").css("display","none"); 
   }
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
	  function changea1(){
		 $("#iterma1").addClass("touminga");
		   }
      function starta1(){
		 $("#iterma1").removeClass("touminga");
		   }
		    function changea2(){
		 $("#iterma2").addClass("touminga");
		   }
      function starta2(){
		 $("#iterma2").removeClass("touminga");
		   }
		    function changea3(){
		 $("#iterma3").addClass("touminga");
		   }
      function starta3(){
		 $("#iterma3").removeClass("touminga");
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
//container2部分 
 //箭头显示
      function showJianb1(src1,src2){	 
	   document.getElementById("jiantoub2").src=src2;	
	   document.getElementById("jiantoub1").src=src1;
	   }
	    function showJianb2(src1,src2){
	   document.getElementById("jiantoub1").src=src2;	
	   document.getElementById("jiantoub2").src=src1;
	   }
	
//content切换
 function branchb1(){
		for(var i=1;i<3;i++){
		  $("#contentb"+i).css("display","none");
		}
	      $("#contentb1").css("display","block");
	   }
	  function branchb2(){
          for(var i=1;i<3;i++){
		  $("#contentb"+i).css("display","none");
		}
		  $("#contentb2").css("display","block");
	   }
	   //item透明度的改变	   
	  function changeb1(){
		 $("#itermb1").addClass("toumingb");
		   }
      function startb1(){
		 $("#itermb1").removeClass("toumingb");
		   }
		    function changeb2(){
		 $("#itermb2").addClass("toumingb");
		   }
      function startb2(){
		 $("#itermb2").removeClass("toumingb");
		   }
		    function changeb3(){
		 $("#itermb3").addClass("toumingb");
		   }
      function startb3(){
		 $("#itermb3").removeClass("toumingb");
		   }
		 
		 
 //container3部分
//箭头显示
      function showJianf1(src1,src2){	 
	   document.getElementById("jiantouf2").src=src2;	
	   document.getElementById("jiantouf1").src=src1;
	   }
	    function showJianf2(src1,src2){
	   document.getElementById("jiantouf1").src=src2;		   
	   document.getElementById("jiantouf2").src=src1;
	   } 
 
 //content切换
 function branchf1(){
		  $("#contentc2").css("display","none");
	      $("#contentc1").css("display","block");
	   }
	  function branchf2(){
         $("#contentc1").css("display","none");
	      $("#contentc2").css("display","block");
	   }

//item透明度的改变	   
	  function changef1(){
		 $("#itermf1").addClass("touming");
		   }
      function startf1(){
		 $("#itermf1").removeClass("touming");
		   }
		    function changef2(){
		 $("#itermf2").addClass("touming");
		   }
      function startf2(){
		 $("#itermf2").removeClass("touming");
		   }
		    function changef3(){
		 $("#itermf3").addClass("touming");
		   }
      function startf3(){
		 $("#itermf3").removeClass("touming");
		   }


