$(document).ready(function () {
    $('input').on('input', function () {
        console.log($(this).val());
    });

    $('select, [type="radio"], [type="checkbox"]').on('change', function () {
        console.log($(this).val());
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        console.log('Form submited')
    });
});

$(document).ready(function () {
    $('form').submit(function() {
        $(":submit", this).attr("disabled", "disabled");
        console.log($(this).serializeArray());
        return false;
    });
});
$(document).ready(function () {
    $("#lived").keypress(function () {
        console.log("Handler for .keypress() called.");
    });
});
$(document).ready(function () {
    $('#date').keydown(function (event) {
        console.log(event.which);
    });
});
$(document).ready(function () {
    $('#country').keyup(function (event) {
        console.log(event.which);
    });
});
$(document).ready(function() {
    $("#lived").change(function () {
        $("#country").val($(this).val())
    });
});





