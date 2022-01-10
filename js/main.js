let show = true;
$(window).on("scroll load resize", function() {
    if (!show) return false;
    let w_top = $(window).scrollTop(),
        e_top = $('.about-main').offset().top,
        w_height = $(window).height(),
        d_height = $(document).height(),
        e_height = $('.about-main').outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.benefits__number').css('opacity', '1');
        $('.benefits__number').spincrement({ thousandSeparator: "", duration: 8000 });
        show = false;
    }
});