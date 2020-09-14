$('.block-steps .row').on('click', function() {
    $('.block-steps .block-form').removeClass('anime2');
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
$('.block-reviews-contact .block-contact').on('mouseover', function(){
    $('.block-reviews-contact .block-rewiew').addClass('anime');

});
$('.block-reviews-contact .block-contact').on('mouseout', function(){
    $('.block-reviews-contact .block-rewiew').removeClass('anime');

});
$(document).ready(function(){
    var vwidth = $(window).width();
    var $element = $('.block-licenses');   
    if(vwidth<=1024){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop() + $(window).height();
            //Если скролл до конца елемента
            var offset = $element.offset().top + $element.height()-100;
            //Если скролл до начала елемента
            //var offset = $element.offset().top;
           
            if (scroll > offset) {
                $('.block-licenses .row').addClass('anime');
            }
         });
    }
});