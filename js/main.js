const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// new Accordion('.accordion-container', {
//     duration: 350,
//     showMultiple: true,
//   });

// new Accordion('.accordion-container2', {
// duration: 350,
// showMultiple: true,
// });