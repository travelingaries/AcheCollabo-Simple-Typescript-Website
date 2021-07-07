$(document).ready(function () {
    $('.sub_nav').hide();
    $(window).scroll(function() {
            let current_scroll = $(window).scrollTop();
            let height1 = $('#install1').offset().top;
            let height2 = $('#install2').offset().top;
            let height3 = $('.credit').offset().top;
            let height4 = $('.motion').offset().top;
            if(current_scroll >= (height1 - 400) & current_scroll < height1) {
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
                $("#blank3").addClass('shown');
                $("#blank3 .border_long").addClass('border_l_down');
                $("#blank3 .border_short").addClass('border_s_down');
            }    else {
                return;
            }
    });
    // scroll 내릴 때 animation

    $('.bxslider').bxSlider({
        auto: false, // 자동으로 애니메이션 시작
        speed: 500,  // 애니메이션 속도
        pause: 5000,  // 애니메이션 유지 시간 (1000은 1초)
        mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
        autoControls: false, // 시작 및 중지버튼 보여짐
        pager: true, // 페이지 표시 보여짐
        captions: true, // 이미지 위에 텍스트를 넣을 수 있음
    });
    // slide 효과 
});

$('#article_btn').on('click', function() {
    $('#article_shown').hide();
    $('.fog').hide();
    $('#article_hidden').show();
    $(this).hide();
})
// article 버튼 toggle 효과