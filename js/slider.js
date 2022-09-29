const swiper01 = new Swiper('.top .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:"slide",
  speed: 1000,
  autoplay: {
      delay: 3000,
      disableOnInteraction:false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  }
});


const swiper02 = new Swiper('.bot .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:"slide",
  speed: 1000,
  autoplay: {
      delay: 3000,
      disableOnInteraction:false
  },
  slidesPerView : 6,
});