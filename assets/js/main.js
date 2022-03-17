let  select = (sender) => {
    sender.style.backgroundColor = '#dfdddd';
};

let userName = document.getElementById('userName');
let userSecondName = document.getElementById('userSecondName');
let errorNameMessage = document.getElementById('userError');

function checkName() {
    if (userName.value == '' && userSecondName.value == '') {
        errorNameMessage.innerHTML = 'Заполните поля Имя и Фамилия';
    } else if (userName.value == '') {
        errorNameMessage.innerHTML = 'Заполните поле Имя';
    } else if (userSecondName.value == '') {
        errorNameMessage.innerHTML = 'Заполните поле Фамилия';
    } else {
        errorNameMessage.innerHTML = '';
    }  
};

let userLogin = document.getElementById('mail');
let userLoginError = document.getElementById('userLoginError');
function checkLogin() {
    if (userLogin.value == '') {
        userLoginError.innerHTML = 'Заполните имя пользователя';
    } else {
        userLoginError.innerHTML = '';
    }
};

let userPassword = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let userPasswordError = document.getElementById('userPasswordError');
function checkPassword() {
    if (userPassword.value == '' && repeatPassword.value == '') {
        userPasswordError.innerHTML = 'Заполните поля Пароль и Подтвердить пароль';
    } else if (userPassword.value == '') {
        userPasswordError.innerHTML = 'Заполните поле Пароль';
    } else if (repeatPassword.value == '') {
        userPasswordError.innerHTML = 'Заполните поле Подтвердить пароль';
    } else {
        userPasswordError.innerHTML = '';
    }  
};

checkFormName.addEventListener('click', checkName);
checkFormName.addEventListener('click', checkLogin);
checkFormName.addEventListener('click', checkPassword);