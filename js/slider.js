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

let cont5_width = document.querySelector(".cont5").clientWidth;

if(cont5_width > 990){
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
    slidesPerView : 6
  });
}

else if (cont5_width <= 990 && cont5_width > 768) {
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
    slidesPerView : 4
  });
}

else if (cont5_width <= 768) {
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
    slidesPerView : 3
  });
}