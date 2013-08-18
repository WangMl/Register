
function showTu1(src1,src2){
     $("#register1").css("display","block");
	  $("#register2").css("display","none");
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
   }
  
function showTu2(src1,src2){
     $("#register1").css("display","none");
	 $("#register2").css("display","block");
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
	 for(var i=1;i<4;i++){	 	 
	 $("#content"+i).css("display","none");
		 }
   }
 
      function showTu3(src1,src2){
     $("#register1").css("display","none");
	 $("#register2").css("display","block");
	 $("#manager1").css("display","none");
	 $("#manager2").css("display","block");
	 $("#information1").css("display","block");
	 $("#information2").css("display","none");
	  $("#container1").css("display","none");
     $("#container2").css("display","none");
	  $("#container3").css("display","block");
	   document.getElementById("jiantouc1").src=src1;
	   document.getElementById("jiantouc2").src=src2;
	   document.getElementById("jiantouc3").src=src2;
	 for(var i=1;i<4;i++){	 	 
	 $("#content"+i).css("display","none");
		 }
   }
/*container1部分*/
      function showJian1(src1,src2){

	   document.getElementById("jiantou1").src=src1;
	   document.getElementById("jiantou2").src=src2;
	   document.getElementById("jiantou3").src=src2;
	   }
	    function showJian2(src1,src2){
	   document.getElementById("jiantou2").src=src1;
	     document.getElementById("jiantou1").src=src2;
	   document.getElementById("jiantou3").src=src2;
	   }
	    function showJian3(src1,src2){
	   document.getElementById("jiantou3").src=src1;
	    document.getElementById("jiantou1").src=src2;
	    document.getElementById("jiantou2").src=src2;	  
	   }
	   function brancha1(){
	    $("#content1").css("display","block");
		  $("#content2").css("display","none");
		   $("#content3").css("display","none");
	   }
	  function brancha2(){
	    $("#content1").css("display","none");
		  $("#content2").css("display","block");
		   $("#content3").css("display","none");
	   }
	    function brancha3(){
	    $("#content1").css("display","none");
		  $("#content2").css("display","none");
		   $("#content3").css("display","block");
	   }
      function hideJian4(src){
	    document.getElementById("jiantou4").src=src;
	   }
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
/*container2部分*/
function showJianb1(src1,src2){

	   document.getElementById("jiantoub1").src=src1;
	   document.getElementById("jiantoub2").src=src2;
	   }
function showJianb2(src1,src2){
	   document.getElementById("jiantoub2").src=src1;
	     document.getElementById("jiantoub1").src=src2;
	   }
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

      function branchb1(){
	    $("#contentb1").css("display","block");
		  $("#contentb2").css("display","none");
	   }
	  function branchb2(){
	    $("#contentb1").css("display","none");
		  $("#contentb2").css("display","block");
	   }
/*container3部分*/
  function showJianc1(src1,src2){

	   document.getElementById("jiantouc1").src=src1;
	   document.getElementById("jiantouc2").src=src2;
	    document.getElementById("jiantouc3").src=src2;
	   }
  function showJianc2(src1,src2){
	   document.getElementById("jiantouc2").src=src1;
	     document.getElementById("jiantouc1").src=src2;
		  document.getElementById("jiantouc3").src=src2;
	   }
  function showJianc3(src1,src2){
	   document.getElementById("jiantouc2").src=src2;
	     document.getElementById("jiantouc1").src=src2;
		  document.getElementById("jiantouc3").src=src1;
	   }
  
       function changec1(){
		 $("#itermc1").addClass("toumingb");
		   }
       function startc1(){
		 $("#itermc1").removeClass("toumingb");
		   }
       function changec2(){
		 $("#itermc2").addClass("toumingb");
		   }
       function startc2(){
		 $("#itermc2").removeClass("toumingb");
		   }
	   function changec3(){
		 $("#itermc3").addClass("toumingb");
		   }
       function startc3(){
		 $("#itermc3").removeClass("toumingb");
		   }
        function branchc1(){
	    $("#contentc1").css("display","block");
		  $("#contentc2").css("display","none");
		   $("#contentc3").css("display","none");
	   }
	    function branchc2(){
	    $("#contentc1").css("display","none");
		  $("#contentc2").css("display","block");
		   $("#contentc3").css("display","none");
	   }
	    function branchc3(){
	    $("#contentc1").css("display","none");
		  $("#contentc2").css("display","none");
		   $("#contentc3").css("display","block");
	   }

	