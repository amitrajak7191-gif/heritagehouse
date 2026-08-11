/* ========================================
   THE HERITAGE HOUSE
   COMPLETE WEBSITE SCRIPT
======================================== */


/* PAGE LOADER */

document.body.classList.add("loader-active");

window.addEventListener("load", () => {

  const loader = document.getElementById("pageLoader");

  setTimeout(() => {

    if (loader) {
      loader.classList.add("hide");
    }

    document.body.classList.remove("loader-active");

    document.body.classList.add("loaded");

  }, 1600);

});


/* MOBILE MENU */

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

  });


  mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

    });

  });

}


/* SCROLL REVEAL */

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);

revealItems.forEach(item => {

  revealObserver.observe(item);

});


/* HEADER SCROLL EFFECT */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 40) {

    header.style.background = "rgba(8,8,8,.95)";

  } else {

    header.style.background = "rgba(8,8,8,.74)";

  }

});


/* SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(event) {

    const href = this.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

});
/* LUXURY CURSOR GLOW */

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow && window.innerWidth > 980) {

  document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = "1";

  });

  document.addEventListener("mouseleave", () => {

    cursorGlow.style.opacity = "0";

  });

}
/* ========================================
   HERO PARALLAX
======================================== */

const heroSection = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");

if (heroSection && heroVisual && window.innerWidth > 980) {

  heroSection.addEventListener("mousemove", (event) => {

    const rect = heroSection.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroVisual.style.transform =
      `translate(${x * 14}px, ${y * 14}px)`;

  });

  heroSection.addEventListener("mouseleave", () => {

    heroVisual.style.transform = "translate(0, 0)";

  });

}