document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;

    // username
    // let username = document.querySelector('[name = "username"]').value;
    let username = document.getElementById('username').value;

    if (username.length < 4 || username == '') {
        errors.username = 'Please enter at least 4 symbols';
    };

    // mail
    let mail = document.getElementById('email').value;
    if (mail == '') {
        errors.mail = 'Please enter your email';
    }

    // password
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if(password != password2 || password == '') {
        errors.password = 'Please enter at least 6 symbols';
        errors.password2 = 'Passwords do not match';
    };

    // checkbox
    let agree = document.getElementById('agree').checked;
    if(!agree) {
        errors.agree = 'You have not agreed to the terms and conditions';
    };

    // radio
    let age = false;

    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }
    });

    // if (age == false) {
    //     errors.age = 'Please select your age';
    // }

    if (!age) {
        errors.age = 'Please select your age';
    }

    // console.log(errors);

    form.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML = '';
    });
    
    for (let item in errors) {
        let errorSpan = document.getElementById('error_' + item);

        if(errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
});


    // show/hide password
    let passwordShow = document.getElementById('password');
    let toggleIconEye = document.getElementById('toggleIcon');
    let passwordShow2 = document.getElementById('password2');
    let toggleIconEye2 = document.getElementById('toggleIcon2');

    showHidePassword1 = () => {
        if (passwordShow.type =='password') {
            passwordShow.setAttribute('type', 'text');
            toggleIconEye.classList.add('fa-eye-slash');
        } else {
            toggleIconEye.classList.remove('fa-eye-slash');
            passwordShow.setAttribute('type', 'password');
        }
    };

    showHidePassword2 = () => {
        if (passwordShow2.type == 'password') {
            passwordShow2.setAttribute('type', 'text')
            toggleIconEye2.classList.add('fa-eye-slash');
        } else {
            passwordShow2.setAttribute('type', 'password');
            toggleIconEye2.classList.remove('fa-eye-slash');
        }
    }

    toggleIconEye.addEventListener('click', showHidePassword1);
    toggleIconEye2.addEventListener('click', showHidePassword2);



    // mail validation
    function validation() {
        let emailField = document.getElementById('email').value;
        let emailSpan = document.getElementById('error_mail');
        let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailField.match(emailStructure)) {
            emailSpan.innerHTML = 'Your email is valid';
            emailSpan.style.color = 'MediumSpringGreen';
        } else {
            emailSpan.innerHTML = 'Your email is invalid';
        }
    }