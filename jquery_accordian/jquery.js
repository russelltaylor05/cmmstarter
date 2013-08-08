
$(document).ready(function(){
	
$("#cssmenu > ul > li > a ").click(function(){
 
    if(false == $(this).next().is(':visible')) {
        $('#cssmenu ul ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});
 
$('#cssmenu > ul > li:eq(0)').show();

$('#cssmenu').hide();


});