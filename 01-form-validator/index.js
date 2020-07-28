const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e){
    // flash 현상 방지
    e.preventDefault();

    if (username.value === ''){
        showError(username, '이름을 입력해주세요.');
    } else if (username.value.length < 3 || username.value.length > 15){
        showError(username, '이름의 길이는 3자 이상 15자 이하여야 합니다.');
    } else {
        showSuccess(username);
    }

    if (email.value === ''){
        showError(email, '이메일을 입력해주세요.');
    } else if (!isValidEmail(email.value)) {
        showError(email, '유효한 이메일 형식이 아닙니다.');
    } else {
        showSuccess(email);
    }

    if (password.value === ''){
        showError(password, '암호를 입력해주세요.');
    } else if (password.value.length < 6 || password.value.length > 18){
        showError(password, '암호의 길이는 6자 이상 18자 이하여야 합니다.');
    } else {
        showSuccess(password);
    }

    if (password2.value === ''){
        showError(password2, '암호 확인을 입력해주세요.');
    } else if (password.value !== password2.value) {
        showError(password2, '임호가 일치하지 않습니다.')
    } else {
        showSuccess(password2);
    }
});

form.addEventListener('submit', function(e){
    // flash 현상 방지
    e.preventDefault();
});

function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// 유효한 이메일 형식인지 확인
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}