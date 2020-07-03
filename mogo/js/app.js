$(function(){

    var introH = $("#intro").innerHeight();
    var header = $("#header");
    var scrollofset = $(window).scrollTop(); 

    //slider
    $(document).ready(function(){
        $('.reviews__slider').slick({
            
        });
    });

    //header fixed
    checkScroll(scrollofset)
    higlight(scrollofset)
    $(window).on("scroll", function(){

        scrollofset = $(this).scrollTop();
        checkScroll(scrollofset)
        higlight(scrollofset)

    });

    function checkScroll(scrollofset){


        if(scrollofset >= introH){
            header.addClass("fixed")
        }
        else{
            header.removeClass("fixed")
        }
    }
    //smoth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var elementId = $(this).data("scroll"),
        elementofset = $(elementId).offset().top;
        elementofset = elementofset + 20


        $("html, body").animate({
            scrollTop: elementofset           
        }, 500)

       
    });
     //nav toggle
     $("#navt").on("click", function(event){
        event.preventDefault();
        $("#h-nav").toggleClass("active");
        $("#navt").toggleClass("active");
        
    });
    //acordion
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var elementId = $(this).data("collapse");
        $(this).toggleClass("active")
    });
    //highlitghting nav__bar
    function higlight(scrollofset){
        if(scrollofset >= $("#about").offset().top){
            $("#h-nav a").removeClass("active");
            $("#about__nav").addClass("active");
        }
        if(scrollofset >= $("#services").offset().top){
            $("#h-nav a").removeClass("active");
            $("#services__nav").addClass("active");
        }
        if(scrollofset >= $("#works").offset().top){
            $("#h-nav a").removeClass("active");
            $("#works__nav").addClass("active");
        }
        if(scrollofset >= $("#blog").offset().top){
            $("#h-nav a").removeClass("active");
            $("#blog__nav").addClass("active");
        }
        if(scrollofset >= $("#contact").offset().top){
            $("#h-nav a").removeClass("active")
            $("#contact__nav").addClass("active");
        }
        if(scrollofset < $("#about").offset().top){
            $("#h-nav a").removeClass("active")
        }
    }
});