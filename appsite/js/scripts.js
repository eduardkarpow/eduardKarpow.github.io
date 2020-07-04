$(document).ready(function () {
  var introH = $('#header').innerHeight();
  var scrolloffset = $(window).scrollTop();
  checkscroll(scrolloffset);


  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
    $('#navbar').toggleClass('active');
  });

//header fixed
  $(window).on("scroll", function(){
    scrolloffset = $(window).scrollTop();
    checkscroll(scrolloffset);
   
  });
  $('.navbar__item').on("click", function(event){
    event.preventDefault();
    var element = $(this).data("scroll");
    elementoffset = ($(element).offset().top) + 20;

    $("html, body").animate({
        scrollTop: elementoffset
    });
  });

  function checkscroll(scrolloffset){
    
    if(scrolloffset >= introH){
        $('#header').addClass('fixed');
        
    }
    else{
        $('#header').removeClass('fixed');
    }
  }
  //subscribe
  $('.monthly').on("click", function(event){
    event.preventDefault();
    $(".variety__item").removeClass("active");
    $(this).addClass("active");
    $(".subscribe__main").removeClass("anual");
    $(".subscribe__main").addClass("month");
  });
  $('.anually').on("click", function(event){
    event.preventDefault();
    $(".variety__item").removeClass("active");
    $(this).addClass("active");
    $(".subscribe__main").removeClass("month");
    $(".subscribe__main").addClass("anual");
  });
  //questions
  $('.questions__item').on("click", function(event){
    event.preventDefault();
    $('.questions__item').removeClass('active');
    $(this).addClass('active');

  });
});