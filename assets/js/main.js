let select = (sender) => {
    sender.style.backgroundColor = '#dfdddd';
};

let userName = document.getElementById('userName');
let userSecondName = document.getElementById('userSecondName');
let errorNameMessage = document.getElementById('userError');

let checkName = () => {
    if (userName.value == '' && userSecondName.value == '') {
        errorNameMessage.innerHTML = 'Введите имя и фамилию';
        userName.style.borderColor = '#ea4335';
        userSecondName.style.borderColor = '#ea4335';
    } else if (userName.value == '') {
        errorNameMessage.innerHTML = 'Укажите имя';
        userName.style.borderColor = '#ea4335';
    } else if (userSecondName.value == '') {
        errorNameMessage.innerHTML = 'Укажите фамилию';
        userSecondName.style.borderColor = '#ea4335';
    } else {
        errorNameMessage.innerHTML = '';
    }
};

let userLogin = document.getElementById('mail');
let userLoginError = document.getElementById('userLoginError');
let userLoginBorder = document.querySelector('.mail-container');

let checkLogin = () => {
    if (userLogin.value == '') {
        userLoginError.innerHTML = 'Укажите адрес Gmail';
        userLoginBorder.style.borderColor = '#ea4335';
    } else {
        userLoginError.innerHTML = '';
    }
};

let userPassword = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let userPasswordError = document.getElementById('userPasswordError');

let checkPassword = () => {
    if (userPassword.value == '') {
        userPasswordError.innerHTML = 'Введите пароль';
        userPassword.style.borderColor = '#ea4335';
    } else if (repeatPassword.value == '') {
        userPasswordError.innerHTML = 'Подтвердите пароль';
        repeatPassword.style.borderColor = '#ea4335';
    } else {
        userPasswordError.innerHTML = '';
    }
};

checkFormName.addEventListener('click', checkName);
checkFormName.addEventListener('click', checkLogin);
checkFormName.addEventListener('click', checkPassword);

const togglePassword = document.getElementById('show-password');

const showOrHidePassword = () => {
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeatPassword');
    if (password.type === 'password' || repeatPassword.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
};

const showOrHideRepeatPassword = () => {
    const repeatPassword = document.getElementById('repeatPassword');
    if (repeatPassword.type === 'password') {
        repeatPassword.type = 'text';
    } else {
        repeatPassword.type = 'password';
    }
};

togglePassword.addEventListener('change', showOrHidePassword);
togglePassword.addEventListener('change', showOrHideRepeatPassword);