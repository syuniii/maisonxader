$(document).ready(function(){
    
    // 로고 opacity 기능
    $('.logo-a').mouseenter(function(){
        $('.logo-m').addClass('active');
    });
    $('.logo-a').mouseleave(function(){
        $('.logo-m').removeClass('active');
    });
    $('.logo-m').mouseenter(function(){
        $('.logo-a').addClass('active');
    });
    $('.logo-m').mouseleave(function(){
        $('.logo-a').removeClass('active');
    });

    new Swiper(".mySwiper",{
        direction : "vertical",
        slidePerview : "auto",
        speed : 1500,
        loop : true,
        autoplay : {
            delay : 1500,
            disableOnInteraction : false,
        }
    });
});