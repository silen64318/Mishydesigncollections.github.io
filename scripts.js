$(document).ready(function() {

    // Initialize the Slick Carousel

    $('.carousel-inner').slick({
        dots: true, // Show dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Animation speed
        slidesToShow: 3, // Number of slides to show at once

        slidesToScroll: 1, // Number of slides to scroll on navigation
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed
        responsive: [
            {
                breakpoint: 768, // Adjust for mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // Adjust for tablets
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                    slidesToScroll: 1

                }
            }
        ]
    });

    // Add a scroll animation to the hero title
    $('.hero-title').css('opacity', 0).animate({ opacity: 1 }, 1000);

    // Add hover effect on logo
    $('.logo img').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
});
