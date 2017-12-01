$( document ).ready(function() {
    $("#red ul li a").click(function(e) {
        e.preventDefault();
        $("#red ul li a").removeClass('active');
        $(this).addClass('active');
    })
    $(".green").click(function () {
        19
        $(this).toggleClass("white");
        20
    });
});
$(document).ready(function(){
    $(".hover-grey").on("click", function () {
        console.log($(this).attr("id"));
    });
    $(".button-brown").on("click",function () {
        console.log ($(this).attr('class','black'));
    });
});
$(document).ready(function () {
    document.getElementById('window').addEventListener('click', function() {
        alert('Привет!');
    }, false);

    document.getElementById('window').addEventListener('click', function() {
        alert('Привет еще раз, соскучились?))');
    }, false);

});
$(document).ready(function () {
    $( ".yellow:first" ).click(function() {
        29
        update( $( "span:first" ) );
        30
    });
    31

    32
    $( ".yellow:last" ).click(function() {
        33
        $( ".yellow:first" ).trigger( "click" );
        34
        update( $( "span:last" ) );
        35
    });
    36

    37
    function update( j ) {
        38
        var n = parseInt( j.text(), 10 );
        39
        j.text( n + 1 );
        40
    }

})
$(document).ready(function () {
    $(".hello").click(function () {
    23
    $(this).clone()
        .addClass("newElement")
        .text("cloned")
        .appendTo(".clone");
    });
});
$(document).ready(function () {
  $(".child").click(function () {
   console.log ($(this).closest(".parent"));
  });
});
$(document).ready(function() {
    $('.each button').click(function() {
        var content = $('.each button').map(function () {
            return $(this).text();
        }).get();
        console.log(content);
    });
});
$(document).ready(function () {
    $(".button-find").click(function () {
        $("body").find(this);
        console.log(this);
    });
});
$(document).ready(function(){
    $('.fade').click(function () {
        $('.none').fadeIn(2000);
    });
});
$(document).ready(function () {
    $('.fade-2').click(function () {
        $('.clicknone').fadeOut(2000);
    });
});
$(document).ready(function () {
    $('.hide').click(function () {
        $('.hideof').hide(1000);
    });
    $('.show').click(function () {
        $('.hideon').show(1000);
    });
});
$(document).ready(function() {
    $(".dataAboutMe").load(function() {
        var height = $(this).height();
        var width = $(this).width();
    });
});