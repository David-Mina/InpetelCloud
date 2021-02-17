//SISTEMA EXTERNO PARA ASOCIAR CON USUARIO
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verSistemasExternos/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'seUsuario');
});
//FUNCION SELECT PARA ASOCIAR SISTEMA EXTERNO
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay sistema externo para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme:'bootstrap4'}).append("<option value='" + val.ID + "'>" + val.Nombre_SE + "</option>");
        });
    }
}
//EVENTO LOGIN USUARIO
$("#usuario").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verUsuarios/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            correo:"-",
            login:$(this).val
        })
    }).always(function (data) {
        if (data) {
            $("#AddUsuario").prop('disabled', true);
            toastr.error("Usuario asociado a una cuenta existente, por favor cambie el valor");
        } else {
            $("#AddUsuario").prop('disabled', false);
        }
    });
});
//EVENTO EMAIL USUARIO
$("#emailUsuario").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verUsuarios/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            correo:$(this).val,
            login:"-"
        })
    }).always(function (data) {
        if (data) {
            $("#AddUsuario").prop('disabled', true);
            toastr.error("Email asociado a una cuenta existente, por favor cambie el valor");
        } else {
            $("#AddUsuario").prop('disabled', false);
        }
    });
});

//INSERTAR USUARIO
$(".btn-AddUsuario").on('click', function () {
    var nombre = $("#nombreUsuario").val();
    var usuario = $("#usuario").val();
    var email = $("#emailUsuario").val();
    var seUsuario = $("#seUsuario").val();
    var contraseña = $("#contraseña").val();
    var valContraseña = $("#valContraseña").val();
    if (nombre.length == 0 || usuario.length == 0 || email.length == 0) {
        toastr.error("Campos Vacios");
    } else if (contraseña.length == 0 || valContraseña.length == 0) {
        toastr.error("Contraseñas vacias");
    } else if (contraseña != valContraseña) {
        toastr.error("Contraseñas Diferentes");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearUsuario/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                nombres: nombre,
                login: usuario,
                password: contraseña,
                password_salt: valContraseña,
                correo: email,
                sistemaExternoId: seUsuario,
                usuCrea: "56"
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Usuario creado correctamente");
                $("#Contenido").load("../../views/Usuarios/VerUsuario.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

//CARGAR USUARIOS
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verUsuarios/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGAR TABLA
    $("#loadUsers").html(tablePrincipal(tbodyTable(data)));
    //EVENTOS EDITAR USUARIO
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verUsuarios/' + $(this).attr("idUser"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idUser").val(val.ID);
                $("#nombreUsuarioEdit").val(val.Nombres);
                $("#usuarioEdit").val(val.Login).prop('disabled', true);
                $("#emailUsuarioEdit").val(val.Correo).prop('disabled', true);
                $("#seUsuarioEdit").val(val.NombreSistemaExterno);
                $("#estadoUsuarioEdit").val(val.States_ID);
                //ACTUALIZAR USUARIO
                $("#UpdUsers").on('click', function () {
                    var id = $("#idtm").val().trim();
                    var contraseña = $("#contraseñaEdit").val().trim();
                    var valContraseña = $("#valContraseñaEdit").val().trim();
                    var nombre = $("#nombreUsuarioEdit").val();
                    var usuario = $("#usuarioEdit").val();
                    var email = $("#emailUsuarioEdit").val();
                    var seUsuario = val.SistemaExterno_ID;
                    var estadoUsuario = $("#estadoUsuarioEdit").val();

                    if (nombre.length == 0 || usuario.length == 0 || email.length == 0 || id.length== 0) {
                        toastr.error("Campos Vacios");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarUsuario/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                nombres: nombre,
                                login: usuario,
                                password: contraseña,
                                password_salt: valContraseña,
                                correo: email,
                                sistemaExternoId: seUsuario,
                                estadoId: estadoUsuario,
                                usuModifica: "56"
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.success("Usuario modificado correctamente");
                                $("#Contenido").load("../../views/Usuarios/verUsuario.jsp");
                            } else {
                                toastr.error("Error, intente nuevamente");
                            }
                        });
                    }
                });
            });
        });
    });
});

//FUNCIONES TABLA
function tablePrincipal(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>Usuario</th>" +
            "<th>E-mail</th>" +
            "<th>Sistema Externo</th>" +
            "<th>Editar</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.States_ID).trim().split("__");
        res += "<tr>" +
                "<td>" + val.Nombres + "</td>" +
                "<td>" + val.Login + "</td>" +
                "<td>" + val.Correo + "</td>" +
                "<td>" + val.NombreSistemaExterno + "</td>" +
                "<td> <a href='#' rel='edit' idUser='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalUsersUpdate'>Editar</a></td>"+
               "</tr>";
    });
    return res;
}
function colors(val) {
    var res = "";
    if (val == "1") {
        res = "badge__badge-success__Activo";
    } else if(val == "2") {
        res = "badge__badge-warning__Inactivo";
    } else{
        res = "badge__badge-danger__Bloqueado";
    }
    return res;
}
