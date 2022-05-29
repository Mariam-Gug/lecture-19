document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;

        // username
    let username = document.querySelector('[name = "username"]').value;

    if(username.length < 4 || username == '') {
        errors.username = 'Please enter at least 4 symbols';
    }

    // password
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2');

    if(password != password2 || password == '') {
        errors.password = 'Please enter at least 6 symbols';
        errors.password2 = 'Passwords do not match';
    }
});