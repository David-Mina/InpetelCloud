//CONCENTRADORES PARA ASOCIAR CON TRANSFORMADORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'concentradorTran');
    valueDeviceEdit(data, 'concentradorTranNewEdit');
});
//FUNCION SELECT PARA ASOCIAR CONCENTRADOR
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay concentrador para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme:'bootstrap4'}).append("<option value='" + val.ID + "'>" + val.Serial + "</option>");
        });
    }
}
//FUNCION SELECT PARA EDITAR CONCENTRADOR ASOCIADO
function valueDeviceEdit(data, id) {
    if (data.length == 0) {
        toastr.error("No hay concentrador para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme:'bootstrap4', dropdownParent: $('#modalCncUpdate')}).append("<option value='" + val.ID + "'>" + val.Serial + "</option>");
        });
    }
}

//EVENTO CODIGO TRANSFORMADOR
$("#codigoTran").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verTransformadores/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            codigo: $(this).val()
        })
    }).always(function (data) {
        if (data) {
            $("#AddTransformador").prop('disabled', true);
            toastr.error("Codigo registrado en un transformador existente, por favor cambie el valor");
        } else {
            $("#AddTransformador").prop('disabled', false);
        }
    });
});

//INSERTAR TRANSFORMADOR
$("#AddTransformador").on('click', function () {
    var direccionTran = $("#direccionTran").val();
    var codigoTran = $("#codigoTran").val();
    var tipoTran = $("#tipoTran").val();
    var concentradorTran = $("#concentradorTran").val();
    var capacidadTran = $("#capacidadTran").val();
    var nodoTran = $("#nodoTran").val();
    var cargaTran = $("#cargaTran").val();

    if (direccionTran.length == 0 || codigoTran.length == 0 || concentradorTran.length == 0
            || capacidadTran.length == 0 || nodoTran.length == 0 || cargaTran.length == 0) {
        toastr.error("Campos vacios");
    } else if (tipoTran.length == 0) {
        toastr.warning("Selecione tipo de transformador");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearTransformador/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                address: direccionTran,
                codigo: codigoTran,
                capacidad: capacidadTran,
                nodo: nodoTran,
                cargaAforada: cargaTran,
                tipoTrafo: tipoTran,
                concentradorId: concentradorTran
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Transfromador creado correctamente");
                $("#Contenido").load("../../views/Componentes/Transformador/VerTransformador.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

//CARGAR TRANSFORMADORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTransformadores/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGAS
    $("#loadTran").html(tablePrincipal(tbodyTable(data)));
    //EDITAR TRANSFORMADOR
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verTransformadores/' + $(this).attr("idTran"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idTran").val(val.ID);
                $("#idConcentradorTranEdit").val(val.Concentrador_ID);
                $("#direccionTranEdit").val(val.Address);
                $("#codigoTranEdit").val(val.Codigo);
                $("#tipoTranEdit").val(val.TipoTrafo);
                $("#concentradorTranEdit").val(val.cnc);
                $("#capacidadTranEdit").val(val.Capacidad);
                $("#nodoTranEdit").val(val.Nodo);
                $("#cargaTranEdit").val(val.CargaAforada);
                $("#estadoTranEdit").val(val.States_ID);
                //ACTUALIZAR TRANSFORMADOR
                $("#UpdTran").on('click', function () {
                    var id = $("#idTran").val().trim();
                    var direccionTran = $("#direccionTranEdit").val();
                    var codigoTran = $("#codigoTranEdit").val();
                    var tipoTran = $("#tipoTranEdit").val();
                    var idConcentradorTran = $("#idConcentradorTranEdit").val();
                    var concentradorTran = $("#concentradorTranEdit").val();
                    var concentradorTranNew = $("#concentradorTranNewEdit").val();
                    var capacidadTran = $("#capacidadTranEdit").val();
                    var nodoTran = $("#nodoTranEdit").val();
                    var cargaTran = $("#cargaTranEdit").val();
                    var estadoTran = $("#estadoTranEdit").val();

                    switch (tipoTran) {
                        case "MonofasicoTrifilar":
                            tipoTran = "1";
                            break;
                        case "Trifasico":
                            tipoTran = "2";
                            break;
                        default:
                            tipoTran = "";
                            break;
                    }
                    if (codigoTran.length == 0 || direccionTran.length == 0 || capacidadTran.length == 0
                            || nodoTran.length == 0 || cargaTran.length == 0 || estadoTran.length == 0) {
                        toastr.error("Campos vacios");
                    } else {
                        if (concentradorTranNew.length > 0) {
                            idConcentradorTran = concentradorTranNew;
                        }
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarTransformador/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                address: direccionTran,
                                codigo: codigoTran,
                                capacidad: capacidadTran,
                                nodo: nodoTran,
                                cargaAforada: cargaTran,
                                tipoTrafo: tipoTran,
                                concentradorId: idConcentradorTran,
                                estadoId: estadoTran
                            })
                        }).always(function (data) {
                            console.log(direccionTran, codigoTran, capacidadTran, nodoTran, cargaTran, tipoTran, idConcentradorTran, estadoTran);
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Transformador modificado correctamente");
                                $("#Contenido").load("../../views/Componentes/Transformador/VerTransformador.jsp");
                            }
                        });
                    }
                });
            });
        });
    });
});

//FUNCIONES TABLA PRINCIPAL
function tablePrincipal(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Codigo</th>" +
            "<th>Dirección</th>" +
            "<th>Capacidad</th>" +
            "<th>Nodo</th>" +
            "<th>Carga</th>" +
            "<th>Tipo</th>" +
            "<th>Concentrador</th>" +
            "<th>Editar</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.enabled).trim().split("__");
        res += "<tr>" +
                "<td>" + val.Codigo + "</td>" +
                "<td>" + val.Address + "</td>" +
                "<td>" + val.Capacidad + "</td>" +
                "<td>" + val.Nodo + "</td>" +
                "<td>" + val.CargaAforada + "</td>" +
                "<td>" + val.TipoTrafo + "</td> \n\
                   <td>" + val.cnc + "</td> \n\
                   <td> <a href='#' rel='edit' idTran='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalTranUpdate'>Editar</a></td> \n\'</tr>";
    });
    return res;
}
function colors(val) {
    var res = "";
    if (val === "1") {
        res = "badge__badge-danger__Inactivar";
    } else {
        res = "badge__badge-success__Activar";
    }
    return res;
}
function updateStatus(val) {
    var res = "";
    if (val === "1") {
        res = "2";
    } else {
        res = "1";
    }
    return res;
}

//GESTION TRANSFORMADOR 
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTransformadores/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGAS
    $("#gestionTran").html(tableGestion(tbodyTableGestion(data)));
    //EDITAR TRANSFORMADOR
    $("a[rel='gestion']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verTransformadores/' + $(this).attr("idTran"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idTran").val(val.ID);
                $("#observacionTran").val(val.Observacion);
                //ACTUALIZAR TRANSFORMADOR
                $("#GestionTran").on('click', function () {
                    var id = $("#idTran").val().trim();
                    var observacionTran = $("#observacionTran").val();

                    if (id.length == 0 || observacionTran.length == 0) {
                        toastr.error("Campos vacios");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/eliminar/eliminarTransformador/' + id,
                            type: 'DELETE',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                observacion: observacionTran
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Transformador eliminado correctamente");
                                $("#Contenido").load("../../views/Componentes/Transformador/VerTransformador.jsp");
                            }
                        });
                    }
                });
            });
        });
    });
});
//FUNCIONES TABLA GESTION
function tableGestion(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>Estado</th>" +
            "<th>Gestionar</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTableGestion(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.enabled).trim().split("__");
        res += "<tr>" +
                "<td>" + val.Nombre + "</td> \n\
                   <td>" + val.States_ID + "</td> \n\
                   <td> <a href='#' rel='gestion' idTran='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalTranGestion'>Gestionar</a></td> \n\'</tr>";
    });
    return res;
}
