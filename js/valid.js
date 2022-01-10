let formInput = document.querySelectorAll('.valid'),
    btnSend = document.querySelector('#btnSend');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function mes(selector, message) {
    let elem = document.querySelector(selector);

    // elem.style.border = '1px solid rgb(228, 81, 81)';
    elem.style.boxShadow = '0 0 7px 3px rgb(228, 81, 81)';
    elem.placeholder = `${message}`;
}

$('#full-name').on('click', () => {
    $('#full-name').css('box-shadow', 'none');
    document.querySelector('#full-name').placeholder = 'Name';
})

$('#email').on('click', () => {
    $('#email').css('box-shadow', 'none');
    document.querySelector('#email').placeholder = 'Email';
})

$('#subject').on('click', () => {
    $('#subject').css('box-shadow', 'none');
    document.querySelector('#subject').placeholder = 'Subject';
})

$('#message').on('click', () => {
    $('#message').css('box-shadow', 'none');
    document.querySelector('#message').placeholder = 'Message';
})

function checkForm() {
    let res1 = document.querySelector('#full-name').value.length > 1;
    if (!res1) { mes('#full-name', 'You need to write a name'); return false; }

    let res2 = validateEmail(document.querySelector('#email').value);
    if (!res2) { mes('#email', 'Incorrect mail'); return false; }

    let res3 = document.querySelector('#subject').value.length > 2;
    if (!res3) { mes('#subject', 'Subject must be at least 2 characters'); return false; }

    let res4 = document.querySelector('#message').value.length > 1;
    if (!res4) { mes('#message', 'You need to write a message'); return false; }

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