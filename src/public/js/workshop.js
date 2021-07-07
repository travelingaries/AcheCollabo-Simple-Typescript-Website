function showPopup1() {
    $('.pop_main').attr('src', "/img/menu6/w1/w1_1.png");
    const popup = document.querySelector('#pop1');
    popup.classList.remove('hide');
}
function closePopup1() {
    const popup = document.querySelector('#pop1');
    popup.classList.add('hide')
}
let pop_num = 1;
function pop_img_next() {
    if(pop_num < 17) {
        pop_num += 1;
        let main_url = `/img/menu6/w1/w1_${pop_num}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
function pop_img_prev() {
    if(pop_num > 1) {
        pop_num -= 1;
        let main_url = `/img/menu6/w1/w1_${pop_num}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
$("#pop_next").on('click', pop_img_next);
$("#pop_prev").on('click', pop_img_prev);
// 첫번재 팝업 기능



function showPopup2() {
    $('.pop_main').attr('src', "/img/menu6/w2/w2_1.png");
    const popup = document.querySelector('#pop2');
    popup.classList.remove('hide');
}

function closePopup2() {
    const popup = document.querySelector('#pop2');
    popup.classList.add('hide')
}
let pop_num2 = 1;
function pop_img_next2() {
    if(pop_num2 < 17) {
        pop_num2 += 1;
        let main_url = `/img/menu6/w2/w2_${pop_num2}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
function pop_img_prev2() {
    if(pop_num2 > 1) {
        pop_num2 -= 1;
        let main_url = `/img/menu6/w2/w2_${pop_num2}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
$("#pop_next2").on('click', pop_img_next2);
$("#pop_prev2").on('click', pop_img_prev2);
// 두번째 팝업 기능 

function showPopup3() {
    $('.pop_main').attr('src', "/img/menu6/w3/w3_1.png");
    const popup = document.querySelector('#pop3');
    popup.classList.remove('hide');
}

function closePopup3() {
    const popup = document.querySelector('#pop3');
    popup.classList.add('hide')
}
let pop_num3 = 1;
function pop_img_next3() {
    if(pop_num3 < 14) {
        pop_num3 += 1;
        let main_url = `/img/menu6/w3/w3_${pop_num3}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
function pop_img_prev3() {
    if(pop_num3 > 1) {
        pop_num3 -= 1;
        let main_url = `/img/menu6/w3/w3_${pop_num3}.png`;
        $('.pop_main').fadeOut().delay(100).queue(function() {
            $('.pop_main').attr('src', `${main_url}`).dequeue();
        });
        $('.pop_main').fadeIn();
    } else {
        return;
    }
}
$("#pop_next3").on('click', pop_img_next3);
$("#pop_prev3").on('click', pop_img_prev3);
// 세번째 팝업 기능

$(document).ready(function() {
   $('.sub_nav').hide();
   $(window).scroll(function() {
        let current_scroll = $(window).scrollTop();
        let height1 = $('#week1').offset().top;
        let height2 = $('#week2').offset().top;
        let height3 = $('#week3').offset().top;
        if(current_scroll >= (height1 - 200) & current_scroll < height1) {
            $("#week1 .card").addClass('shown');
            $("#card_btn_box1").addClass('shown');
            $("#blank1").addClass('shown');
            $("#blank1 .border_long").addClass('border_l_down');
            $("#blank1 .border_short").addClass('border_s_down');
        }   else if(current_scroll >= (height2 - 200) & current_scroll < height2) {
            $("#week2 .card").addClass('shown');
            $("#card_btn_box2").addClass('shown');
            $("#blank2").addClass('shown');
            $("#blank2 .border_long").addClass('border_l_down');
            $("#blank2 .border_short").addClass('border_s_down');
        }   else if(current_scroll >= (height3 - 200) & current_scroll < height3) {
            $("#week3 .card").addClass('shown');
            $("#card_btn_box3").addClass('shown');
            $("#blank3").addClass('shown');
            $("#blank3 .border_long").addClass('border_l_down');
            $("#last_border").addClass('last_border');
        }   else {
            return;
        }
   })
})
// scroll 내려갈 때 animation