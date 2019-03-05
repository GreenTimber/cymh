// 按钮动画  1
$(function(){

setTimeout (function()
{
 $(".niukou").fadeIn(1000);

    $(".niukou").animate({     // 按钮缩放;恢复透明度
      opacity:'1',
      height:'0.9rem',
      width:'0.9rem'
    },1000,function(){
	 
	 $("#shadow").fadeIn(1000);  // 阴影显示
	 $("#twenzi").fadeIn(1500);   // 文字显示 
   $("#msbox").animate({
      width:'2450px'
    },3000);
    });
	
	
	
setTimeout (function()      // 绳结显示
{	
   $(".jie1-1").fadeIn(900);
  
},3000);

setTimeout (function()      // 绳结显示
{
   $(".jie1-2").fadeIn(900);
},3500);  
setTimeout (function()      // 绳结显示
{
   $(".jie1-3").fadeIn(900);
},4000); 	
	

var rotation = function (){  // 旋转
   $(".niukou").rotate({
      angle:15, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();

setTimeout (function()    // 停止旋转;纠位
{
$(".niukou").stopRotate();
    $(".niukou").css({"-webkit-transform": "rotateX(0deg);"});
    $(".niukou").css({"-moz-transform":"rotateX(0deg)"});
    $(".niukou").css({"-ms-transform":"rotateX(0deg)"});
    $(".niukou").css({"-o-transform":"rotateX(0deg)"});
    $(".niukou").css({"transform":"rotateX(0deg)"});
},9000); 	
	
},500); 

});
// 纽扣2
$(function(){
setTimeout (function()
{
 $(".niukou2").fadeIn(1000);

    $(".niukou2").animate({
      opacity:'1',
       height:'0.9rem',
      width:'0.9rem'
       },1000,function(){
	    $("#shadow2").fadeIn(1000);
	 $("#twenzi2").fadeIn(1500);
   $("#msbox2").animate({
      width:'2450px'
    },3000);
    });
	
setTimeout (function()      // 绳结显示
{	
   $(".jie2-1").fadeIn(900);
  
},3000);

setTimeout (function()      // 绳结显示
{
   $(".jie2-2").fadeIn(900);
},3500); 
	
	
	
var rotation = function (){
   $(".niukou2").rotate({
      angle:15, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();

setTimeout (function()
{
$(".niukou2").stopRotate();
    $(".niukou2").css({"-webkit-transform": "rotateX(0deg);"});
    $(".niukou2").css({"-moz-transform":"rotateX(0deg)"});
    $(".niukou2").css({"-ms-transform":"rotateX(0deg)"});
    $(".niukou2").css({"-o-transform":"rotateX(0deg)"});
    $(".niukou2").css({"transform":"rotateX(0deg)"});
},9000); 	
	
},1000); 		
});
// 纽扣3

$(function(){
setTimeout (function()
{
 $(".niukou3").fadeIn(1000);

    $(".niukou3").animate({
      opacity:'1',
       height:'0.9rem',
      width:'0.9rem'
     },1000,function(){
	   $("#shadow3").fadeIn(1000);
	  $("#twenzi3").fadeIn(1500);
   $("#msbox3").animate({
      width:'2450px'
    },3000);
    });
	
	setTimeout (function()      // 绳结显示
{	
   $(".jie3-1").fadeIn(900);
  
},3000);
	
var rotation = function (){
   $(".niukou3").rotate({
      angle:15, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();

setTimeout (function()
{
$(".niukou3").stopRotate();
    $(".niukou3").css({"-webkit-transform": "rotateX(0deg);"});
    $(".niukou3").css({"-moz-transform":"rotateX(0deg)"});
    $(".niukou3").css({"-ms-transform":"rotateX(0deg)"});
    $(".niukou3").css({"-o-transform":"rotateX(0deg)"});
    $(".niukou3").css({"transform":"rotateX(0deg)"});
},9000); 	
	
},1000); 		
});

//纽扣4
$(function(){
setTimeout (function()
{
 $(".niukou4").fadeIn(1000);

    $(".niukou4").animate({
      opacity:'1',
      height:'0.9rem',
      width:'0.9rem'
       },1000,function(){
	     $("#shadow4").fadeIn(1000);
	    $("#twenzi4").fadeIn(1500);
   $("#msbox4").animate({
      width:'2450px'
    },3000);
    });
	
	setTimeout (function()      // 绳结显示
{	
   $(".jie4-1").fadeIn(900);
  
},3000);
	
var rotation = function (){
   $(".niukou4").rotate({
      angle:15, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();

setTimeout (function()
{
$(".niukou4").stopRotate();
    $(".niukou4").css({"-webkit-transform": "rotateX(0deg);"});
    $(".niukou4").css({"-moz-transform":"rotateX(0deg)"});
    $(".niukou4").css({"-ms-transform":"rotateX(0deg)"});
    $(".niukou4").css({"-o-transform":"rotateX(0deg)"});
    $(".niukou4").css({"transform":"rotateX(0deg)"});
},9000); 	
	
},500); 		
});

//松树 和 年份
$(function(){
setTimeout (function()
{

 // $("#s-zhe").animate({
 //    height:'0px'
 //  },5000);

  $("#t-song").fadeIn(2000); // 松显示  
  
  
  
	 setTimeout (function()   // 年份显示  
{  
 $("#nian").fadeIn(300,function(){
 $("#nian").animate({
        left:'30.5%',
	    top:'0.4rem'
    });
});
 },500);
 	 setTimeout (function()
{  $("#nian2").fadeIn(300,function(){
 $("#nian2").animate({
        left:'43.5%',
	    top:'0.4rem'
    });
});
 },900);
 	 setTimeout (function()
{  $("#nian3").fadeIn(300,function(){
 $("#nian3").animate({
        left:'56.5%',
	    top:'0.4rem'
    });
});
 },1300);
 	 setTimeout (function()
{  $("#nian4").fadeIn(300,function(){
 $("#nian4").animate({
        left:'69.5%',
	    top:'0.4rem'
    });
});
 },1700);
 
 setTimeout (function()
{  $("#nian5").fadeIn(300,function(){
 $("#nian5").animate({
        left:'82.5%',
	    top:'0.4rem'
    });
});
 },2100);
 
  setTimeout (function()
{  $("#nian6").fadeIn(300,function(){
 $("#nian6").animate({
        left:'95.5%',
	    top:'0.4rem'
    });
});
 },2500);
 
 	 
 },2000);
 
});
// 红色 大logo
$(function(){
setTimeout (function()
{
  $("#t-zi").fadeIn(2000);

 },7500);
 
});

//绳结gif
$(function(){
  $(".jie1-1").mouseover(function(){
    $(".jie1-1").css("display","none");
	 $(".jie1g-1").css("display","block");
  });
    $(".jie1g-1").mouseout(function(){
  $(".jie1-1").css("display","block");
	 $(".jie1g-1").css("display","none");
  });
  
   $(".jie1-2").mouseover(function(){
    $(".jie1-2").css("display","none");
	 $(".jie1g-2").css("display","block");
  });
    $(".jie1g-2").mouseout(function(){
  $(".jie1-2").css("display","block");
	 $(".jie1g-2").css("display","none");
  });
  
    $(".jie1-3").mouseover(function(){
    $(".jie1-3").css("display","none");
	 $(".jie1g-3").css("display","block");
  });
    $(".jie1g-3").mouseout(function(){
  $(".jie1-3").css("display","block");
	 $(".jie1g-3").css("display","none");
  });
  $(".jie2-1").mouseover(function(){
    $(".jie2-1").css("display","none");
	 $(".jie2g-1").css("display","block");
  });
    $(".jie2g-1").mouseout(function(){
  $(".jie2-1").css("display","block");
	 $(".jie2g-1").css("display","none");
  });

  $(".jie2-2").mouseover(function(){
    $(".jie2-2").css("display","none");
	 $(".jie2g-2").css("display","block");
  });
    $(".jie2g-2").mouseout(function(){
  $(".jie2-2").css("display","block");
	 $(".jie2g-2").css("display","none");
  });


  $(".jie3-1").mouseover(function(){
    $(".jie3-1").css("display","none");
	 $(".jie3g-1").css("display","block");
  });
    $(".jie3g-1").mouseout(function(){
  $(".jie3-1").css("display","block");
	 $(".jie3g-1").css("display","none");
  });
  
  
  
   $(".jie4-1").mouseover(function(){
    $(".jie4-1").css("display","none");
	 $(".jie4g-1").css("display","block");
  });
    $(".jie4g-1").mouseout(function(){
  $(".jie4-1").css("display","block");
	 $(".jie4g-1").css("display","none");
  });
    
});

//背景移动 v

$(function(){


setTimeout (function()
{
 $(".swiper-wrapper").animate({left:'-60%'
 },2500);
 

 setTimeout (function()
{
 
  $(".swiper-wrapper").animate({left:'0px'
 },3500);
 
  },3000); 
 },2800);
});
