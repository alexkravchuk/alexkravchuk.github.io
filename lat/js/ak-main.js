// Ready start

var date = new Date(); // Current date time 
var h = date.getHours(); // Current time
//document.write(h);

$(document).ready(function(){

// Time status
//if (h > 22 || h < 9) {
//    $(".status").removeClass("status_y");
//    $(".status").addClass("status_s");
//    $(".status").remove();
//}

// Show as html
$("pre").each(function(){ // показвать в виде кода
		$(this).text($(this).html());
});

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
    $("body").html($("body").html().replace(/\sй\s/g,' й&nbsp;'));
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
//ukr latin
$("body").html($("body").html().replace(/Йо/g,'Ö'));

$("body").html($("body").html().replace(/А/g,'A'));
$("body").html($("body").html().replace(/Б/g,'B'));
$("body").html($("body").html().replace(/В/g,'V'));
$("body").html($("body").html().replace(/Г/g,'G'));
$("body").html($("body").html().replace(/Д/g,'D'));
$("body").html($("body").html().replace(/Е/g,'E'));
$("body").html($("body").html().replace(/Є/g,'Ë'));
$("body").html($("body").html().replace(/Ж/g,'Ž'));
$("body").html($("body").html().replace(/З/g,'Z'));
$("body").html($("body").html().replace(/И/g,'Y'));
$("body").html($("body").html().replace(/І/g,'I'));
$("body").html($("body").html().replace(/Ї/g,'Ï'));
$("body").html($("body").html().replace(/Й/g,'J'));
$("body").html($("body").html().replace(/К/g,'K'));
$("body").html($("body").html().replace(/Л/g,'L'));
$("body").html($("body").html().replace(/М/g,'M'));
$("body").html($("body").html().replace(/Н/g,'N'));
$("body").html($("body").html().replace(/О/g,'O'));
$("body").html($("body").html().replace(/П/g,'P'));
$("body").html($("body").html().replace(/Р/g,'R'));
$("body").html($("body").html().replace(/С/g,'S'));
$("body").html($("body").html().replace(/Т/g,'T'));
$("body").html($("body").html().replace(/У/g,'U'));
$("body").html($("body").html().replace(/Ф/g,'F'));
$("body").html($("body").html().replace(/Х/g,'H'));
$("body").html($("body").html().replace(/Ц/g,'C'));
// $("body").html($("body").html().replace(/Ч/g,'Ç'));
$("body").html($("body").html().replace(/Ч/g,'Č'));
// $("body").html($("body").html().replace(/Ш/g,'Ş'));
$("body").html($("body").html().replace(/Ш/g,'Š'));
// $("body").html($("body").html().replace(/Щ/g,'Şç'));
$("body").html($("body").html().replace(/Щ/g,'Ş'));
$("body").html($("body").html().replace(/Ю/g,'Ü'));
$("body").html($("body").html().replace(/Я/g,'Ä'));

$("body").html($("body").html().replace(/йо/g,'ö'));
$("body").html($("body").html().replace(/ьо/g,'ö'));

$("body").html($("body").html().replace(/б/g,'b'));
$("body").html($("body").html().replace(/в/g,'v'));
$("body").html($("body").html().replace(/г/g,'g'));
$("body").html($("body").html().replace(/д/g,'d'));
$("body").html($("body").html().replace(/e/g,'e'));
$("body").html($("body").html().replace(/є/g,'ë'));
$("body").html($("body").html().replace(/ж/g,'ž'));
$("body").html($("body").html().replace(/з/g,'z'));
$("body").html($("body").html().replace(/и/g,'y'));
$("body").html($("body").html().replace(/і/g,'i'));
$("body").html($("body").html().replace(/ї/g,'ï'));
$("body").html($("body").html().replace(/й/g,'j'));
$("body").html($("body").html().replace(/к/g,'k'));
$("body").html($("body").html().replace(/л/g,'l'));
$("body").html($("body").html().replace(/м/g,'m'));
$("body").html($("body").html().replace(/н/g,'n'));
$("body").html($("body").html().replace(/о/g,'o'));
$("body").html($("body").html().replace(/п/g,'p'));
$("body").html($("body").html().replace(/р/g,'r'));
$("body").html($("body").html().replace(/с/g,'s'));
$("body").html($("body").html().replace(/т/g,'t'));
$("body").html($("body").html().replace(/у/g,'u'));
$("body").html($("body").html().replace(/ф/g,'f'));
$("body").html($("body").html().replace(/х/g,'h'));
$("body").html($("body").html().replace(/ц/g,'c'));
// $("body").html($("body").html().replace(/ч/g,'ç'));
$("body").html($("body").html().replace(/ч/g,'č'));
// $("body").html($("body").html().replace(/ш/g,'ş'));
$("body").html($("body").html().replace(/ш/g,'š'));
// $("body").html($("body").html().replace(/щ/g,'şç'));
$("body").html($("body").html().replace(/щ/g,'ş'));
$("body").html($("body").html().replace(/ю/g,'ü'));
$("body").html($("body").html().replace(/я/g,'ä'));
// $("body").html($("body").html().replace(/я/g,'ĵa'));



$("body").html($("body").html().replace(/ь/g,'’'));
// $("body").html($("body").html().replace(/ь/g,'ĵ'));


    
// Highlight Same Links
	$("a").hover(
	function() {$("a[href='" + $(this).attr("href") + "']").addClass("hover");}, 
	function() {$("a[href='" + $(this).attr("href") + "']").removeClass("hover");}
	);

// Current year 
$("#year").html(new Date().getFullYear());
    
    
$("#about_a").click(function(){
    $(".segmented_item").removeClass("current");
    $("#projects_box").hide();
    $("#about_box").show();
    $("#about_a").addClass("current");
    return false; 
    });  

$("#projects_a").click(function(){
    $(".segmented_item").removeClass("current");
    $("#about_box").hide();
    $("#projects_box").show();
    $("#projects_a").addClass("current");
    return false; 
    });
    
    
// Cover Random   
//var classCycle=['cover_01','cover_02','cover_03'];
//    var randomNumber = Math.floor(Math.random() * classCycle.length);
//    var classToAdd = classCycle[randomNumber];
//    $('.cover').addClass(classToAdd);
    
    
}); // End Ready







