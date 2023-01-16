
/* Menu */

const nav = document.querySelector('.mobile-nav')
const navMenuBtn = document.querySelector('.nav-menu-btn')
const navCloseBtn = document.querySelector('.nav-close-btn')

const navToggleFunc = function () {
    nav.classList.toggle('active')
}

navMenuBtn.addEventListener('click', navToggleFunc)
navCloseBtn.addEventListener('click', navToggleFunc)

/* Theme */

const themeBtn = document.querySelectorAll('.theme-btn')

for (let i = 0; i < themeBtn.length; i++) {

    themeBtn[i].addEventListener('click', function () {

        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {

            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');
        }
    })
}

/* Slider */

var swiper = new Swiper(".strings-slider", {

    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".featured-slider", {
  
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
          delay: 9500,
          disableOnInteraction: false,
      },
  
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  
    var swiper = new Swiper(".arrivals-slider", {
  
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
          delay: 9500,
          disableOnInteraction: false,
      },
  
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });