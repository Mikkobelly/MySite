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
    // let navLinks = document.querySelectorAll('.navigation-list__item');
    // let pages = document.querySelectorAll('.page');

    // const navLinkObserver = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry.target.id);
    //         if (entry.isIntersecting) {
    //             navLinks.forEach((link) => {
    //                 link.getAttribute('id') === `${entry.target.id}` && link.classList.add('active-link')
    //             })
    //         } else {
    //             navLinks.forEach(link => link.classList.remove('active-link'));
    //         }
    //     })
    // })

    // pages.forEach(el => navLinkObserver.observe(el));

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

//Contact form validation
// (function form() {
//     const form = document.querySelector('.contact__form');
//     const nameInput = document.querySelector('input[name="name"]');
//     const emailInput = document.querySelector('input[name="email"]');
//     const telInput = document.querySelector('input[name="tel"]');


//     function showErrMsg(input, message) {
//         let container = input.parentElement;

//         //Remove an exisiting error
//         let error = container.querySelector('.error-message');
//         if (error) {
//             container.removeChild(error);
//         }

//         //Add the error if the message is not empty
//         if (message) {
//             let error = document.createElement('p');
//             error.classList.add('error-message');
//             error.innerText = message;
//             container.appendChild(error);
//         }
//     };


//     function validateNameInput() {
//         if (!nameInput.value) {
//             showErrMsg(nameInput, 'Name is a required filed');
//             return false;
//         }

//         showErrMsg(nameInput, null);
//         return true;
//     };


//     function validateEmailInput() {
//         if (!emailInput.value) {
//             showErrMsg(emailInput, 'Email is a required filed');
//             return false;
//         } else if (emailInput.value.indexOf('@') === -1
//             || emailInput.value.indexOf('.') === -1) {
//             showErrMsg(emailInput, 'Enter a valid email address');
//             return false;
//         }

//         showErrMsg(emailInput, null);
//         return true;
//     };


//     function validateTelInput() {
//         const parsedInput = Number(telInput.value);
//         if (isNaN(parsedInput)) {
//             showErrMsg(telInput, 'Enter a valid telephone number');
//             return false;
//         }

//         showErrMsg(telInput, null);
//         return true;
//     };


//     function validateForm() {
//         const isValidNameInput = validateNameInput();
//         const isValidEmailInput = validateEmailInput();
//         const isValidTelInput = validateTelInput();

//         return isValidNameInput && isValidEmailInput && isValidTelInput;
//     };


//     nameInput && nameInput.addEventListener('input', validateNameInput);
//     emailInput && emailInput.addEventListener('input', validateEmailInput);
//     telInput && telInput.addEventListener('input', validateTelInput);


//     form && form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             alert('Form submitted!');
//         } else {
//             alert('Please make adjustment to fullfill requirments')
//         }
//     });
// })();