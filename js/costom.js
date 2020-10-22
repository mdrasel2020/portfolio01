$(document).ready(function () {
    //slider
    $('.slider_area').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
         autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    });
    
    
    
    
     //slider two
    $('.two_slider_con').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  
    
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_nav_bg');
        
        if(scrolling >= 100){
            sticky.addClass('nav-bg');
        }
        else{
            sticky.removeClass('nav-bg');
        }
    });
    
    
     
    // Smooths scrolling
    
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });
    
    
    
  // wow  js
    new WOW().init();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});