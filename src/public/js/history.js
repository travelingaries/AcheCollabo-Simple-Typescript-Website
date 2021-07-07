$(document).ready(function () {
    $('.interviewslider').bxSlider({
        auto: false, // 자동으로 애니메이션 시작
        speed: 500,  // 애니메이션 속도
        pause: 5000,  // 애니메이션 유지 시간 (1000은 1초)
        mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
        autoControls: false, // 시작 및 중지버튼 보여짐
        pager: true, // 페이지 표시 보여짐
        captions: true, // 이미지 위에 텍스트를 넣을 수 있음
    });  
    // interview 슬라이드 

    $(window).scroll(function() {
        let current_scroll = $(window).scrollTop();
        let height1 = $('#blank1').offset().top;
        let height2 = $('#blank2').offset().top;
        let height3 = $('#blank3').offset().top;
        if(current_scroll >= (height1 - 400) & current_scroll < height1) {
            $("#blank1 .border").addClass('scrolled');
            $("#blank1_img").addClass('shown');
        }   else if(current_scroll >= (height2 - 400) & current_scroll < height2) {
            $("#blank2 .border").addClass('scrolled2');
            $("#blank2_img").addClass('shown');
        }   else if(current_scroll >= (height3 - 400) & current_scroll < height3) {
            $("#blank3 .border").addClass('scrolled');
            $("#blank3_img").addClass('shown');
        }   else {
            return;
        }
   });
//    scroll 내릴 때 animation
});


function pop_img() {
    let url = $(this).attr('src');
    $(".pop_main").attr('src', url);
    $(".pop_main").addClass("card_move").delay(1000).queue(function() {
        $(".pop_main").removeClass("card_move").dequeue();
    })
}
$(".pop_bottom_img").on('click', pop_img);
// 팝업 창 밑 사진들 클릭 시 메인 이미지 바뀌는 효과


let photo_num = 1;
function photo_next() {
    if(photo_num < 11) {
        photo_num += 1;
        $('.photo_box img').fadeOut();
        $('.photo_box img').attr('src', `./img/menu7/sec01/sec01_img${photo_num}.png`);
        $('.photo_box img').fadeIn();
        $('.photo_box h1').text(`${photo_num} / 11`);
    }   else {
        return;
    }
}
function photo_prev() {
    if(photo_num > 1) {
        photo_num -= 1;
        $('.photo_box img').fadeOut();
        $('.photo_box img').attr('src', `./img/menu7/sec01/sec01_img${photo_num}.png`);
        $('.photo_box img').fadeIn();
        $('.photo_box h1').text(`${photo_num} / 11`);
    }   else {
        return;
    }
}
// 워크샵 현장 사진 slide 효과 (팝업 x)



function showPopup1() {
    const popup = document.querySelector('#pop1');
    popup.classList.remove('hide');
}

function closePopup1() {
    const popup = document.querySelector('#pop1');
    popup.classList.add('hide');
}
// 첫번째 팝업 등장 - 워크샵 현장 팝업

let pop_num = 1;
let pop_page = 0;
function pop_img_next() {
    if(pop_num < 7) {
        pop_num += 1;
        pop_page = pop_num * 6;
        $('.pop_bottom1').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 5}.png`).animate({opacity:1},1000);
        $('.pop_bottom2').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 4}.png`).animate({opacity:1},1000);
        $('.pop_bottom3').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 3}.png`).animate({opacity:1},1000);
        $('.pop_bottom4').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 2}.png`).animate({opacity:1},1000);
        $('.pop_bottom5').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 1}.png`).animate({opacity:1},1000);
        $('.pop_bottom6').css('opacity','0').attr('src', `./img/menu7/pop/sec01_pop${pop_page - 0}.png`).animate({opacity:1},1000);
        let main_url = $('.pop_bottom1').attr('src');
        $('.pop_main1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else if(pop_num == 7) {
        pop_num += 1;
        pop_page = pop_num * 6;
        $('.pop_bottom1').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 5}.png`).animate({opacity:1},1000);
        $('.pop_bottom2').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 4}.png`).animate({opacity:1},1000);
        $('.pop_bottom3').css('opacity','0');
        $('.pop_bottom4').css('opacity','0');
        $('.pop_bottom5').css('opacity','0');
        $('.pop_bottom6').css('opacity','0');
        let main_url = $('.pop_bottom1').attr('src');
        $('.pop_main1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else {
        return;
    }
}
function pop_img_prev() {
    if(pop_num > 1) {
        pop_num -= 1;
        pop_page = pop_num * 6;
        $('.pop_bottom1').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 5}.png`).animate({opacity:1},1000);
        $('.pop_bottom2').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 4}.png`).animate({opacity:1},1000);
        $('.pop_bottom3').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 3}.png`).animate({opacity:1},1000);
        $('.pop_bottom4').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 2}.png`).animate({opacity:1},1000);
        $('.pop_bottom5').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 1}.png`).animate({opacity:1},1000);
        $('.pop_bottom6').css('opacity','0').stop().attr('src', `./img/menu7/pop/sec01_pop${pop_page - 0}.png`).animate({opacity:1},1000);
        let main_url = $('.pop_bottom1').attr('src');
        $('.pop_main1').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    } else {
    return;
}
}
$(".pop_next").on('click', pop_img_next);
$(".pop_prev").on('click', pop_img_prev);
// 첫번째 팝업 사진 넘기는 효과 - 워크샵 현장



function showPopup2() {
    const popup = document.querySelector('#pop2');
    popup.classList.remove('hide');
}

function closePopup2() {
    const popup = document.querySelector('#pop2');
    popup.classList.add('hide');
}
$(".video_card img").on('click', showPopup2);
// 두번째 팝업 등장 효과 - 현장기록(비디오아트)

let pop_num2 = 1;
let pop_page2 = 0;
function pop_img_next2() {
    if(pop_num2 < 7) {
        pop_num2 += 1;
        pop_page2 = pop_num2 * 6;
        $('.pop2_bottom1').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 5}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom2').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom3').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom4').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom5').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 1}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom6').css('opacity','0').attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 0}.jpg`).animate({opacity:1},1000);
        let main_url = $('.pop2_bottom1').attr('src');
        $('.pop_main2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else if(pop_num2 == 7) {
        pop_num2 += 1;
        pop_page2 = pop_num2 * 6;
        $('.pop2_bottom1').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 5}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom2').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom3').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom4').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom5').css('opacity','0');
        $('.pop2_bottom6').css('opacity','0');
        let main_url = $('.pop2_bottom1').attr('src');
        $('.pop_main2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    }   else {
        return;
    }
}
function pop_img_prev2() {
    if(pop_num2 > 1) {
        pop_num2 -= 1;
        pop_page2 = pop_num2 * 6;
        $('.pop2_bottom1').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 5}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom2').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 4}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom3').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 3}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom4').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 2}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom5').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 1}.jpg`).animate({opacity:1},1000);
        $('.pop2_bottom6').css('opacity','0').stop().attr('src', `./img/menu7/sec02/video_art/7_02spop/sec02_spop${pop_page2 - 0}.jpg`).animate({opacity:1},1000);
        let main_url = $('.pop2_bottom1').attr('src');
        $('.pop_main2').css('opacity','0').attr('src', `${main_url}`).animate({opacity:1},1000);
    } else {
    return;
}
}
$(".pop_next2").on('click', pop_img_next2);
$(".pop_prev2").on('click', pop_img_prev2);
// 두번째 팝업 사진 넘기는 효과 - 현장기록 (비디오아트)