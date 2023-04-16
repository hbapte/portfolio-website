var typed = new Typed('.typed', {
    strings: ['Frontend Developer', 'Blogger'],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });