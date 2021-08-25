let menuArrow = document.querySelector(".first-item");

menuArrow.addEventListener("click", () => {
  let menuDropdown = document.querySelector(".menu-dropdown");
  menuDropdown.classList.toggle("aktiv-dropdown");
  menuArrow.classList.toggle("arrow");
});
//=============================================================
// slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  grabCursor: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween:   0,
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
