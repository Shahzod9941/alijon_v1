
 const modal__swiper = new Swiper('.modal__swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        }        
    }
  });

  const modal__swiper2 = new Swiper('.modal__swiper2', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        }        
    }
  });

  const modal__swiper3 = new Swiper('.modal__swiper3', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        }        
    }
  });


    // Swiper JS Modal //
    $('.modal').on('shown.bs.modal', function(e) {
        modal__swiper.update();
      });
      