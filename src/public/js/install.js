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
});
// article 버튼 toggle 효과

function click_img() {
    let url = $(this).attr('src');
    $(".install_img1").attr('src', url);
}
$(".s_img_box1 .s_img").on('click', click_img);
// 팝업 창 밑 사진들 클릭 시 메인 이미지 바뀌는 효과

function click_img2() {
    let url = $(this).attr('src');
    $(".install_img2").attr('src', url);
}
$(".s_img_box2 .s_img").on('click', click_img2);

let slide_num = 1;
let slide_page = 0;
function slide_img_next() {
    if(slide_num < 2) {
        slide_num += 1;
        slide_page = slide_num * 5;
        $('.s_img_box1 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img3').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 2}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img4').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 1}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img5').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page}.jpg`).animate({opacity:1},1000);
        let main_url = $('.s_img_box1 .s_img1').attr('src');
        $('.install_img1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else if(slide_num == 2) {
        slide_num += 1;
        slide_page = slide_num * 5;
        $('.s_img_box1 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img3').css('opacity','0');
        $('.s_img_box1 .s_img4').css('opacity','0');
        $('.s_img_box1 .s_img5').css('opacity','0');
        let main_url = $('.s_img_box1 .s_img1').attr('src');
        $('.install_img1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else {
        return;
    }
}
function slide_img_prev() {
    if(slide_num > 1) {
        slide_num -= 1;
        slide_page = slide_num * 5;
        $('.s_img_box1 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img3').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 2}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img4').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page - 1}.jpg`).animate({opacity:1},1000);
        $('.s_img_box1 .s_img5').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img/menu2_01_${slide_page}.jpg`).animate({opacity:1},1000);
        let main_url = $('.s_img_box1 .s_img1').attr('src');
        $('.install_img1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    } else {
        return;
    }
}
$(".next1").on('click', slide_img_next);
$(".prev1").on('click', slide_img_prev);

let slide_num2 = 1;
let slide_page2 = 0;
function slide_img_next2() {
    if(slide_num2 < 2) {
        slide_num2 += 1;
        slide_page2 = slide_num2 * 5;
        $('.s_img_box2 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img3').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img4').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 1}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img5').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2}.jpg`).animate({opacity:1},1000);
        let main_url = $('.s_img_box2 .s_img1').attr('src');
        $('.install_img2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else if(slide_num2 == 2) {
        slide_num2 += 1;
        slide_page2 = slide_num2 * 5;
        $('.s_img_box2 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img3').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img4').css('opacity','0');
        $('.s_img_box2 .s_img5').css('opacity','0');
        let main_url = $('.s_img_box2 .s_img1').attr('src');
        $('.install_img2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else {
        return;
    }
}
function slide_img_prev2() {
    if(slide_num2 > 1) {
        slide_num2 -= 1;
        slide_page2 = slide_num2 * 5;
        $('.s_img_box2 .s_img1').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img2').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img3').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img4').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2 - 1}.jpg`).animate({opacity:1},1000);
        $('.s_img_box2 .s_img5').css('opacity','0').stop().attr('src', `/img/menu2/sec01/img2/menu2_02_${slide_page2}.jpg`).animate({opacity:1},1000);
        let main_url = $('.s_img_box2 .s_img1').attr('src');
        $('.install_img2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    } else {
        return;
    }
}
$(".next2").on('click', slide_img_next2);
$(".prev2").on('click', slide_img_prev2);