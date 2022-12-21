/*
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#id_buttom').fadeOut();
    } else {
        $('#id_buttom').fadeIn();
    }
});
*/
const head_original_position = $('#id_head').css('position');
const head_original_top = $('#id_head').css('top');
const head_original_left = $('#id_head').css('left');
const head_original_font_size = $('#id_head').css('fontSize');

$(window).scroll(function() {
    var height = $(window).scrollTop();    
    if (height > 80) {
        $('#id_top_right').fadeIn();
        $('#id_bottom_left').fadeIn();
    } else {
        $('#id_top_right').fadeOut();
        $('#id_bottom_left').fadeOut();
    }
    if (height > 80) {
        $('#id_head').css({
            position: 'fixed',
            top: '10px',
            left: '160px',
            fontSize: '20px'
        });
    } else {
        $('#id_head').css({
            position: head_original_position,
            top: head_original_top,
            left: head_original_left,
            fontSize: head_original_font_size
        });
    }
});

$(document).ready(function () {
    /*$('#id_bottom').show();*/
    /*$('#id_top_right').show();*/
    $('.sidebar-title').first().html($('#id_sidebar_title').html());
});
