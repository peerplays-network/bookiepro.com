$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
		autoplay: true,
        loop: true,
        margin: 10,
        mouseDrag: false,
        dots: false,
        nav: false,
		autoplayTimeout: 3000,
		
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1.7
            },
            768: {
                items: 2.5
            },
            992: {
                items: 3
            },
            1315: {
                items: 4
            }
        }
    });
	
});

