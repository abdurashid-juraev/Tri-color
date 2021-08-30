let menuArrow = document.querySelector(".first-item");

menuArrow.addEventListener("click", () => {
  let menuDropdown = document.querySelector(".menu-dropdown");
  menuDropdown.classList.toggle("aktiv-dropdown");
  menuArrow.classList.toggle("arrow");
});
//=================================
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

// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();

  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
$("ul.tabs li").last().addClass("tab_last");
//=====================================================================
// intro tab

$(".tab_contentx").hide();
$(".tab_contentx:first").show();

/* if in tab mode */
$("ul.tabsx li").click(function () {
  $(".tab_contentx").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.tabsx li").removeClass("activex");
  $(this).addClass("activex");

  $(".tab_drawer_headingx").removeClass("d_activex");
  $(".tab_drawer_headingx[rel^='" + activeTabx + "']").addClass("d_activex");
});
/* if in drawer mode */
$(".tab_drawer_headingx").click(function () {
  $(".tab_contentx").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();

  $(".tab_drawer_headingx").removeClass("d_activex");
  $(this).addClass("d_activex");

  $("ul.tabsx li").removeClass("activex");
  $("ul.tabsx li[rel^='" + d_activeTab + "']").addClass("activex");
});
//=============================================================
// swiper in tab
new Swiper('.swiper-container2', {
  loop: true,
  slideToClickedSlide: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});