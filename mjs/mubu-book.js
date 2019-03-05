var fg=1;
function shield(){

fg++;time=null;
if(fg%2==0){
$("#bluebgs").animate({opacity:"1"},"normal");
$("#z-nav2").animate({opacity:"1"},"normal");

var s = document.getElementById("bluebgs");
 clearTimeout(time); 
   s.style.display = "block";
var z = document.getElementById("z-nav2");
 clearTimeout(time); 
  

	}else{
	$("#z-nav2").animate({opacity:"0"},"normal");
	$("#bluebgs").animate({opacity:"0"},"normal");
	var s = document.getElementById("bluebgs");
    time=setTimeout(function(){
           s.style.display='none';
      },500);	
	  
	var z = document.getElementById("z-nav2");
    time=setTimeout(function(){
           s.style.display='none';
      });  
	  
	}
}

//图片点击切换
 $(function(){
  $("#mupic1").mouseover(function(){
    $("#mupic1").css("display","none");
	 $("#mupic1-1").css("display","block");
  });
    $("#mupic1-1").mouseout(function(){
  $("#mupic1").css("display","block");
	 $("#mupic1-1").css("display","none");
  });
  
   $("#mupic2").mouseover(function(){
    $("#mupic2").css("display","none");
	 $("#mupic1-2").css("display","block");
  });
    $("#mupic1-2").mouseout(function(){
  $("#mupic2").css("display","block");
	 $("#mupic1-2").css("display","none");
  });
  
    
});
