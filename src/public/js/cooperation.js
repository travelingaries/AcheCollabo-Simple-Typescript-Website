$(document).ready(function() {
    $('.sub_nav').hide();
    $(window).scroll(function() {
         let current_scroll = $(window).scrollTop();
         let height1 = $('.top').offset().top;
         let height2 = $('.participant').offset().top;
         if(current_scroll >= height1 & current_scroll < (height1 + 100)) {
             $("#border1").addClass('vertical');
             $(".center > img").addClass('up');
             $(".center > h1").addClass('up');
             $("#circle1").addClass('circle_shown');
         }   else if(current_scroll >= (height2 - 1000) & current_scroll < height2) {
            $(".center .img_box").addClass('up');
            $("#border2").addClass('vertical');
             $(".participant_title span").addClass('stretched');
             $("#circle2").addClass('circle_shown');
         }  else {
             return;
         }
    })
})
// scroll 내릴 때 animation