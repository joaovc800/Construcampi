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
});