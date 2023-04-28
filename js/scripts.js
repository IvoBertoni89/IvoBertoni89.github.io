/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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
  });

$(window).load(function() {
    $('.flexslider').flexslider();
});


window.sr = ScrollReveal();
sr.reveal('.scroll-section1', {
   duration: 3000,
   origin: 'bottom',
   distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.titulo', {
   duration: 2000,
   origin: 'bottom',
   distance: '-100px'
});

const typed = new Typed('.typed', {
    strings: [
        'TU SOLUCION INFORMATICA',
    ],
    typeSpeed: 75,
    startDelay: 1400, 
});


window.sr = ScrollReveal();
sr.reveal('.productos', {
    origin: 'left',
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false

});

window.sr = ScrollReveal();
sr.reveal('.bg-light', {
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false

});

window.sr = ScrollReveal();
sr.reveal('.portfolio', {
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false

});

window.sr = ScrollReveal();
sr.reveal('#about', {
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false

});

window.sr = ScrollReveal();
sr.reveal('#contact', {
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false

});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$('.carousel').carousel({
    interval: 6000
  });



