'use strict';
let fixSW = 0;
// 요소나온후 미리 읽어와야함
window.onload = function() {
  let loadingBar = document.getElementById("loading_Bar");
  if(isNaN(loadingBar))fixSW = 1;
  else fixSW = 0;
  $(window).scroll(function(){
  console.log($(this).scrollTop());
  console.log(document.getElementById("headMain").clientHeight + "px");
  let space = document.getElementById("headMain").clientHeight + "px";
  if(fixSW == 1){
    if($(this).scrollTop() > 60) {
      $("#headMain").addClass("fixTop");
      $("#headMainSpace").css("height",space);
    }
    else {
      $("#headMain").removeClass("fixTop");
      $("#headMainSpace").css("height","0px");
    }
  }
  else {
    $("#headerTop").addClass("fixTop");
    $("#headMainSpace").css("height",space);
  }
});
};

$(document).ready(function(){
  $("#headerTop").hide();
  $("#loading_Bar").css("width","0px");
  $("#loading_Bar").animate({width:"2000px"},700);
  $("#loading_Bar").slideUp();
  $("#headerTop").delay(700);
  $("#headerTop").slideDown(700);

  // carousel
  $("#slideImg").on('slide.bs.carousel', function(e){
    let val = e.to;
    $("#numIns").html("0"+(val+1));
  });
  $('#slideImg').carousel({
    // 슬리아딩 자동 순환 지연 시간
    // false면 자동 순환하지 않는다.
    interval: 3000,
    // hover를 설정하면 마우스를 가져대면 자동 순환이 멈춘다.
    pause: "hover",
    // 순환 설정, true면 1 -> 2가면 다시 1로 돌아가서 반복
    wrap: true,
  });
});