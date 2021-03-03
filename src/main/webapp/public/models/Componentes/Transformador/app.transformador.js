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
            $("#" + id).select2({theme: 'bootstrap4'}).append("<option value='" + val.ID + "'>" + val.Serial + "</option>");
        });
    }
}
//FUNCION SELECT PARA EDITAR CONCENTRADOR ASOCIADO
function valueDeviceEdit(data, id) {
    if (data.length == 0) {
        toastr.error("No hay concentrador para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme: 'bootstrap4', dropdownParent: $('#modalTranUpdate')}).append("<option value='" + val.ID + "'>" + val.Serial + "</option>");
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
            $(".btn-AddTransformador").prop('disabled', true);
            toastr.error("Codigo registrado en un transformador existente, por favor cambie el valor");
        } else {
            $(".btn-AddTransformador").prop('disabled', false);
        }
    });
});

//INSERTAR TRANSFORMADOR
$(".btn-AddTransformador").on('click', function () {
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
$("#loadTran").html("<h3 class='text-center'><img src='../../template/img/cargando.gif' width='250' height='229'></h3>");
$("#loadTranGestion").html("<h3 class='text-center'><img src='../../template/img/cargando.gif' width='250' height='229'></h3>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTransformadores/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGA TABLA PRINCIPAL
    $("#loadTran").html(tablePrincipal(tbodyTable(data)));
    //CARGA TABLA GESTION
    $("#loadTranGestion").html(tablePrincipalGestion(tbodyTableGestion(data)));
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
                            || nodoTran.length == 0 || cargaTran.length == 0) {
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
                                concentradorId: idConcentradorTran
                            })
                        }).always(function (data) {
                            console.log(direccionTran, codigoTran, capacidadTran, nodoTran, cargaTran, tipoTran, idConcentradorTran);
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
    //CAMBIAR DE ESTADO TRANSFORMADOR
    $("a[rel='change']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verTransformadores/' + $(this).attr("idTran"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idTran").val(val.ID);
                $("#estadoChangeTran").val(val.States_ID);
                //ELIMINAR 
                $("#ChangeTran").on('click', function () {
                    var id = $("#idTran").val().trim();
                    var estadoId = $("#estadoChangeTran").val();
                    var observacionTran = $("#observacionTran").val();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarTransformador/' + id,
                        type: 'PUT',
                        dataType: "json",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            id: id,
                            estadoId: estadoId,
                            observacion: observacionTran
                        })
                    }).always(function (data) {
                        if (data > 0) {
                            toastr.success("Estado de transformador cambiado correctamente");
                            $("#Contenido").load("../../views/Componentes/Transformador/GestionTransformador.jsp");
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
            });
        });
    });
});

//FUNCIONES TABLA PRINCIPAL
function tablePrincipal(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script>" +
            "<table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
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

function TipoTrafo(data){
    var tipoTrafo="";
    if(data === "MonofasicoTrifilar"){
        tipoTrafo = "Monofásico trifilar";
    }else{
        tipoTrafo = "Trifásico";
    }
    return tipoTrafo;
}

function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.Codigo + "</td>" +
                "<td>" + val.Address + "</td>" +
                "<td>" + val.Capacidad + "</td>" +
                "<td>" + val.Nodo + "</td>" +
                "<td>" + val.CargaAforada + "</td>" +
                "<td>" + TipoTrafo(val.TipoTrafo) + "</td>" +
                "<td>" + val.cnc + "</td>" +
                "<td> <a href='#' rel='edit' idTran='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalTranUpdate'>Editar</a></td>" +
                "</tr>";
    });
    return res;
}

//FUNCIONES TABLA GESTION
function tablePrincipalGestion(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script>" +
            "<table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Serial</th>" +
            "<th>Estado</th>" +
            "<th>Acción</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTableGestion(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.States_ID).trim().split("__");
        res += "<tr>" +
                "<td>" + val.Codigo + "</td>" +
                "<td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idTran='" + val.ID + "' sta='" + val.States_ID + "'>" + sep[2] + "</a></td>" +
                "<td> <a href='#' rel='change' idTran='" + val.ID + "' class='badge badge-info' data-toggle='modal' data-target='#modalTranChange''>Cambiar</a></td>" +
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

