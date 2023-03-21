// Collapsible navigation
(function (navigation) {
    const menuIcon = document.querySelector('.dropdown__menu');
    const closeIcon = document.querySelector('.dropdown__close');
    const menuIconBox = document.querySelector('.dropdown__menu-box');
    const navList = document.querySelector('.navigation-list');

    menuIcon.addEventListener('click', () => {
        navList.classList.add('isVisible');
        menuIconBox.classList.add('hidden');
    })

    closeIcon.addEventListener('click', () => {
        navList.classList.remove('isVisible');
        menuIconBox.classList.remove('hidden');
    })
})();

// 

// Intersection observer
(function (observer) {
    // Elements fade in
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        })
    })

    const fadeInItems = document.querySelectorAll('.fade-in__item');
    fadeInItems.forEach(item => fadeInObserver.observe(item));

    // Elements slide in from the bottom
    const bottomInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('bottom-in');
            }
        })
    })

    const bottomInItems = document.querySelectorAll('.bottom-in__item');
    bottomInItems.forEach(item => bottomInObserver.observe(item));

    // Elements slide in from the top
    const topInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('top-in');
            }
        })
    })

    const topInItems = document.querySelectorAll('.top-in__item');
    topInItems.forEach(item => topInObserver.observe(item));

    // Elements slide in from the left
    const leftInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('left-in');
            } else {
                entry.target.classList.remove('left-in');
            }
        })
    })

    const leftInItems = document.querySelectorAll('.left-in__item');
    leftInItems.forEach(item => leftInObserver.observe(item));

    // Elements slide in from the right
    const rightInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('right-in');
            } else {
                entry.target.classList.remove('right-in');
            }
        })
    })

    const rightInItems = document.querySelectorAll('.right-in__item');
    rightInItems.forEach(item => rightInObserver.observe(item));

    // Elements appearing with delay
    const delayInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('delay-in');
            }
        })
    })

    const delayInItems = document.querySelectorAll('.delay-in__item');
    delayInItems.forEach(item => delayInObserver.observe(item));
})();