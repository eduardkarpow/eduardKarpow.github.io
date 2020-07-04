$(function(){
    
    var introH = $("header").innerHeight();
    var scrolloffset = $(window).scrollTop();
    checkscroll(scrolloffset);
    highlight(scrolloffset);

    $(window).on("scroll", function(){
        scrolloffset = $(this).scrollTop();
        checkscroll(scrolloffset);
        highlight(scrolloffset);
    });

    //header fixed
    function checkscroll(scrolloffset){
        if(scrolloffset >= introH){
            $("#head").addClass("fixed");
        }
        else{
            $("#head").removeClass("fixed")
        }
    }

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var elementId = $(this).data("scroll");
        
        elementoffset = ($(elementId).offset().top) + 20;

        $("html, body").animate({
            scrollTop: elementoffset
        });
    });
    $("#burger").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active")
        $("#head").toggleClass("active")
    });

    function highlight(scrolloffset){
        if(scrolloffset >= $("#contact").offset().top){
            $(".navbar__item").removeClass("active");
            $("#co").addClass("active");
        }
        else if(scrolloffset >= $("#aboutUs").offset().top){
            $(".navbar__item").removeClass("active");
            $("#ab").addClass("active");
        }
        else if(scrolloffset >= $("#portfolio").offset().top){
            $(".navbar__item").removeClass("active");
            $("#po").addClass("active");
        }
        
        else if(scrolloffset >= $("#home").offset().top){
            $(".navbar__item").removeClass("active");
            $("#ho").addClass("active");
        }
    }
});