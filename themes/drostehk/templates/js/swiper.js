$(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'horizontal',
        // effect : 'coverflow',
        // fade: {
          // crossFade: true
        // },
        // speed: 300,
        loop: true,

        autoplay: 1000,
        // autoplayDisableOnInteraction: true,

        // parallax: true,
        // grabCursor: true,
        // paginationClickable: true,
        // touchEventsTarget: 'wrapper',
        // If we need pagination

        // pagination: '.swiper-pagination',
        // a11y: true,
        // keyboardControl: true,
    
        // Navigation arrows
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
    })        
});


function getRandomArbitrary(min, max) {
  return pasrseInt(Math.random() * (max - min) + min);
}