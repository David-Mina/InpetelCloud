$(function () {
    $(".inicio").on('click', function () {
        location.reload();
    });
    $("#resta-x").hide();
    $("#restablecer").on('click', function () {
        $(".login-x").hide();
        $("#resta-x").show('400', function () {
        });
    });

    $("#restablecerEmail").on('click', function () {
        var mail = $("#mail").val();
        if (mail.length == 0) {
            $("#mail").css('border', '1px solid red');
        }
    });

    $("#actualizar").on('click', function () {
        location.reload();
    });

    //$(".root").load("../Ordenes/b09.jsp");

    $("a[rel='data']").on('click', function () {
        var datos = $(this).attr("menu");
        $(".root").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='120' height='80'></h3>");
        $.ajax({
            url: '../../../cbRouting',
            type: 'POST',
            data: {datos: datos},
        }).always(function (data) {
            $(".root").load(data);
        });
    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });


        return false;
    });
    
  
   /*$("#noty").load("../Notificaciones/alarmas.jsp"); 
    function noty(){
       $("#noty").load("../Notificaciones/alarmas.jsp"); 
    }
    
    setInterval(noty, 35000);
*/
    $("#perfil").on('click',function(){
       var id = $(this).attr("ack");
       $.ajax({
            url: '../Usuarios/editarUsuario.jsp',
            type: 'POST',
            data: {id: id},
        }).always(function (data) {
            $(".root").html(data);
        });
    });
    
     $("#version").on('click',function(){
       $.ajax({
            url: '../Informacion/acercade.jsp',
            type: 'POST',
        }).always(function (data) {
            $(".root").html(data);
        });
    });
    
     /*$.ajax({
            url: '../Dashboard/dashBoard.jsp',
            type: 'POST',
        }).always(function (data) {
            $(".root").html(data);
        });
*/
});