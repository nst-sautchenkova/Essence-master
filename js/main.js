//scroll	
jQuery(document).ready(function(){
    $("#scroll-a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60}, 800);
    });
});

jQuery(document).ready(function(){
    $("header #menu ul li a").on("click", function (event) {
        event.preventDefault();
        var idt  = $(this).attr('href'),
            topt = $(idt).offset().top;
        $('body,html').animate({scrollTop: topt - 60}, 800);
    });
});

//loader
jQuery(document).ready(function(){
$( ".pace-activity" ).before( $( "<div class='logo-loader'><div class='logo-loader-bg'><span class='revealator-slideright revealator-once'>e</span><span class='revealator-slideright revealator-once revealator-delay2'>s</span><span class='revealator-slideright revealator-once revealator-delay3'>s</span><span class='revealator-slideright revealator-once revealator-delay4'>e</span><span class='revealator-slideright revealator-once revealator-delay5'>n</span><span class='revealator-slideright revealator-once revealator-delay6'>c</span><span class='revealator-slideright revealator-once revealator-delay7'>e</span><span class='revealator-slideright revealator-once revealator-delay8'>.</span></div></div>" ) );});


//team
jQuery(document).ready(function() {
	var w = jQuery(window).width();
	if (w <= 1250) {
		var swiper = new Swiper('#slider-team .swiper-container', {
			scrollbar: '#slider-team .swiper-scrollbar',
			scrollbarHide: true,
			slidesPerView: 5,
			centeredSlides: false,
			mousewheelControl: true,
			breakpoints: {
				1024: {
					slidesPerView: 4
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 3
				},
				420: {
					slidesPerView: 2
				}
			}
		});
		
	}
});


//menu
jQuery(document).ready(function() {
	var wm = jQuery(window).width();
	if (wm <= 1120) {
		jQuery( "header #menu .menu" ).before( $( "<div class='menu-open'></div>" ) );
		jQuery( "header #menu .menu ul" ).before( $( "<div class='menu-close'></div>" ) );
		jQuery( "header #menu .menu-open" ).click(function(){
			jQuery('header #menu .menu').css({'top': '0'});
		});
		jQuery( "header #menu .menu-close" ).click(function(){
			jQuery('header #menu .menu').css({'top': '-100%'});
		});

	}
});

jQuery(document).ready(function() {
	jQuery( "#slider-process .item .btn-a" ).click(function(){
		jQuery('.remodal-overlay').css({'display': 'block'});
		jQuery('.remodal-wrapper').css({'display': 'block'});
		
	});	
});

$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.js-anim').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
});



