// @@include('alert.js');

//  PHONE MASK

let inpTel = document.querySelectorAll('input[type="tel"]');
let phoneMask = new Inputmask('+1 (999) 999-99-99');
phoneMask.mask(inpTel);

//  VALIDATE

function validateForm (selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(function(data) {
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
