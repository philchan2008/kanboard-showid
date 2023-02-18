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
const head_original_position = $('#id_sidebar_head').css('position');
const head_original_top = $('#id_sidebar_head').css('top');
const head_original_left = $('#id_sidebar_head').css('left');
const head_original_font_size = $('#id_sidebar_head').css('fontSize');

$(window).scroll(function() {
    var height = $(window).scrollTop();    
    if (height > 80) {
        $('#id_top_right').fadeIn();
        $('#id_bottom_left').fadeIn();
    } else {
        $('#id_top_right').fadeOut();
        $('#id_bottom_left').fadeOut();
    }
    if (height >90) {
        $('#id_sidebar_head').fadeIn();
        $('#id_sidebar_head').css({
            position: 'fixed',
            top: '10px',
            left: '155px',
            fontSize: '20px'
        });
    } else {
        $('#id_sidebar_head').fadeOut();
        $('#id_sidebar_head').css({
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
    $('#task-summary').find('h2').html($('#id_task_title').html());
    $('.comment').each(function(index) {
       $(this).find('.comment-title').html(
        $('#id_comment_title').html().replace(
            "$comment_id",
            $(this).attr('id').replace("comment-","").trim())
            +$(this).find('.comment-title').html());
    });
    $('.subtasks-table > tbody > tr').each(function(index) {
        $(this).find('.subtask-title a').html(
            '<div>'+
            $(this).find('.subtask-title a').html() +
            $('#id_subtask_title').html().replace(
                "$subtask_id",
                $(this).attr("data-subtask-id"))
            +'</div>'
        );
     });
});
