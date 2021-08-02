$(document).ready(function() {
    $('.sub_nav').hide();
    $(window).scroll(function() {
         let current_scroll = $(window).scrollTop();
         let height0 = $('#video0').offset().top;
         let height1 = $('#video1').offset().top;
         let height2 = $('#video2').offset().top;
         let height3 = $('.credit').offset().top;
         if(current_scroll >= (height0 - 400) & current_scroll < height0) {
            $("#blank0").addClass('shown');
            $("#blank0 .border_long").addClass('border_l_down');
            $("#blank0 .border_short").addClass('border_s_down_0');
         } else if(current_scroll >= (height1 - 400) & current_scroll < height1) {
             $("#blank1").addClass('shown');
             $("#blank1 .border_long").addClass('border_l_down');
             $("#blank1 .border_short").addClass('border_s_down');
         }   else if(current_scroll >= (height2 - 400) & current_scroll < height2) {
            $("#blank2").addClass('shown');
            $("#blank2 .border_long").addClass('border_l_down');
            $("#blank2 .border_short").addClass('border_s_down');
         }   else if(current_scroll >= (height3 - 400) & current_scroll < height3) {
            $("#credit_blank").addClass('shown');
            $("#credit_border_long").addClass('credit_border_l');
            $("#credit_border_short").addClass('credit_border_s');
         }   else {
             return;
         }
    })
})

$('#article_btn').on('click', function() {
    $('.fog').hide();
    $('.article_hidden').show();
    $('.article_num').show();
    $(this).hide();
})