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
$(".btn-AddSE").on('click', function () {
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
$("#loadSE").html("<h3 class='text-center'><img src='../../template/img/cargando.gif' width='250' height='229'></h3>");
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
                $("#nitSEEdit").val(val.Nit);
                $("#telefonoSEEdit").val(val.Telefono_SE);
                $("#direccionSEEdit").val(val.Direccion_SE);
                $("#tipoSEEdit").val(val.TipoSistemaExterno).prop('disabled', true);
                //ACTUALIZAR SISTEMA EXTERNO
                $("#UpdSE").on('click', function () {
                    var id = $("#idSE").val().trim();
                    var nitSE = $("#nitSEEdit").val();
                    var telefonoSE = $("#telefonoSEEdit").val();
                    var direccionSE = $("#direccionSEEdit").val();

                    if ( telefonoSE.length == 0 || nitSE.length == 0 || direccionSE.length == 0) {
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
    //CAMBIAR ESTADO SISTEMA EXTERNO
    $("a[rel='change']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verSistemasExternos/' + $(this).attr("idSE"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idSE").val(val.ID);
                $("#estadoChangeSE").val(val.States_ID);
                //CAMBIAR 
                $("#ChangeSE").on('click', function () {
                    var id = $("#idSE").val().trim();
                    var estadoIdSE = $("#estadoChangeSE").val();
                    var observacionSE = $("#observacionSE").val();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarSistemaExterno/' + id,
                        type: 'PUT',
                        dataType: "json",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            id:id,
                            observacion: observacionSE,
                            estadoId: estadoIdSE                            
                        })                        
                    }).always(function (data) {
                        if (data < 0) {
                            toastr.error("Error, intente nuevamente");
                        } else {
                            toastr.success("Estado cambiado correctamente");
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
    return "<script src='../../models/Configs/app.configs.table.js'></script>"+
            "<table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>NIT</th>" +
            "<th>Telefono</th>" +
            "<th>Dirección</th>" +
            "<th>Tipo</th>" +
            "<th>Estado</th>" +
            "<th>Editar</th>" +
            "<th>Acción</th>" +            
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
                "<td>" + val.Telefono_SE + "</td> "+
                "<td>" + val.Direccion_SE + "</td> "+
                "<td>" + val.TipoSistemaExterno + "</td> "+
                "<td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idSE='" + val.ID + "' sta='" + val.States_ID + "'>" + sep[2] + "</a></td>"+
                "<td> <a href='#' rel='edit' idSE='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalSEUpdate'>Editar</a></td>"+
                "<td> <a href='#' rel='change' idSE='" + val.ID + "' class='badge badge-info' data-toggle='modal' data-target='#modalSEChange'>Cambiar</a></td>"+
               "</tr>";
    });
    return res;
}
function colors(val) {
    var res = "";
    if (val == "1") {
        res = "badge__badge-success__Activo";
    } else {
        res = "badge__badge-warning__Inactivo";
    } 
    return res;
}

