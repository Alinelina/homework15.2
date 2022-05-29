let select = (sender) => {
    sender.style.backgroundColor = '#dfdddd';
};

// проверка полей имен

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
    } else if ((userName.value <= 3) || (userName.value >= 16)) {
        errorNameMessage.innerHTML = 'Имя не должно быть меньше 3 и больше 16 символов';
        userName.style.borderColor = '#ea4335';
    } else if (userSecondName.value == '') {
        errorNameMessage.innerHTML = 'Укажите фамилию';
        userSecondName.style.borderColor = '#ea4335';
    } else if ((userSecondName.value <= 2) || (userSecondName.value >= 16)) {
        errorNameMessage.innerHTML = 'Имя не должно быть меньше 3 и больше 16 символов';
        userSecondName.style.borderColor = '#ea4335';
    } else {
        errorNameMessage.innerHTML = '';
    }
};

checkFormName.addEventListener('click', checkName);

// Проверка поля логина

let userLogin = document.getElementById('mail');
let userLoginError = document.getElementById('userLoginError');
let userLoginBorder = document.querySelector('.mail-container');

let checkLogin = () => {
    if (userLogin.value != "") {
        let regexp = /^[a-z\d\.]+$/i;
        if (regexp.test(userLogin.value)) {
            userLoginError.innerText = '';
        } else {
            userLoginBorder.style.borderColor = '#ea4335';
            userLoginError.innerText = 'Разрешены только латинские символы, цифры и точки!';
        }
    } else {
        userLoginBorder.style.borderColor = '#ea4335';
        userLoginError.innerText = 'Укажите адрес Gmail';
    }
};

checkFormName.addEventListener('click', checkLogin);

// Проверка полей паролей

let userPassword = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let userPasswordError = document.getElementById('userPasswordError');

let validPassword = () => {
    if (userPassword.value != '') {
        let regexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
        if (regexp.test(userPassword.value)) {
            userPasswordError.innerHTML = '';
        } else {
            repeatPassword.style.borderColor = '#ea4335';
            userPasswordError.innerHTML = 'Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы';
        }
    }
};

userPassword.addEventListener('input', validPassword);

let checkPassword = () => {
    if (userPassword.value == '') {
        userPasswordError.innerHTML = 'Введите пароль';
        userPassword.style.borderColor = '#ea4335';
    } else if (repeatPassword.value == '') {
        userPasswordError.innerHTML = 'Подтвердите пароль';
        repeatPassword.style.borderColor = '#ea4335';
    } else if (password.value !== repeatPassword.value) {
        userPasswordError.innerHTML = 'Пароли не совпадают. Повторите попытку.';
    } else {
        userPasswordError.innerHTML = '';
    }
};



checkFormName.addEventListener('click', checkPassword);

// Показать или скрыть пароль

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

checkFormName.addEventListener('click', checkPassword);