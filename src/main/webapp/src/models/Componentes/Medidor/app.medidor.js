//CONDICIONES PARA HABILITAR CAMPO MAGNITUD 
var inputMagnitudMed = document.getElementById('magnitudMed');
var inputMagnitudMedEdit = document.getElementById('magnitudMedEdit');
function tipoMedidor(elemento) {
    d = elemento.value;

    if (d == "Trifasico Semidirecta") {
        inputMagnitudMed.value = "";
        inputMagnitudMed.disabled = false;
    } else {
        inputMagnitudMed.value = "0";
        inputMagnitudMed.disabled = true;
    }
}
function tipoMedidorEdit(elemento) {
    d = elemento.value;

    if (d == "Trifasico Semidirecta") {
        inputMagnitudMedEdit.value = "0";
        inputMagnitudMedEdit.disabled = false;
    } else {
        inputMagnitudMedEdit.value = "";
        inputMagnitudMedEdit.disabled = true;
    }
}

//CONCENTRADORES NO ASOCIADOS A MEDIDORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'concentradorMed');
});
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay concentrador para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2().append("<option value='" + val.ID + "'>" + val.Serial + "</option>");
        });
    }
}

//EVENTO SERIAL MEDIDOR
$("#serialMed").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verMedidores/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            meter: $(this).val()
        })
    }).always(function (data) {
        if (data) {
            $("#AddMedidor").prop('disabled', true);
            toastr.error("Serial asignado a un medidor existente, por favor cambie el valor");
        } else {
            $("#AddMedidor").prop('disabled', false);
        }
    });
});

//INSERTAR
$("#AddMedidor").on('click', function () {
    var tipoMed = $("#tipoMed").val();
    var magnitudMed = $("#magnitudMed").val();
    var numCuadrantesMed = $("#numCuadrantesMed").val();
    var tipoPuertoMed = $("#tipoPuertoMed").val();
    var modeloMed = $("#modeloMed").val();
    var serialMed = $("#serialMed").val();
    var prepagoMed = $("#prepagoMed").val();
    var relojsyncMed = $("#relojsyncMed").val();
    var marcaMed = $("#marcaMed").val();

    if (numCuadrantesMed.length == 0 || modeloMed.length == 0 || serialMed.length == 0) {
        toastr.error("Campos vacios");
    } else if (tipoMed.length == 0) {
        toastr.warning("Selecione tipo de medidor");
    } else if (tipoMed == "4" && magnitudMed.length == 0) {
        toastr.warning("El tipo de medidor debe ir con magnitud");
    } else if (tipoPuertoMed.length == 0) {
        toastr.warning("Selecione tipo de puerto");
    } else if (prepagoMed.length == 0) {
        toastr.warning("Selecione opción en el campo de prepago");
    } else if (relojsyncMed.length == 0) {
        toastr.warning("Selecione opción en el campo de reloj sincronizado");
    } else if (marcaMed.length == 0) {
        toastr.warning("Selecione marca de medidor");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearMedidorVista/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                typeMeter: tipoMed,
                magnitud: magnitudMed,
                numberQuadrants: numCuadrantesMed,
                tipoPuertoId: tipoPuertoMed,
                prepago: prepagoMed,
                syncReloj: relojsyncMed,
                model: modeloMed,
                meter: serialMed,
                brand: marcaMed
            })
        }).always(function (data) {
            console.log(tipoMed, magnitudMed, numCuadrantesMed, tipoPuertoMed, prepagoMed, relojsyncMed, modeloMed, serialMed, marcaMed);
            if (data > 0) {
                toastr.success("Creado Correctamente");
                $("#Contenido").load("../../views/Componentes/Medidor/VerMedidor.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

//CARGAR MEDIDORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verMedidores/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGA EN LA TABLA   
    $("#loadMed").html(tablePrincipal(tbodyTable(data)));
    $("#loadMedGestion").html(tablePrincipalGestion(tbodyTableGestion(data)));
    //EDITAR MEDIDOR
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidores/' + $(this).attr("idMed"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idMed").val(val.ID);
                $("#tipoMedEdit").val(val.TipoMET);
                $("#magnitudMedEdit").val(val.Magnitud);
                $("#numCuadrantesMedEdit").val(val.NumCuadrantes);
                $("#tipoPuertoMedEdit").val(val.Puerto);
                $("#modeloMedEdit").val(val.Modelo);
                $("#serialMedEdit").val(val.Serial).prop('disabled', true);
                $("#prepagoMedEdit").val(val.Prepago);
                $("#relojsyncMedEdit").val(val.Sync_reloj);
                $("#marcaMedEdit").val(val.Marca);
                $("#estadoMedEdit").val(val.States_ID);

                //ACTUALIZAR MEDIDOR
                $("#UpdMed").on('click', function () {
                    var id = $("#idMed").val().trim();
                    var tipoMed = $("#tipoMedEdit").val();
                    var magnitudMed = $("#magnitudMedEdit").val();
                    var numCuadrantesMed = $("#numCuadrantesMedEdit").val();
                    var tipoPuertoMed = $("#tipoPuertoMedEdit").val();
                    var modeloMed = $("#modeloMedEdit").val();
                    var serialMed = $("#serialMedEdit").val();
                    var prepagoMed = $("#prepagoMedEdit").val();
                    var relojsyncMed = $("#relojsyncMedEdit").val();
                    var marcaMed = $("#marcaMedEdit").val();
                    var estadoMed = $("#estadoMedEdit").val();

                    switch (tipoPuertoMed) {
                        case "Fisico":
                            tipoPuertoMed = "1";
                            break;
                        case "Optico":
                            tipoPuertoMed = "2";
                            break;
                        case "Ambos":
                            tipoPuertoMed = "3";
                            break;
                        default:
                            tipoPuertoMed = "-";
                    }

                    if (numCuadrantesMed.length == 0 || modeloMed.length == 0 || serialMed.length == 0
                            || tipoMed.length == 0 || tipoPuertoMed.length == 0 || prepagoMed.length == 0
                            || relojsyncMed.length == 0) {
                        toastr.error("Campos vacios");
                    } else if (magnitudMed.length == 0) {
                        magnitudMed = "0";
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarMedidor/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                typeMeter: tipoMed,
                                magnitud: magnitudMed,
                                numberQuadrants: numCuadrantesMed,
                                tipoPuertoId: tipoPuertoMed,
                                prepago: prepagoMed,
                                syncReloj: relojsyncMed,
                                model: modeloMed,
                                meter: serialMed,
                                brand: marcaMed,
                                estadoId: estadoMed
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Medidor modificado correctamente");
                                $("#Contenido").load("../../views/Componentes/Medidor/VerMedidor.jsp");
                            }
                        });
                    }
                });
            });
        });
    });

    //CAMBIAR DE ESTADO MEDIDOR
    $("a[rel='change']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidores/' + $(this).attr("idMed"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idMed").val(val.ID);
                //ELIMINAR 
                $("#ChangeMed").on('click', function () {
                    var id = $("#idMed").val().trim();
                    var observacionMed = $("#observacionMed").val();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarMedidor/' + id,
                        type: 'DELETE',
                        dataType: "json",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            id:id,
                            observacion: observacionMed
                        })
                    }).always(function (data) {
                        console.log(observacionMed);
                        if (data > 0) {
                            toastr.success("Estado de medidor cambiado correctamente");
                            $("#Contenido").load("../../views/Componentes/Medidor/GestionMedidor.jsp");                            
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
            });
        });
    });
});

//FUNCIONES
function tablePrincipal(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Tipo medidor</th>" +
            "<th>Prepago</th>" +
            "<th>Modelo</th>" +
            "<th>Serial</th>" +
            "<th>Marca</th>" +
            "<th>Editar</th>" +
            "<th>Activar</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.TipoMET + "</td>" +
                "<td>" + val.Prepago + "</td>" +
                "<td>" + val.Modelo + "</td>" +
                "<td>" + val.Serial + "</td> \n\
                   <td>" + val.Marca + "</td> \n\
                   <td> <a href='#' rel='edit' idMed='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalMedUpdate'>Editar</a></td> \n\
               </tr>";
    });
    return res;
}

//FUNCIONES TABLA GESTION
function tablePrincipalGestion(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableINPETEL'>" +
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
                "<td>" + val.Serial + "</td> \n\
                   <td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idMed='" + val.ID + "' sta='" + val.States_ID + "'>" + sep[2] + "</a></td>\n\
                   <td> <a href='#' rel='change' idMed='" + val.ID + "' class='badge badge-info' data-toggle='modal' data-target='#modalMedChange''>Cambiar</a></td>\n\
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
function updateStatus(val) {
    var res = "";
    if (val == "1") {
        res = "2";
    } else {
        res = "1";
    }
    return res;
}
