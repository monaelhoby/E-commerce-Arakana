$(function () {


   
	//----------------------------------------------------//
	//to start WOW Library
	//---------------------------------------------------//
	
	new WOW().init(); 
	
	//----------------------------------------------------//
	//list-group
	//---------------------------------------------------//
	
	$(".top-trending #my-tab li").click(function(){
        
        var myID=$(this).attr("id");
        
        $(this).removeClass("inactive").siblings().addClass("inactive");
        
        $(".top-trending .content").hide();
        
        $("#"+$(this).attr("id")+"-content").fadeIn(1000);
        });
	

});
