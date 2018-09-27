$(".header__slider").slick({
	autoplay: true,
	autoplaySpeed: 5000
});
$(".galery .article__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
});
$(".tab_mass.tab__slider").slick({
	autoplay: true,
	autoplaySpeed: 5000
});
$(".tab_shpon.tab__slider").slick({
	autoplay: true,
	autoplaySpeed: 5000
});
$(".tab_eco-shpon.tab__slider").slick({
	autoplay: true,
	autoplaySpeed: 5000
});
$(".furnitura .article__slider").slick({
    arrows:false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000
});
$(".furnitura .furnitura__brand").slick({
    arrows:false,
    dots: false,
    slidesToShow: 15,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 5000
});
$('.galery .article__slider').magnificPopup({
	delegate: '.slick-track a',
	type: 'image',
	gallery:{
		enabled:true
	},
	zoom: {
		enabled:true
	}
});

$('.room_doors .tab__slider').magnificPopup({
	delegate: '.slick-track a',
	type: 'image',
	gallery:{
		enabled:true
	},
	zoom: {
		enabled:true
	}
});

$("body").scroll(function() {

	if ($(this).scrollTop()>0)
	 {
			$('#hide_on_scroll').fadeOut();
	 }
	else
	 {
		$('#hide_on_scroll').fadeIn();
	 }
});


$("#call_back").click(function(){
	$("#over").css("display","flex")
})
$("#close").click(function(){
	$("#over").hide()
})