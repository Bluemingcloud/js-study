// window.onload = function() { // 화면에서 1개 밖에 사용을 못함    
// }

var menuBtn = document.querySelector(".menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener('click', function() {
    
    // 클릭할때마다 sidenav 의 너비를 확인
    var w = sidenav.style.width;
    // if(w == '' || w == '0px') {
    //     sidenav.style.width = '200px';
    // } else {
    //     sidenav.style.width = '0px';
    // }

    if(window.innerWidth <= 767) { // 브라우저 너비 767이하일때
        if(w == '' || w == '0px') {
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }
    } else { // 브라우저 너비 767 초과일때
        if(w == '0px') { // 공백일때는 제외하고
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }
    }
});