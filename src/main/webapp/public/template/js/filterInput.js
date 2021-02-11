$(function () {
    $("#filterInp").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ulFilter li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#filterInp_v2").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ulFilter_v2 li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});