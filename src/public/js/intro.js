$(document).ready(function() {
    $('.sub_nav').hide();
    let prev_scroll = 0;
    $(window).scroll(function() {
        let current_scroll = $(window).scrollTop();
        let height1 = $('.banner1').offset().top;
        let height2 = $('.banner2').offset().top;
        let height3 = $('.banner3').offset().top;
        if(current_scroll - prev_scroll > 0) {
            if(current_scroll >= (height1 - 500) & current_scroll < height1) {
                $('.banner1').addClass('banner_shown');
                $('.banner1 > h1').addClass('shown');
                $('.banner1 .icon_box h2').addClass('up');
                $('.banner1 .icon_box img').addClass('up');
                $('.banner1 > p').addClass('up');
                $('#banner_border1').addClass('stretched');
                $('#banner_circle1').addClass('banner_circle_shown');
                prev_scroll = current_scroll;
            }    else if(current_scroll >= (height2 - 500) & current_scroll < height2) {
                $('.banner2').addClass('banner_shown');
                $('.banner2 > h1').addClass('shown');
                $('.banner2 .icon_box h2').addClass('up');
                $('.banner2 .icon_box img').addClass('up');
                $('.banner2 > p').addClass('up');
                $('#banner_border2').addClass('stretched');
                $('#banner_circle2').addClass('banner_circle_shown');
                prev_scroll = current_scroll;
            }   else if(current_scroll >= (height3 - 500) & current_scroll < height3) {
                $('.banner3').addClass('banner_shown');
                $('.banner3 > h1').addClass('shown');
                $('.banner3 .icon_box h2').addClass('up');
                $('.banner3 .icon_box img').addClass('up');
                $('.banner3 > p').addClass('up');
                $('#banner_border3').addClass('stretched');
                $('#banner_circle3').addClass('banner_circle_shown');
                prev_scroll = current_scroll;
            }
        }
    })
})
// scroll 내릴 때 animation 

function showPopup1() {
const popup = document.querySelector('#pop1');
popup.classList.remove('hide');
}

function closePopup1() {
const popup = document.querySelector('#pop1');
popup.classList.add('hide')
}
function showPopup2() {
const popup = document.querySelector('#pop2');
popup.classList.remove('hide');
}
function closePopup2() {
const popup = document.querySelector('#pop2');
popup.classList.add('hide')
}
function showPopup3() {
const popup = document.querySelector('#pop3');
popup.classList.remove('hide');
}
function closePopup3() {
const popup = document.querySelector('#pop3');
popup.classList.add('hide')
}
// popup 함수

$('.workshop_poster').on('click', function() {
$(this).toggleClass('scaleup');
})
// 세번째 팝업 클릭 시 확대 기능

$('.member_title').on('click', function() {
$(this).next().toggle();
})
$('.main_logo > button').on('click', function() {
if($('.people').css('display') == 'none') {
    $('.people').css('display', 'flex');
    $('#people_toggle_icon').attr('src', './img/menu4/sec01/sec01_btn_s_icon01.png');
}   else {
    $('.people').hide();
    $('#people_toggle_icon').attr('src', './img/menu4/sec01/sec01_btn_s_icon02.png');
}
})
// 팀 소개 버튼 toggle 기능


$(".banner1 .banner_icon").swipe( { swipeLeft:swipe_banner1L, swipeRight:swipe_banner1R, allowPageScroll:"vertical"} );
        $(".banner2 .banner_icon").swipe( { swipeLeft:swipe_banner2L, swipeRight:swipe_banner2R, allowPageScroll:"vertical"} );
        $(".banner3 .banner_icon").swipe( { swipeLeft:swipe_banner3L, swipeRight:swipe_banner3R, allowPageScroll:"vertical"} );
        var slide_banner1 = 0;
        var slide_banner2 = 0;
        var slide_banner3 = 0;
        
        function swipe_banner1L(event, direction, distance, duration, fingerCount) {
            if(slide_banner1 > -200) {
                slide_banner1 -= 100;
                this.css('transform', `translateX(${slide_banner1}vw)`);
                $('.banner1 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner1 .icon_order button:nth-child(${-(slide_banner1-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            } else {
                return;
            }
        }
        function swipe_banner1R(event, direction, distance, duration, fingerCount) {
            if(slide_banner1 < 0) {
                slide_banner1 += 100;
                this.css('transform', `translateX(${slide_banner1}vw)`);
                $('.banner1 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner1 .icon_order button:nth-child(${-(slide_banner1-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            }   else {
                return;
            }
        }


        function swipe_banner2L(event, direction, distance, duration, fingerCount) {
            if(slide_banner2 > -200) {
                slide_banner2 -= 100;
                this.css('transform', `translateX(${slide_banner2}vw)`);
                $('.banner2 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner2 .icon_order button:nth-child(${-(slide_banner2-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            } else {
                return;
            }
        }
        function swipe_banner2R(event, direction, distance, duration, fingerCount) {
            if(slide_banner2 < 0) {
                slide_banner2 += 100;
                this.css('transform', `translateX(${slide_banner2}vw)`);
                $('.banner2 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner2 .icon_order button:nth-child(${-(slide_banner2-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            }   else {
                return;
            }
        }


        function swipe_banner3L(event, direction, distance, duration, fingerCount) {
            if(slide_banner3 > -200) {
                slide_banner3 -= 100;
                this.css('transform', `translateX(${slide_banner3}vw)`);
                $('.banner3 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner3 .icon_order button:nth-child(${-(slide_banner3-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            } else {
                return;
            }
        }
        function swipe_banner3R(event, direction, distance, duration, fingerCount) {
            if(slide_banner3 < 0) {
                slide_banner3 += 100;
                this.css('transform', `translateX(${slide_banner3}vw)`);
                $('.banner3 .icon_order button').css('width', '10px').css('background-color', '#94a0ba');
                $(`.banner3 .icon_order button:nth-child(${-(slide_banner3-100)/100})`).css('width', '23px').css('background-color', '#4a618d');
            }   else {
                return;
            }
        }

// banner 세 개 모바일 슬라이드 기능