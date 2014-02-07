// JavaScript Document


//page sliding tutorial
//http://www.hongkiat.com/blog/jquery-sliding-navigation/

$(document).ready(function(){

	// when green side is clicked, it opens green page
	$('#mainOne').on("click",function() {
			//width changes
			$('#mainOne').animate({width: '92%'});
			$('#mainTwo').animate({width: '8%'});
			// arrow dissappears
			$("#arrowLeft").hide("fast");
			//title disappears
			$(".titles").css("display", "none");
			//pagetwo goes down
			$("#pageTwo").animate({top: "5000px"},"fast");
			//page1 coms up
			$("#pageOne").animate({top: "0px"},850, "swing");
			// arrow comes up for the other page
			$("#arrowRight").show().animate({opacity:1},1000);
			// cursor changes 
			//http://stackoverflow.com/questions/1843674/how-to-change-cursor-from-pointer-to-finger-using-jquery
			$("#mainOne").css("cursor",'default');
			$("#mainTwo").css("cursor",'pointer');
		});
	// when blue side is clicked it opens blue page	
	$('#mainTwo').on("click",function() {
			$('#mainOne').animate({width: '8%'});
			$('#mainTwo').animate({width: '92%'});
			//title disappears
			$(".titles").css("display", "none");
			//arrows dissapaers
			$("#arrowRight").hide("fast");
			//page1 goes back down
			$("#pageOne").animate({top: "5000px"},"fast");
			// page2 comes up
			$("#pageTwo").animate({top: "0px"},850, "swing");
			// arrow to page1 comes up
			$("#arrowLeft").show().animate({opacity: 1},1000);
			$("#mainTwo").css("cursor",'default');
			$("#mainOne").css("cursor",'pointer');
		});	
		
	//close function when close is clicked, goes back to slipt page
	$('#top a').on("click",function(){
		//pages goes back down
		$("#pageOne").animate({top: "5000px"},"fast");
		$("#pageTwo").animate({top: "5000px"},"fast");
		//arrows dissapaers
		$("#arrowRight").hide("fast");
		$("#arrowLeft").hide("fast");
		//width changes
		$('#mainOne').animate({width: '50%'});
		$('#mainTwo').animate({width: '50%'});
		//titles shows up again
		$(".titles").show().animate({opacity:1},1000);
		$("#mainTwo").css("cursor",'pointer');
		$("#mainOne").css("cursor",'pointer');
		
	});	
	
	// jquery for feature 1 : hovering with direction ~ use ing UI
	//from top to bot
	$('.from_top').hover(function(){
		$(this).siblings(".for_jq").show("slide",{direction:"up"},"fast");
	},function(){
		// this is when you leave the hover state
		$(this).siblings(".for_jq").hide("slide",{direction:"up"},"fast");
	});
	
	// from bot to top
	$('.from_bot').hover(function(){
		$(this).siblings(".for_jq").show("slide",{direction:"down"},"fast");	
	},function(){
		// this is when you leave the hover state
		$(this).siblings(".for_jq").hide("slide",{direction:"down"},"fast");	
	});
	
	// right to left
	$('.from_left').hover(function(){
		$(this).siblings(".for_jq").show("slide",{direction:"left"},"fast");
	},function(){
		// this is when you leave the hover state
		$(this).siblings(".for_jq").hide("slide",{direction:"left"},"fast");
	});
	
	// left to right
	$('.from_right').hover(function(){
		$(this).siblings(".for_jq").show("slide",{direction:"right"},"fast");	
	},function(){
		// this is when you leave the hover state
		$(this).siblings(".for_jq").hide("slide",{direction:"right"},"fast");
	});
	// these hover fuctions are very slow..
	// must slowly hover images and unhover them..
	
	
	
	//
	$('.imageContainer').hover(function(){
		
	},function(){
		// this is when you leave the hover state
		$(this).children(".for_jq").hide("fast");
	});
	
	
	
	
	//cube
	$('#defaultCube').imagecube({
		//making cube to only scroll to left
		direction: 'left', 
		//faster turn
		speed: 1000, 
		easing: 'linear', 
		repeat: true, 
		pause: 2500, 
		//no shadows and highlights
		shading: false, 
		opacity: 0, 

	});	
	
	// now then stop the cube so it doesnt auto rotate
	$('#defaultCube').imagecube('stop');
	
	// when clicking the first clicker box, goes to spring
	$('#click1').on("click",function() {

		$('#defaultCube').imagecube('rotate',$("#spring"));
	
	});
	// when clicking the 2nd clicker box, goes to summer
	$('#click2').on("click",function() {

		$('#defaultCube').imagecube('rotate',$("#summer"));
	
	});
	// when clicking the 3rd clicker box, goes to fall
	$('#click3').on("click",function() {

		$('#defaultCube').imagecube('rotate',$("#fall"));
	
	});
	// when clicking the 4th clicker box, goes to winter
	$('#click4').on("click",function() {

		$('#defaultCube').imagecube('rotate',$("#winter"));
	
	});
	
	// 3dcube that is only done with CSS will not keep scrolling if you are clicking on the button
	//that you are already on.
	// however, jq cube will keep scrolling will keep making same page
	
	// also, in CSS if you are in button 1, and click button 4,
	// boxes will scroll through 2 , and 3 to get to 4,
	// however in jqery , it wont scroll through 1 and 2, next image will show up will be 4 ....
	
});


// webpage problems:
// if you are in 2nd page and click some buttons and scrolls back to 1st page,
// it gets little  buggy and 2nd page wont go down, have to refresh it to make it disapear

