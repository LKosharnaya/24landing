$('.block-steps .row').on('click', function() {
    $('.block-steps .block-form').addClass('anime');
    $('.block-steps .row').addClass('anime');
});
$('.btn.close-form').on('click', function() {
    $('.block-steps .block-form').removeClass('anime');
    $('.block-steps .block-form').addClass('anime2');
    $('.block-steps .row').removeClass('anime');
});
$('.slider-rewiew').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1

});
$('.btn.file').on('click', function() {
    $('input.file').click();
});
$('input.file').on('change', function() {
    var val = $(this).val();
    if (val !== '') {
        $('.name-file').text(val);
        $('.name-file').show();
        $('.btn.file').hide();
    }
});