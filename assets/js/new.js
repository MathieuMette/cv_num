var previousButton = document.querySelector('#previousButton');
var nextButton = document.querySelector('#nextButton');
var manuRyla = document.querySelector('#manuRyla');
var btsBac = document.querySelector('#btsBac');


nextButton.addEventListener('click', function() {
    manuRyla.classList.toggle('active');
    btsBac.classList.toggle('active');
})
previousButton.addEventListener('click', function() {
    manuRyla.classList.toggle('active');
    btsBac.classList.toggle('active');
})


// Bar nav
var navBar = document.querySelector('#mm-navBar');
var navLinks = document.querySelectorAll('.nav-link');
var navItems = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', function() {
    if (window.scrollY >= '550'){
        navBar.style.opacity = 1;
    } else if (window.scrollY < '550') {
        navBar.style.opacity = 0;
    } 
})