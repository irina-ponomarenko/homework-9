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
    })

})