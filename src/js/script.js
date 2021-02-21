// @@include('alert.js');

// BURGER MENU

const burger = document.querySelector('.burger'),
      nav = document.querySelector('.menu__container'),
      links = document.querySelectorAll('.menu__container li');

function slideMenu() {
    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
        burger.classList.toggle('toggle');
        
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `menuLinksFade .5s ease forwards ${index/7 + 0.3}s`
            }
        })
    })
}

slideMenu();

//  PHONE MASK

let inpTel = document.querySelectorAll('input[type="tel"]');
let phoneMask = new Inputmask('+1 (999) 999-99-99');
phoneMask.mask(inpTel);

//  VALIDATE

function validateForm(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
                .then(function (data) {
                    console.log(data);
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
});