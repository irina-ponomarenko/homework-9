$(document).ready(function () {
    $('input, button, select').on('change', function () {
        console.log($(this).val());
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





