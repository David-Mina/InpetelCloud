$("#login").on('click', function (){
    location.href="public/views/Dashboard/dashboard.jsp";
});

//SISTEMA EXTERNO PARA ASOCIAR CON USUARIO
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verSistemasExternos/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'sistemaExterno');
});
//FUNCION SELECT PARA ASOCIAR SISTEMA EXTERNO
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay sistema externo para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).append("<option value='" + val.ID + "'>" + val.Nombre_SE + "</option>");
        });
    }
}
/*
$("#login").on('click', function () { 
    
var user = $("#inputUser").val();
    var password = $("#inputPassword").val();
    if (user.length === 0 || password.length === 0) {
        toastr.error("Campos vacios");
    } else {
        $.ajax({
            url: 'http://' + readConfigInit() + '/consulta/users/login',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                login: user,
                pass: password
            })
        }).always(function (data) {
            if (data) {
                //GET DATA
                $.ajax({
                    url: 'http://' + readConfigInit() + '/consulta/users/login',
                    type: 'POST',
                    dataType: "json",
                    contentType: 'application/json',
                    data: JSON.stringify({
                        login: user,
                        email: user,
                        id: 0
                    })
                }).always(function (data) {
                    //SEND DATA
                    $.ajax({
                        url: 'Login',
                        type: 'POST',
                        data: {login:data[0].login,key:data[0].ID,names:data[0].name,action:"revertLogin"}
                    }).always(function (data) {
                        toastr.success("¡Bienvenido!");
                        location.href="src/views/Dashboard/dashboard.jsp";
                    });
                    //SEND END
                });
                //GET END
            } else {
                toastr.error("Error, usuario o contraseña incorrectos");
            }
        });
    }
});*/