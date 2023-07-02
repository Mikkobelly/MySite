// Collapsible navigation
(function navCollapse() {
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


// Active navigation link
(function activeNavLink() {
    let sections = document.querySelectorAll('.section');
    let navItems = document.querySelectorAll('.navigation-list__item');

    let option = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navItems.forEach(item => {
                    item.classList.remove('active-link');
                    const targetedNavItem = document.querySelector(`.navigation-list__item[href="#${entry.target.id}"]`);
                    targetedNavItem && targetedNavItem.classList.add('active-link');
                });
            }
        })
    }, option);

    sections.forEach(item => observer.observe(item));
})();


// Animation
(function animation() {
    const addObserver = (targetEls, className) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting && entry.target.classList.add(className);
            })
        });
        targetEls.forEach(item => observer.observe(item));
    }

    // Elements fade in
    const fadeInItems = document.querySelectorAll('.fade-in__item');
    addObserver(fadeInItems, 'fade-in');

    // Elements slide in from the bottom
    const bottomInItems = document.querySelectorAll('.bottom-in__item');
    addObserver(bottomInItems, 'bottom-in');

    // Elements slide in from the top
    const topInItems = document.querySelectorAll('.top-in__item');
    addObserver(topInItems, 'top-in');

    // Elements slide in from the left
    const leftInItems = document.querySelectorAll('.left-in__item');
    addObserver(leftInItems, 'left-in');

    // Elements slide in from the right
    const rightInItems = document.querySelectorAll('.right-in__item');
    addObserver(rightInItems, 'right-in');

    // Elements appearing with delay
    const delayInItems = document.querySelectorAll('.delay-in__item');
    addObserver(delayInItems, 'delay-in');
})();