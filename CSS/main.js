// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


