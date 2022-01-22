let formInput = document.querySelectorAll('.valid'),
    btnSend = document.querySelector('#btnSend');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function mes(selector, message) {
    let elem = document.querySelector(selector);
    elem.style.boxShadow = '0 0 7px 3px rgb(228, 81, 81)';

    if (document.querySelector('.message')) { document.querySelector('.message').remove(); }
    elem.insertAdjacentHTML('beforeBegin', `<p class='message'>${message}</p>`);
}

$('.valid').on('click', () => {
    $('.valid').css('box-shadow', 'none');
    if (document.querySelector('.message')) {
        document.querySelector('.message').remove();
    }
})


function checkForm() {
    let res1 = $('#full-name').val().length > 1;
    if (!res1) { mes('#full-name', 'Введите своё имя!'); return false; }

    let res2 = validateEmail($('#email').val());
    if (!res2) { mes('#email', 'Email введён некорректно!'); return false; }

    let res3 = $('#subject').val().length > 1;
    if (!res3) { mes('#subject', 'Введите тему письма!'); return false; }

    let res4 = $('#message').val().length > 25;
    if (!res4) { mes('#message', 'Введите сообщение!'); return false; }

    if (res1 && res2 && res3 && res4) { return true; } else { return false; }
}



btnSend.addEventListener('click', (e) => {
    if (!checkForm()) {
        return false;
    }
    let name = $('#full-name').val(),
        email = $('#email').val(),
        subject = $('#subject').val(),
        message = $('#message').val();

    send = send_email(email, name, subject, message);
    name = $('#full-name').val('');
    email = $('#email').val('');
    subject = $('#subject').val('');
    message = $('#message').val('');

    alert('Your message has been successfully sent !!!');

})