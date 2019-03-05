
//菜单

var fg=2;
function a2(){
fg++;
if(fg%2==1){	
	$("#memu-pic").css({"-webkit-transform": "rotate(180deg);"});
    $("#memu-pic").css({"-moz-transform":"rotate(180deg)"});
    $("#memu-pic").css({"-ms-transform":"rotate(180deg)"});
    $("#memu-pic").css({"-o-transform":"rotate(180deg)"});
    $("#memu-pic").css({"transform":"rotate(180deg)"});
	//$("#memus").animate({opacity:"1"},"normal");
	document.getElementById("memus").style.display="";
	}else{
	 $("#memu-pic").css({"-webkit-transform": "rotate(180deg);"});
    $("#memu-pic").css({"-moz-transform":"rotate(180deg)"});
    $("#memu-pic").css({"-ms-transform":"rotate(180deg)"});
    $("#memu-pic").css({"-o-transform":"rotate(180deg)"});
    $("#memu-pic").css({"transform":"rotate(0deg)"});
	//$("#memus").animate({opacity:"0"},"normal");
	document.getElementById("memus").style.display="none";
}
}





