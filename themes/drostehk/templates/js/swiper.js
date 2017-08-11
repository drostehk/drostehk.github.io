$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container.text', {
        direction: 'vertical',
        // effect : 'coverflow',
        speed: 450,
        loop: true,

        autoplay: 3000,
        autoplayDisableOnInteraction: true,
        spaceBetween: 0,

        slidesPerView: 'auto',
        centeredSlides: true,

        parallax: true,
        grabCursor: true,
        paginationClickable: true,
        touchEventsTarget: 'wrapper',
        // If we need pagination

        pagination: '.swiper-pagination-text',
        a11y: true,
        keyboardControl: true,
        onInit : function(){
            $('.swiper-slide').each(
                function(i,e){
                    // $(this).attr('data-swiper-autoplay', getRandomArbitrary(4000,6500))
                }
            )
        },
    })        
});


$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container.images', {
        direction: 'vertical',
        // effect : 'coverflow',
        speed: 450,
        loop: true,

        autoplay: 5000,
        autoplayDisableOnInteraction: true,
        spaceBetween: 0,

        slidesPerView: 'auto',
        centeredSlides: true,

        parallax: true,
        grabCursor: true,
        paginationClickable: true,
        touchEventsTarget: 'wrapper',
        // If we need pagination

        pagination: '.swiper-pagination-images',
        a11y: true,
        keyboardControl: true,
        onInit : function(){
            $('.swiper-slide').each(
                function(i,e){
                    // $(this).attr('data-swiper-autoplay', getRandomArbitrary(4000,6500))
                }
            )
        },
    })        
});


$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container.graphs', {
        direction: 'vertical',
        // effect : 'coverflow',
        speed: 450,
        loop: true,

        autoplay: 3000,
        autoplayDisableOnInteraction: true,
        spaceBetween: 0,

        slidesPerView: 'auto',
        centeredSlides: true,

        parallax: true,
        grabCursor: true,
        paginationClickable: true,
        touchEventsTarget: 'wrapper',
        // If we need pagination

        pagination: '.swiper-pagination-graphs',
        a11y: true,
        keyboardControl: true,
        onInit : function(){
            $('.swiper-slide').each(
                function(i,e){
                    // $(this).attr('data-swiper-autoplay', getRandomArbitrary(4000,6500))
                }
            )
        },
    })        
});

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}