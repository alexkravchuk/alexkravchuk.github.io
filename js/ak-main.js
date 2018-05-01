
$(document).ready(function(){
	
// Show as html
$("pre").each(function(){ // показвать в виде кода
		$(this).text($(this).html());
});
	
$("iframe").wrap( "<div class='iframe_wrapper'></div>" );

// Typograph
//symb
	$("body").html($("body").html().replace(/\s—\s/g,'&nbsp;— '));
	$("body").html($("body").html().replace(/\s→\s/g,'&nbsp;→ '));
    $("body").html($("body").html().replace(/\s-\s/g,'&nbsp;— '));
//ua
    $("body").html($("body").html().replace(/\sЗ\s/g,' З&nbsp;'));
    $("body").html($("body").html().replace(/\sЗі\s/g,' Зі&nbsp;'));
    $("body").html($("body").html().replace(/\sІ\s/g,' І&nbsp;'));
    $("body").html($("body").html().replace(/\sТа\s/g,' Та&nbsp;'));
    $("body").html($("body").html().replace(/\sУ\s/g,' У&nbsp;'));
    $("body").html($("body").html().replace(/\sЩо\s/g,' Що&nbsp;'));
    $("body").html($("body").html().replace(/\sЯк\s/g,' Як&nbsp;'));
    
    $("body").html($("body").html().replace(/\sз\s/g,' з&nbsp;')); 
    $("body").html($("body").html().replace(/\sзі\s/g,' зі&nbsp;')); 
    $("body").html($("body").html().replace(/\sі\s/g,' і&nbsp;'));
    $("body").html($("body").html().replace(/\sта\s/g,' та&nbsp;'));
    $("body").html($("body").html().replace(/\sу\s/g,' у&nbsp;'));
    $("body").html($("body").html().replace(/\sщо\s/g,' що&nbsp;'));
    $("body").html($("body").html().replace(/\sяк\s/g,' як&nbsp;'));
//ru
	$("body").html($("body").html().replace(/\sВ\s/g,' В&nbsp;'));
	$("body").html($("body").html().replace(/\sА\s/g,' А&nbsp;'));
	$("body").html($("body").html().replace(/\sУ\s/g,' У&nbsp;'));
	$("body").html($("body").html().replace(/\sС\s/g,' С&nbsp;'));
	$("body").html($("body").html().replace(/\sО\s/g,' О&nbsp;'));
	$("body").html($("body").html().replace(/\sК\s/g,' К&nbsp;'));
	$("body").html($("body").html().replace(/\sИ\s/g,' И&nbsp;'));
	$("body").html($("body").html().replace(/\sЯ\s/g,' Я&nbsp;')); 
    
	$("body").html($("body").html().replace(/\sв\s/g,' в&nbsp;'));
	$("body").html($("body").html().replace(/\sа\s/g,' а&nbsp;'));
	$("body").html($("body").html().replace(/\sу\s/g,' у&nbsp;'));
	$("body").html($("body").html().replace(/\sс\s/g,' с&nbsp;'));
	$("body").html($("body").html().replace(/\sо\s/g,' о&nbsp;'));
	$("body").html($("body").html().replace(/\sк\s/g,' к&nbsp;'));
	$("body").html($("body").html().replace(/\sи\s/g,' и&nbsp;'));
	$("body").html($("body").html().replace(/\sя\s/g,' я&nbsp;'));

    $("body").html($("body").html().replace(/\sна\s/g,' на&nbsp;'));
    $("body").html($("body").html().replace(/\sне\s/g,' не&nbsp;'));
    $("body").html($("body").html().replace(/\sот\s/g,' от&nbsp;'));
    $("body").html($("body").html().replace(/\sпо\s/g,' по&nbsp;'));
//en  
    $("body").html($("body").html().replace(/\sA\s/g,' A&nbsp;'));
    $("body").html($("body").html().replace(/\sAn\s/g,' An&nbsp;'));
    $("body").html($("body").html().replace(/\sAs\s/g,' As&nbsp;'));
    $("body").html($("body").html().replace(/\sAt\s/g,' At&nbsp;'));
    $("body").html($("body").html().replace(/\sBy\s/g,' By&nbsp;'));
    $("body").html($("body").html().replace(/\sI\s/g,' I&nbsp;'));
    $("body").html($("body").html().replace(/\sIf\s/g,' If&nbsp;'));
    $("body").html($("body").html().replace(/\sIn\s/g,' In&nbsp;'));
    $("body").html($("body").html().replace(/\sIt\s/g,' It&nbsp;'));
    $("body").html($("body").html().replace(/\sMy\s/g,' My&nbsp;'));
    $("body").html($("body").html().replace(/\sNo\s/g,' No&nbsp;'));
    $("body").html($("body").html().replace(/\sOf\s/g,' Of&nbsp;'));
    $("body").html($("body").html().replace(/\sOn\s/g,' On&nbsp;'));
    $("body").html($("body").html().replace(/\sOr\s/g,' Or&nbsp;'));
    $("body").html($("body").html().replace(/\sSo\s/g,' So&nbsp;'));
    $("body").html($("body").html().replace(/\sThe\s/g,' The&nbsp;'));
    $("body").html($("body").html().replace(/\sTo\s/g,' To&nbsp;'));
     
    $("body").html($("body").html().replace(/\sa\s/g,' a&nbsp;'));
    $("body").html($("body").html().replace(/\san\s/g,' an&nbsp;'));
    $("body").html($("body").html().replace(/\sas\s/g,' as&nbsp;'));
    $("body").html($("body").html().replace(/\sat\s/g,' at&nbsp;'));
    $("body").html($("body").html().replace(/\sby\s/g,' by&nbsp;'));
    $("body").html($("body").html().replace(/\sif\s/g,' if&nbsp;'));
    $("body").html($("body").html().replace(/\sin\s/g,' in&nbsp;'));
    $("body").html($("body").html().replace(/\sit\s/g,' it&nbsp;'));
    $("body").html($("body").html().replace(/\smy\s/g,' my&nbsp;'));
    $("body").html($("body").html().replace(/\sno\s/g,' no&nbsp;'));
    $("body").html($("body").html().replace(/\sof\s/g,' of&nbsp;'));
    $("body").html($("body").html().replace(/\son\s/g,' on&nbsp;'));
    $("body").html($("body").html().replace(/\sor\s/g,' or&nbsp;'));
    $("body").html($("body").html().replace(/\sso\s/g,' so&nbsp;'));
    $("body").html($("body").html().replace(/\sthe\s/g,' the&nbsp;'));
    $("body").html($("body").html().replace(/\sto\s/g,' to&nbsp;'));
    
// Highlight Same Links
	$("a").hover(
	function() {$("a[href='" + $(this).attr("href") + "']").addClass("hover");}, 
	function() {$("a[href='" + $(this).attr("href") + "']").removeClass("hover");}
	);      
        
// Mobile Menu Functions
$(".menu_button").click(function(){
//    $(".menu_mob").slideToggle(400); 
    
//    $(".menu_mob").slideToggle({duration: 1000, easing: "easeInQuad"});
 $(".menu_mob").slideToggle({duration: 500, easing: "easeInOutQuint"}); // use jquery easing plugin

//    $('.menu_mob').each(function() {
//        if($(this).is(':hidden')){
//            $(".menu_mob").slideToggle({duration: 400, easing: "easeInOutCubic"});
//        }
//        else {
//            $(".menu_mob").slideToggle({duration: 400, easing: "easeInCubic"});
//        };  
//    })

    $("body").toggleClass("fixed");
    $(".content").toggleClass("trans");
    $(".menu_button").toggleClass("open");
    return false;
});
        
$(".home_link").click(function(){
//    $(".menu_mob").slideUp(400);
    $(".menu_mob").slideUp({duration: 500, easing: "easeInOutQuint"}); // use jquery easing plugin
    $(".content").removeClass("trans");
    $("body").removeClass("fixed");
    $(".menu_button").removeClass("open");
    return false; 
});
        
$(".menu_link").click(function(){
//    $(".menu_mob").slideUp(400);
    $(".menu_mob").slideUp({duration: 500, easing: "easeInOutQuint"}); // use jquery easing plugin
    $(".content").removeClass("trans");
    $("body").removeClass("fixed");
    $(".menu_button").removeClass("open");
    return false; 
});
        
$(".menu_mob_link").click(function(){
//    $(".menu_mob").slideUp(400);
    $(".menu_mob").slideUp({duration: 500, easing: "easeInOutQuint"}); // use jquery easing plugin
    $(".content").removeClass("trans");
    $("body").removeClass("fixed");
    $(".menu_button").removeClass("open");
    return false; 
});
    
    
// $(".menu_mob_link").attr("href", "#contact").click(function(){
//    $(".nav_title").html("Contact");
//    return false; 
//    });

        
// Remove Click Event   
$("a.click_off").off("click");       

   
//$(function() {
//      $('#fds img').each(function(i) {
//    $(this).delay((i++) * 500).fadeTo(1000, 1); })
//});

// Current year 
$("#year").html(new Date().getFullYear());

}); // End Ready



// Current menu item 
var menu_selector = ".menu_list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top - 0 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
//            $("a.ak_button_norm").removeClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}




// Change Bg Logo Offset
$(document).ready(function() {
    
var anchor1 = $("#top");
	$(window).scroll(function() {
		var window_pos = $(window).scrollTop();
		if (window_pos >= anchor1.position().top & window_pos < anchor1.position().top + anchor1.outerHeight()) {
            $(".nav_title").empty().attr('href', '#top');
		} else {
//          $(".nav_title").empty();
		} 
	});

var anchor2 = $("#work");
	$(window).scroll(function() {
		var window_pos = $(window).scrollTop();
		if (window_pos >= anchor2.position().top & window_pos < anchor2.position().top + anchor2.outerHeight()) {
            $(".home_link").removeClass("bg_04");
			$(".home_link").addClass("bg_02");
            $(".nav_title").html('Work').attr('href', '#work');
		} else {
			$(".home_link").removeClass("bg_02");
//            $(".nav_title").empty();
		} 
	});
  
var anchor3 = $("#services");
	$(window).scroll(function() {
		var window_pos = $(window).scrollTop();
		if (window_pos >= anchor3.position().top & window_pos < anchor3.position().top + anchor3.outerHeight()) {
            $(".home_link").removeClass("bg_04");
			$(".home_link").addClass("bg_03");
            $(".nav_title").html("Services").attr('href', '#services');
		} else {
			$(".home_link").removeClass("bg_03");
//            $(".nav_title").empty();
		} 
	});
    
var anchor4 = $("#approach");
	$(window).scroll(function() {
		var window_pos = $(window).scrollTop();
		if (window_pos >= anchor4.position().top & window_pos < anchor4.position().top + anchor4.outerHeight()) {
//			$(".home_link").addClass("bg_violet");
            $(".home_link").removeClass("bg_03");
            $(".home_link").removeClass("bg_04");
            $(".nav_title").html("Approach").attr('href', '#approach');
		} else {
//			$(".home_link").removeClass("bg_gold");
//            $(".nav_title").empty();
		} 
	});
    
var anchor5 = $("#contact");
	$(window).scroll(function() {
		var window_pos = $(window).scrollTop();
		if (window_pos >= anchor5.position().top & window_pos < anchor5.position().top + anchor5.outerHeight()) {
			$(".home_link").removeClass("bg_03");
            $(".home_link").addClass("bg_04"); 
            $(".nav_title").html("Contact").attr('href', '#contact');
		} else {
			$(".home_link").removeClass("bg_04");	
		} 
	});
 

}); // -- End ready



// Scroll Animate
$(document).ready(function() {
    $(document).on("scroll", onScroll);
    
    $("a[href^=#]").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top + 1
        }, 600, "easeInOutQuad", function(){ // use jquery easing plugin
            window.location;
            $(document).on("scroll", onScroll); 
        });
    });
}); // -- End ready