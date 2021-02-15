//EVENTO NIT SISTEMA EXTERNO
$("#nitSE").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verSistemasExternos/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id:0,
            nit: $(this).val
        })
    }).always(function (data) {
        if (data) {
            console.log(data);
            $("#AddSE").prop('disabled', true);
            toastr.error("NIT asociado a un sistema externo existente, por favor cambie el valor");
        } else {
            $("#AddSE").prop('disabled', false);
        }
    });
});

//INSERTAR SISTEMA EXTERNO
$("#AddSE").on('click', function () {
    var nombreSE = $("#nombreSE").val();
    var telefonoSE = $("#telefonoSE").val();
    var nitSE = $("#nitSE").val();
    var direccionSE = $("#direccionSE").val();
    var tipoSE = $("#tipoSE").val();
    if (nombreSE.length == 0 || telefonoSE.length == 0 || nitSE.length == 0 || direccionSE.length == 0) {
        toastr.error("Campos vacios");
    } else if (tipoSE.length == 0) {
        toastr.error("Por favor seleccione el tipo de sistema externo a crear");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearSistemaExterno/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                nit: nitSE,
                nombre: nombreSE,
                telefono: telefonoSE,
                direccion: direccionSE,
                tipoSistema: tipoSE
            })
        }).always(function (data) {
            console.log(nombreSE, telefonoSE, nitSE, direccionSE, tipoSE);
            if (data > 0) {
                toastr.success("Sistema externo creado correctamente");
                $("#Contenido").load("../../views/SistemasExternos/VerSE.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

//CARGAR SISTEMAS EXTERNOS
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verSistemasExternos/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGAR TABLA
    $("#loadSE").html(tablePrincipal(tbodyTable(data)));
    //EVENTOS EDITAR SISTEMA EXTERNO
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verSistemasExternos/' + $(this).attr("idSE"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idSE").val(val.ID);
                $("#nombreSEEdit").val(val.Nombre_SE).prop('disabled', true);
                $("#nitSEEdit").val(val.Nit).prop('disabled', true);
                $("#telefonoSEEdit").val(val.Telefono_SE);
                $("#direccionSEEdit").val(val.Direccion_SE);
                $("#tipoSEEdit").val(val.TipoSistemaExterno).prop('disabled', true);
                //ACTUALIZAR SISTEMA EXTERNO
                $("#UpdSE").on('click', function () {
                    var id = $("#idSE").val().trim();
                    var nombreSE = $("#nombreSEEdit").val();
                    var nitSE = $("#nitSEEdit").val();
                    var telefonoSE = $("#telefonoSEEdit").val();
                    var direccionSE = $("#direccionSEEdit").val();

                    if (nombreSE.length == 0 || telefonoSE.length == 0 || nitSE.length == 0 || direccionSE.length == 0) {
                        toastr.error("Campos vacios");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarSistemaExterno/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                nit: nitSE,
                                telefono: telefonoSE,
                                direccion: direccionSE
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Sistema externo modificado correctamente");
                                $("#Contenido").load("../../views/SistemasExternos/VerSE.jsp");
                            }
                        });
                    }
                });
            });
        });
    });
    //BLOQUEAR SISTEMA EXTERNO
    $("a[rel='delete']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verSistemasExternos/' + $(this).attr("idSE"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idSE").val(val.ID);
                $("#nitSEDel").val(val.Nit).prop('disabled', true);
                //ELIMINAR 
                $("#DelSE").on('click', function () {
                    var id = $("#idSE").val().trim();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarSistemaExterno/' + id,
                        type: 'DELETE'
                    }).always(function (data) {
                        if (data > 0) {
                            toastr.error("Error, intente nuevamente");
                        } else {
                            toastr.success("Sistema externo eliminado correctamente");
                            $("#Contenido").load("../../views/SistemasExternos/VerSE.jsp");
                        }
                    });
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
            "<th>NIT</th>" +
            "<th>Telefono</th>" +
            "<th>Dirección</th>" +
            "<th>Tipo</th>" +
            "<th>Editar</th>" +
            "<th>Bloquear</th>" +
            "<th>Estado</th>" +
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
                "<td>" + val.Nombre_SE + "</td>" +
                "<td>" + val.Nit + "</td>" +
                "<td>" + val.Telefono_SE +
                "</td> \n\ <td>" + val.Direccion_SE +
                "</td> \n\ <td>" + val.TipoSistemaExterno +
                "</td> \n\ <td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idSE='" + val.ID + "' sta='" + val.States_ID + "'>" + sep[2] + "</a></td>\n\
                           <td> <a href='#' rel='edit' idSE='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalSEUpdate'>Editar</a></td> \n\
                           <td> <a href='#' rel='delete' idSE='" + val.ID + "' class='badge badge-danger' data-toggle='modal' data-target='#modalSEDelete'>Eliminar</a></td>\n\
               </tr>";
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

