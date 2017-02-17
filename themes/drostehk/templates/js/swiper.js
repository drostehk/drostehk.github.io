$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        // effect : 'coverflow',
        speed: 450,
        loop: true,

        autoplay: 1000,
        autoplayDisableOnInteraction: true,

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
                    $(this).attr('data-swiper-autoplay',getRandomArbitrary(4000,6500))
                }
            )
        },
    })        
});


function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}