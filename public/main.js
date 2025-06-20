// Toggle Button
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0px]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0px]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// Scroll Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
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

// Scroll Up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// Active link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: false,
});

sr.reveal(".home_data, .about_top, .popular_top, .review_top, .review_swiper, .footer_icon, .footer_content, .copy_right");
sr.reveal(".home_image", { delay: 500, scale: 0.5 });
sr.reveal(".service_card, .popular_card", { interval: 100 });

sr.reveal(".about_item_1-content,.about_item_1-img ", { delay: 300, origin: "right" });
sr.reveal(".about_item_2-content,.about_item_2-img ", { delay: 450, origin: "left" });
sr.reveal(".about_item_3-content,.about_item_3-img ", { delay: 550, origin: "right" });

sr.reveal(".footer_office", { delay: 1000, origin: "left" });
