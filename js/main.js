
$(function(){
  var $header = $('.header_inner'); //헤더를 변수에 넣기
  var $page = $('.page-start'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
});

/* 햄버거 메뉴 */
$('.m_menuBtn').click(function(){
    $(this).toggleClass('on');
  
    if($(this).hasClass('on')){
    $('.menu_conatainer').fadeToggle();
    $('.visual>p:nth-child(2),.visual>p:nth-child(3),.arrow,.scroll').css({'display':'none'})
    }
    else {
      $('.menu_conatainer').fadeOut();
      $('body').css({'overflow':'auto'})
      $('.visual>p:nth-child(2),.visual>p:nth-child(3),.scroll').css({'display':'block'})
      $('.arrow').css({'display':'flex'})
    }
  
  });
  $(window).resize(function(){
    let winW =  $(window).width();  //브라우저의 가로길이를 변수에
    console.log('브라우저의 가로길이는? ', winW);
  
    if( winW > 1023 &&  $('.menu_conatainer').is(':hidden')){
      console.log('.menu_conatainer가 안보여요!!!');
      $('.menu_conatainer').removeAttr('style');
    }
});

/* 비쥬얼 슬라이드 */
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/* 아파트 */
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300:{  slidesPerView: 1,  //브라우저가 768보다 클 때
  }  ,
    500:{  slidesPerView: 1,  //브라우저가 768보다 클 때
  }  ,
  600:{
    slidesPerView: 2,  //브라우저가 768보다 클 때
  }  ,
  
  900: {
    slidesPerView: 3,  //브라우저가 768보다 클 때
  },
  1500: {
    slidesPerView: 4,  //브라우저가 1024보다 클 때
  },
},
});

/* sns */
function showGradient(){
  if($(this).scrollLeft() == 0){// 스크롤이 0일 때
  $('.scrolllo').text('스크롤 처음입니다.');
  }else if (Math.ceil($(this).scrollLeft() + $(this).width()) == $('.scrollcontent').width()) {//스크롤이 끝에 왔을 때
  $('.scrolllo').text('스크롤 끝입니다.');
  }else{
    $('.scrolllo').text('스크롤 중간입니다.');
  }
}

$(function(){
  showGradient();
  $('.scrollwrap').on('scroll',showGradient);
});




/* 푸터 */
// $(document).ready(function(){
// $('.family_btn').click(function(){
//   sw=!sw; //부정연산자(not)을 변수값 앞에 붙여서 클릭할때마다 true, false가 되게함.
//   if(sw==true){
//   $('.family_btn .f_list').hide();
//   } else {
//    $('.family_btn .f_list').show();
//   }
//  });
// });


//gnb에서 서브메뉴 슬라이드
// $('.family_btn').click(function(){
//   $(this).find('a').toggleClass('on');
//   $(this).siblings('.list_sub_wrap').slideToggle(300);
// });

$(document).ready(
  function(){
  //p를 감추시오
  $(".list_sub_wrap").hide();
  //a를 클릭하면 실행하시오(클릭한a의 다음에 오는 p를 slideDown()시키고 다른p는 hide시키시오)
  $(".family_btn").click(function(){
        $("ul").slideUp(); //접기
        $("ul").slideToggle();
      });
  }
);
