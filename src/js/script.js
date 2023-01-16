// BURGER MENU

const menu = document.querySelector('.menu__container'),
    menuItems = document.querySelectorAll('.menu__item'),
    burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('menu-active');
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('menu-active');
    })
})

//  PHONE MASK

let inpTel = document.querySelectorAll('input[type="tel"]');
let phoneMask = new Inputmask('+1 (999) 999-99-99');
phoneMask.mask(inpTel);

//  VALIDATE

function validateForm(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form) {
            let formData = new FormData(form);

            // * Execute file e.g mail.php
            fetch('', {
                method: 'POST',
                body: formData
            })
                .then((data) => {
                    console.log('Отправлено');
                    form.reset();
                });
        }
    })
}

validateForm('.book-form', {
    numpeople: {
        required: true,
    },
    date: {
        required: true,
    },
    time: {
        required: true,
    },
    username: {
        required: true,
    },
    email: {
        required: true,
        email: true,
    },
    tel: {
        required: true,
    }
})

// SLIDER

new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 1000,
})

new WOW().init();