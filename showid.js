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

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 80) {
        $('#id_top').fadeIn();
    } else {
        $('#id_top').fadeOut();
    }
});

$(document).ready(function () {
    /*$('#id_bottom').show();*/
    /*$('#id_top').show();*/
});
