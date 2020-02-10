var slick_sliders = [
	{
		selector: '.gallery',
		limit: null,
		operator: null,
		args: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			slide: '.slide',
			speed: 250,
			dots: true,
			arrows: true,
			draggable: true,
			centerMode: true,
			centerPadding: '10%',
			slidesToShow: 1,
			customPaging : function(slider, i) {
		        var thumb = $(slider.$slides[i]).data('thumb');
		        return '<span style="background-image:url('+thumb+');"></span>';
		    },
			prevArrow: '<span class="slick-prev"></span>',
			nextArrow: '<span class="slick-next"></span>',
			responsive: [
				{
			      breakpoint: 1601,
			      settings: {
			        centerPadding: '60px'
			      }
			    },
				{
			      breakpoint: 769,
			      settings: {
			        centerPadding: '50px'
			      }
			    },
			    {
			      breakpoint: 481,
			      settings: {
					centerMode: false,
					customPaging : function(slider) {
						return '<span></span>';
					}
				  }
			    }
			]
		}
	}
	
	
	
	
	
];



var operators = {
	'<': function(a, b) { return a < b },
	'>': function(a, b) { return a > b },
	'<=': function(a, b) { return a <= b },
	'>=': function(a, b) { return a >= b },
	'==': function(a, b) { return a == b }
}

function slick_init(sliders_array) {
	
	var window_width = jQuery(window).width();
	
	jQuery.each(sliders_array, function(index, value){
		
		if (jQuery(value.selector).length > 0) {
			
			if (typeof(value.limit) === 'undefined' || value.limit == null) {
				
				if (!jQuery(value.selector).hasClass('slick-initialized')) {
					jQuery(value.selector).slick(value.args);
				}
			}
			else {
				
				if (operators[value.operator](window_width, value.limit)) {
					
					if (!jQuery(value.selector).hasClass('slick-initialized')) {
						jQuery(value.selector).slick(value.args);
					}
					
				}
				else {
					
					if (jQuery(value.selector).hasClass('slick-initialized')) {
						jQuery(value.selector).slick('unslick');
					}
					
				}
				
			}			
			
		}
		
	});
	
}

jQuery(document).ready(function(){
	
	slick_init(slick_sliders);
	
	// Resize functions
	jQuery(window).resize(function(){
		slick_init(slick_sliders);
	});

});