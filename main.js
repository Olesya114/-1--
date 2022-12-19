function addZero(val) {
    return val < 10 ? '0' + val : val;
}

function getClockTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    document.getElementById('clock').innerHTML = year + '.' + month + '.' + day + ' ' + '/' + hours + ':' + minutes + ':' + seconds;
}

setInterval(getClockTime, 1000);


function auth() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    if (!login)
        showErrorMessage('Впишите арес электронной почты!');
    else if(!login.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        showErrorMessage('Впишите коректный арес электронной почты!');
    else if (!password)
        showErrorMessage('Впишите пароль!');
    else if (!password.match(/[0-9]/))
        showErrorMessage('Добавьте хотя бы одну цифру в пароль');
    else if (!password.match(/(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/))
        showErrorMessage('Добавьте хотя бы один спецсимвол в пароль');
    else if (!password.match(/[a-zа-я]/))
        showErrorMessage('Добавьте хотя бы одну букву в нижнем регистре в пароль');
    else if (!password.match(/[A-ZА-Я]/))
        showErrorMessage('Добавьте хотя бы одну букву в верхнем регистре в пароль');
    else if (password.length < 6)
        showErrorMessage('Пароль должен содержать не менее 6 значений');
    else
        alert('Вы успешно авторизованы!!!');
    }

function showErrorMessage(message) {
    const error = document.getElementById('errorMessage');
    error.innerHTML = message;
    setTimeout(function() {
        error.innerHTML = '';
    }, 5000) }