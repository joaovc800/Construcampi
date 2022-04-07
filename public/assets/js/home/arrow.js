$(function(){
    //Arrow para voltar ao inicio da pagina
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
        $("#back").fadeIn();
        }else{
        $("#back").fadeOut();
        }
    });

    $("#back").click(function(){
        $("body,html").animate({
        scrollTop: 0
        },100);
        return false;
    });

    //Header 
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
        $("#header").removeClass("alt");
        $("#header").addClass("reveal");
        }else{
            $("#header").removeClass("reveal");
            $("#header").addClass("alt");
        }
    });

    //animations

    $(window).scroll(function(){
        var scrollBottom =  $(window).height() - $(window).scrollTop();
        if(scrollBottom <= 40){
            $(".animate-push-left").addClass("push-left")
            $(".animate-push-left").removeClass("animate-push-left")
        }
    })
});
