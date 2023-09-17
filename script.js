let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navlist.classList.toggle('open');

};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

});
sr.reveal('.hero-text', { delay:200, origin:'top'});
sr.reveal('.hero-img', { delay:450, origin:'top'});
sr.reveal('.icons', { delay:500, origin:'left'});
sr.reveal('.scroll-down', { delay:500, origin:'right'});





// document.addEventListener('DOMContentLoaded', () => {

//     // Get all "navbar-burger" elements
//     const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {
    
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);
    
//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
    
//       });
//     });
    
//     });