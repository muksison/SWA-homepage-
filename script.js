//menu
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger, .header_menu').toggleClass('active');
		// $('body').toggleClass('lock');
	});
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 50){
		$('header').addClass("glide");
	}
	else{
		$('header').removeClass("glide");
	}
});


// scroll up
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
// scroll down
$(function(){
  $('.scroll a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 500);
  });
});
// points
$(document).ready(function(){
	$('#point1').click(function(event){
		$('#point1').toggleClass('active');
		$('#point2').toggleClass('active',false);
		$('#point3').toggleClass('active',false);
	});
	$('#point2').click(function(event){
		$('#point2').toggleClass('active');
		$('#point1').toggleClass('active',false);
		$('#point3').toggleClass('active',false);
	});
	$('#point3').click(function(event){
		$('#point3').toggleClass('active');
		$('#point1').toggleClass('active',false);
		$('#point2').toggleClass('active',false);
	});
});
//plan
$(document).ready(function(){
	$('.MonthBtn').click(function(event){
		$('.MonthBtn').toggleClass('active', true);
		$('.YearBtn').toggleClass('active',false);
	});
	$('.YearBtn').click(function(event){
		$('.YearBtn').toggleClass('active',true);
		$('.MonthBtn').toggleClass('active',false);
	});
});