$(document).ready(function(){

    var introH = $('#header').innerHeight();
    var scroll;



    fixing(scroll);
    highlight(scroll);
    $(window).on("scroll", function(){
        scroll = $(window).scrollTop();
        fixing(scroll);
        highlight(scroll);
    });
    $('.navbar__item').on("click", function(){
        var element = $(this).data("scroll");
        var elementoffset = ($(element).offset().top + 20);

        $("html, body").animate({
            scrollTop: elementoffset
        });
    });

    //slick
    $('.slider--dotted').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    $('.images__trainings').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true
    });

    //burger menu
    $('.burger__menu').on("click", function(){
        $('.header').toggleClass("active");
    });
    //header fixed
    function fixing(scroll){
        if(scroll >= introH){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    }

    //highlighting
    function highlight(scroll){
        if(scroll >= $('#contact').offset().top){
            $('.navbar__item').removeClass("active");
            $('#contactN').addClass("active");
        }
        else if(scroll >= $('#blog').offset().top){
            $('.navbar__item').removeClass("active");
            $('#blogN').addClass("active");
        }
        else if(scroll >= $('#price').offset().top){
            $('.navbar__item').removeClass("active");
            $('#priceN').addClass("active");
        }
        else if(scroll >= $('#reviews').offset().top){
            $('.navbar__item').removeClass("active");
            $('#reviewsN').addClass("active");
        }
        else if(scroll >= $('#service').offset().top){
            $('.navbar__item').removeClass("active");
            $('#serviceN').addClass("active");
        }
        else if(scroll >= $('#trainers').offset().top){
            $('.navbar__item').removeClass("active");
            $('#trainersN').addClass("active");
        }
        else if(scroll >= $('#about').offset().top){
            $('.navbar__item').removeClass("active");
            $('#aboutN').addClass("active");
        }
        else if(scroll >= $('#header').offset().top){
            $('.navbar__item').removeClass("active");
            $('#homeN').addClass("active");
        }
        
        
      
        
        
       
        
        
        
        
       
        
        
        
    }
});