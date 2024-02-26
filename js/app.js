$(document).ready(function () {
    $('.slider').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
          
            responsive: [
                {
                    breakpoint: 769,
                    settings:
                    {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        }

    )
});