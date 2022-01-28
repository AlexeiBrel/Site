const burger = document.querySelector('.navbar-toggle'),
    menu = document.querySelector('.header-bottom'),
    closeBtn = document.querySelector('.closeBtn'),
    body = document.body,
    wrapper = document.querySelector('.wrapper');


burger.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('lock');
    wrapper.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
    wrapper.classList.remove('active');
})

window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        body.classList.remove('lock');
    }, 1000);
}

// -----------initialization---------------//