function sub_show() {
    $('.sub_nav').show();
}
function sub_hide() {
    $('.sub_nav').hide();
}
function sub_toggle() {
    $('.sub_nav').toggle();
}
const navs = document.querySelectorAll(".nav li");
const sub_nav = document.querySelector(".sub_nav");
const toggleBtn = document.querySelector(".nav_toggle_btn");
for(let i=0;i<navs.length;i++) {
    navs[i].addEventListener('mouseover', sub_show);
}
sub_nav.addEventListener('mouseover', sub_show);
sub_nav.addEventListener('mouseout', sub_hide);     
toggleBtn.addEventListener('click', sub_toggle);

