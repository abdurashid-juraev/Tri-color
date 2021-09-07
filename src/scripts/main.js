let menuArrow = document.querySelector(".first-item");

menuArrow.addEventListener("click", () => {
  let menuDropdown = document.querySelector(".menu-dropdown");
  menuDropdown.classList.toggle("aktiv-dropdown");
  menuArrow.classList.toggle("arrow");
});

//
//=================================
// slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  grabCursor: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-paginationx",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
//===================================================

//=============================================================
// swiper in tab
var swiper = new Swiper(".mySwiperx", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    575: {
      items:1,
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1200: {
      items: 3,
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
