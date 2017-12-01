$(document).ready(function () {
    $(".click").click(function(e) {
        var value;
        switch ($(".click").index(this)) {
            case 0 :
                value = $(".dataelements").data("blah");
                break;
            case 1 :
                $(".dataelements").data("blah", "hello");
                value = "Stored!";
                break;
            case 2 :
                $(".dataelements").data("blah", 86);
                value = "Stored!";
                break;
            case 3 :
                $(".dataelements").removeData("blah");
                value = "Removed!";
                break;
        }
        $("span").text("" + value);
    });
});
$(document).ready(function () {
    $('#cut').click(function () {
        $('.stroke-1').detach();
    });
});
$(document).ready(function () {
    $( ".colors" ).find( "div" ).eq( 2 ).addClass( "blue" );
});
$(document).ready(function () {
    $('#but1').click(function () {
        alert($(".rewrite p").hasClass("value-1"));
    });
    $('#but2').click(function () {
        alert($(".rewrite p").hasClass("value-2"));
    });
});
$(document).ready(function () {
    $('.openhtml p').click(function () {
        var htmlStr = $(this).html();
        $(this).text(htmlStr)
    });
});
$(document).ready(function () {
    $('#click').click(function () {
        alert($('.listindex #goodby').index());
    });
});
$(document).ready(function () {
    $('.off p').on("click", function () {
        $(this).css("background-color","pink");
    });
    $('#offclick').click(function () {
        $('.off p').off("click");
    });
});
$(document).ready(function () {
    $('#property').click(function () {
        var $x = $('.div');
        $x.prop('color', '6699ff');
        $x.append('Свойство цвета имеет такое значение:' + $x.prop('color'));
        $x.removeProp('color');
        $x.append('<br>Сейчас значение свойства цвет:'+$x.prop('color'));
    });
});
$(document).ready(function () {
    $('#clickBtn').click(function () {
        $(this).next().removeAttr('disabled')
            .focus()
            .val('Можно редактировать');
    });
});
$(document).ready(function () {
    $('#res').click(function () {
        $(window).resize();
    });
    $(window).resize(function () {
        var width =$(window).width();
        $('.paste').html(width);
    });
});
$(document).ready(function(){
    $("#target").scroll(function(){
        alert("Вы прокрутили содержимое данного окна.");
    });
});
$(document).ready(function () {
    $('.clickTop').click(function () {
        var s = $('.top').scrollTop();
        $('.result').text("scrollTop = " + s);
    });
});
$(document).ready(function () {
    $('.conteinerList .arrow').click(function () {
        $('.allList').slideDown('slow');
    });
    $('.conteinerList').mouseleave(function () {
        $('.allList').slideUp('fast');
    });
});
$(document).ready(function () {
    $('.arrow-2').click(function () {
        $(".allList-2").slideToggle("slow");
    });
});
