$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // effect : 'coverflow',
        speed: 450,
        loop: true,

        autoplay: 3000,
        autoplayDisableOnInteraction: true,
        spaceBetween: 30,

        slidesPerView: 'auto',
        centeredSlides: true,

        parallax: true,
        grabCursor: true,
        paginationClickable: true,
        touchEventsTarget: 'wrapper',
        // If we need pagination

        pagination: '.swiper-pagination',
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