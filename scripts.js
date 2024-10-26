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

$(document).ready(function() {
    $('.handbags .carousel-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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

    $('.necklaces .carousel-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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
});

document.addEventListener("DOMContentLoaded", function() {
    const abayasGrid = document.getElementById('abayas-grid');
    const necklacesGrid = document.getElementById('necklaces-grid');
    const handbagsGrid = document.getElementById('handbags-grid');

    const scrollAmount = 220; // Adjust scroll distance

    document.getElementById('next-abayas').addEventListener('click', function() {
        abayasGrid.style.transform = `translateX(-${scrollAmount}px)`;
    });

    document.getElementById('prev-abayas').addEventListener('click', function() {
        abayasGrid.style.transform = `translateX(${scrollAmount}px)`;
    });

    document.getElementById('next-necklaces').addEventListener('click', function() {
        necklacesGrid.style.transform = `translateX(-${scrollAmount}px)`;
    });

    document.getElementById('prev-necklaces').addEventListener('click', function() {
        necklacesGrid.style.transform = `translateX(${scrollAmount}px)`;
    });

    document.getElementById('next-handbags').addEventListener('click', function() {
        handbagsGrid.style.transform = `translateX(-${scrollAmount}px)`;
    });

    document.getElementById('prev-handbags').addEventListener('click', function() {
        handbagsGrid.style.transform = `translateX(${scrollAmount}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const abayasGrid = document.getElementById('abayas-grid');
    const prevButtonAbayas = document.getElementById('prev-abayas');
    const nextButtonAbayas = document.getElementById('next-abayas');

    let currentIndexAbayas = 0;
    const totalAbayasItems = abayasGrid.children.length;
    const itemWidth = abayasGrid.children[0].offsetWidth;

    function updateCarousel() {
        // Calculate the new scroll position
        const newScrollPosition = -currentIndexAbayas * itemWidth;
        abayasGrid.style.transform = `translateX(${newScrollPosition}px)`;
    }

    function nextSlide() {
        currentIndexAbayas = (currentIndexAbayas + 1) % totalAbayasItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndexAbayas = (currentIndexAbayas - 1 + totalAbayasItems) % totalAbayasItems;
        updateCarousel();
    }

    // Set automatic sliding every 3 seconds
    const autoSlideInterval = setInterval(nextSlide, 3000);

    // Event listeners for buttons
    nextButtonAbayas.addEventListener('click', function () {
        clearInterval(autoSlideInterval); // Stop auto sliding on manual click
        nextSlide();
    });

    prevButtonAbayas.addEventListener('click', function () {
        clearInterval(autoSlideInterval); // Stop auto sliding on manual click
        prevSlide();
    });
});

$(document).ready(function() {
    // Sidebar toggle
    $('#open-sidebar').click(function() {
        $('#sidebar').css('left', '0');
    });
    $('#close-sidebar').click(function() {
        $('#sidebar').css('left', '-250px');
    });
    
    $(document).ready(function() { 

    // Sidebar toggle functionality
    $('#sidebar-icon').on('click', function() {
        $('.sidebar-menu').toggleClass('active');
    }); 

    // Close sidebar when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#sidebar-icon, .sidebar-menu').length) {
            $('.sidebar-menu').removeClass('active');
        }
    });
    
      // Liquid scroll effect for section transitions
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault(); 

        var target = $(this.getAttribute('href')); 

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutExpo'); // Use jQuery Easing for smooth transition
        }
    });

// Scroll animation for fade-in effect on Discover Our Products section
    function fadeInOnScroll() {
        $('.fade-in-on-scroll').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).addClass('visible');
            }
        });
    }


$(document).ready(function() {
    // Sidebar toggle
    $('#open-sidebar').click(function() {
        $('#sidebar').css('left', '0');
    });
    $('#close-sidebar').click(function() {
        $('#sidebar').css('left', '-250px');
    });

    // Fade-in effect for the Worldwide Delivery section
    function fadeInSection() {
        const deliverySection = $('.worldwide-delivery');
        if (deliverySection.offset().top < $(window).scrollTop() + $(window).height()) {
            deliverySection.addClass('visible');
        }
    } 

    // Check for fade-in effect on scroll
    $(window).on('scroll', function() {
        fadeInOnScroll();
        fadeInSection();
    }); 

    // Trigger fade-in on page load
    $(window).on('load', function() {
        fadeInOnScroll();
        fadeInSection();
    }); 

    // Adjust the width of the search input for better visibility
    $('#search-input').css('width', '300px'); 

    // Carousel initialization
    $('.carousel-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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

$('#search-btn').on('click', function() {
    var query = $('#search-input').val().toLowerCase();

    // Loop through all product items and hide those that don't match the query
    $('.product-item').each(function() {
        var productName = $(this).data('name').toLowerCase();
        
        // Check if the product name includes the search query
        if (productName.includes(query)) {
            $(this).show(); // Show the matching product
        } else {
            $(this).hide(); // Hide the non-matching product
        }
    });
});