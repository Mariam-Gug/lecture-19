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

    // password
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if(password != password2 || password == '') {
        errors.password = 'Please enter at least 6 symbols';
        errors.password2 = 'Passwords do not match';
    }

    // checkbox
    let agree = document.getElementById('check-agree').checked;
    if(agree == false) {
        errors.agree = 'You have not agreed to the terms and conditions';
    }

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
});
