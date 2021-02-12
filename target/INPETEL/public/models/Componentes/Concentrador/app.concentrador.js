//Funcion para insertar solo numeros y la direccion ip
function valideKey(evt) {

    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code === 8) {
        return true;
    } else if (code >= 46 && code <= 57) {
        return true;
    } else {
        return false;
    }
}

//DESHABILITAR CAMPOS MODEM Y MARCA CUANDO MARCA SEA CIRCUTOR
var inputUsuMarcaCnc = document.getElementById('usuarioMarcaCnc');
var inputPasMarcaCnc = document.getElementById('contraseñaMarcaCnc');
var inputModemCnc = document.getElementById('modemCnc');
function usuarioMarca(elemento) {
    d = elemento.value;

    if (d == "CIRCUTOR") {
        inputUsuMarcaCnc.disabled = true;
        inputPasMarcaCnc.disabled = true;
    } else {
        inputUsuMarcaCnc.disabled = false;
        inputPasMarcaCnc.disabled = false;
    }
}
function modemEmbebido(elemento) {
    e = elemento.value;

    if (e == "1") {
        inputModemCnc.value = "";
        inputModemCnc.disabled = true;
    } else {
        inputModemCnc.disabled = false;
    }
}

//DESHABILITAR CAMPOS MODEM Y MARCA CUANDO MARCA SEA CIRCUTOR MODAL EDITAR
var inputUsuMarcaCncEdit = document.getElementById('usuarioMarcaCncEdit');
var inputPasMarcaCncEdit = document.getElementById('contraseñaMarcaCncEdit');
var inputModemCncEdit = document.getElementById('modemCncEdit');
function usuarioMarcaEdit(elemento) {
    d = elemento.value;

    if (d == "CIRCUTOR") {
        inputUsuMarcaCncEdit.disabled = true;
        inputPasMarcaCncEdit.disabled = true;
    } else {
        inputUsuMarcaCncEdit.disabled = false;
        inputPasMarcaCncEdit.disabled = false;
    }
}
function modemEmbebidoEdit(elemento) {
    e = elemento.value;

    if (e == "1") {
        inputModemCncEdit.value = "";
        inputModemCncEdit.disabled = true;
    } else {
        inputModemCncEdit.disabled = false;
    }
}

//MODEM QUE NO ESTAN ASOCIADOS A CONCENTRADORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verModemsNoAsociados/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'modemCnc');
    valueDeviceEdit(data, 'modemCncNewEdit');
});
//FUNCION SELECT PARA ASOCIAR MODEM A CONCENTRADOR
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay modem para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme:'bootstrap4'}).append("<option value='" + val.ID + "'>" + val.Imei + "</option>");
        });
    }
}
//FUNCION SELECT PARA ASOCIAR MODEM EN EDITAR CONCENTRADOR
function valueDeviceEdit(data, id) {
    if (data.length == 0) {
        toastr.error("No hay modem para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme:'bootstrap4', dropdownParent: $('#modalCncUpdate')}).append("<option value='" + val.ID + "'>" + val.Imei + "</option>");
        });
    }
}

//EVENTO SERIAL CONCENTRADOR
$("#serialCnc").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verConcentradores/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            concentrator: "-",
            serial: $(this).val(),
            imei: "-",
            ipReal: "-"
        })
    }).always(function (data) {
        if (data) {
            $("#AddConcentrador").prop('disabled', true);
            toastr.error("Serial asignado a un concentrador existente, por favor cambie el valor");
        } else {
            $("#AddConcentrador").prop('disabled', false);
        }
    });
});

//EVENTO IMEI CONCENTRADOR
$("#imeiCnc").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verConcentradores/',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            concentrator: "-",
            serial: "-",
            imei: $(this).val(),
            ipReal: "-"
        })
    }).always(function (data) {
        if (data) {
            $("#AddConcentrador").prop('disabled', true);
            toastr.error("Imei asignado a un concentrador existente, por favor cambie el valor");
        } else {
            $("#AddConcentrador").prop('disabled', false);
        }
    });
});

//INSERTAR
$("#AddConcentrador").on('click', function () {
    var ipCnc = $("#ipCnc").val();
    var nombreCnc = $("#nombreCnc").val();
    var tipocomunicacionCnc = $("#tipocomunicacionCnc").val();
    var imeiCnc = $("#imeiCnc").val();
    var modemEmbebidoCnc = $("#modemEmbebidoCnc").val();
    var iomoduleCnc = $("#ioModuleCnc").val();
    var modemCnc = $("#modemCnc").val();
    var marcaCnc = $("#marcaCnc").val();
    var usuarioMarcaCnc = $("#usuarioMarcaCnc").val();
    var contraseñaMarcaCnc = $("#contraseñaMarcaCnc").val();

    if (ipCnc.length == 0 || nombreCnc.length == 0 || imeiCnc.length == 0) {
        toastr.error("Faltan campos por llenar");
    } else if (tipocomunicacionCnc.length == 0) {
        toastr.warning("Selecione tipo de comunicación");
    } else if (modemEmbebidoCnc.length == 0 || modemEmbebidoCnc == "2" && modemCnc.length == 0) {
        toastr.warning("Debe tener un modem asociado");
    } else if (iomoduleCnc.length == 0) {
        toastr.warning("Selecione opción en el campo I/O Module");
    } else if (marcaCnc.length == 0) {
        toastr.warning("Selecione marca de concentrador");
    } else if (marcaCnc == "METER AND CONTROL" || marcaCnc == "ADD" && usuarioMarcaCnc.length == 0 && contraseñaMarcaCnc.length == 0) {
        toastr.warning("La marca seleccionada debe tener usuario y contraseña asociados");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearConcentradorVista/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                ipReal: ipCnc,
                concentrator: nombreCnc,
                tipoComunicacionId: tipocomunicacionCnc,
                imei: imeiCnc,
                serial: nombreCnc,
                tiempoConectadoId: "1",
                modemEmbebidoId: modemEmbebidoCnc,
                ioModule: iomoduleCnc,
                modemId: modemCnc,
                brand: marcaCnc,
                user: usuarioMarcaCnc,
                pass: contraseñaMarcaCnc
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Creado Correctamente");
                $("#Contenido").load("../../views/Componentes/Concentrador/VerConcentrador.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

//CARGAR CONCENTRADORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGA
    $("#loadCnc").html(tablePrincipal(tbodyTable(data)));
    $("#loadCncGestion").html(tablePrincipalGestion(tbodyTableGestion(data)));
    //EDITAR CONCENTRADOR
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verConcentradores/' + $(this).attr("idCnc"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idCnc").val(val.ID);
                $("#ipCncEdit").val(val.Ip_real);
                $("#nombreCncEdit").val(val.NombreConcentrador).prop('disabled', true);
                $("#tipocomunicacionCncEdit").val(val.Comunicacion);
                $("#imeiCncEdit").val(val.Imei).prop('disabled', true);
                $("#ioModuleCncEdit").val(val.IOmodule);
                $("#modemEmbebidoCncEdit").val(val.Modem_Embedido);
                $("#idModemCncEdit").val(val.Modem_ID);
                $("#modemCncEdit").val(val.ModemImei);
                $("#marcaCncEdit").val(val.Marca);
                $("#usuarioMarcaCncEdit").val(val.user);
                $("#contraseñaMarcaCncEdit").val(val.pass);
                $("#estadoCncEdit").val(val.States_ID);
                //ACTUALIZAR CONCENTRADOR
                $("#UpdCnc").on('click', function () {
                    var id = $("#idCnc").val().trim();
                    var ipCnc = $("#ipCncEdit").val();
                    var nombreCnc = $("#nombreCncEdit").val();
                    var tipocomunicacionCnc = $("#tipocomunicacionCncEdit").val();
                    var imeiCnc = $("#imeiCncEdit").val();
                    var ioModuleCnc = $("#ioModuleCncEdit").val();
                    var modemEmbebidoCnc = $("#modemEmbebidoCncEdit").val();
                    var idModemCnc = $("#idModemCncEdit").val();
                    var modemCnc = $("#modemCncEdit").val();
                    var modemCncNew = $("#modemCncNewEdit").val();
                    var marcaCnc = $("#marcaCncEdit").val();
                    var usuarioMarcaCnc = $("#usuarioMarcaCncEdit").val();
                    var contraseñaMarcaCnc = $("#contraseñaMarcaCncEdit").val();
                    var estadoCnc = $("#estadoCncEdit").val();

                    switch (tipocomunicacionCnc) {
                        case "PLC":
                            tipocomunicacionCnc = "1";
                            break;
                        case "RF":
                            tipocomunicacionCnc = "2";
                            break;
                        case "RS232":
                            tipocomunicacionCnc = "3";
                            break;
                        case "RS485":
                            tipocomunicacionCnc = "4";
                            break;
                        case "Optico":
                            tipocomunicacionCnc = "5";
                            break;
                        case "Ethernet":
                            tipocomunicacionCnc = "6";
                            break;
                        case "Wifi":
                            tipocomunicacionCnc = "7";
                            break;
                        case "Bluethooth":
                            tipocomunicacionCnc = "8";
                            break;
                        default:
                            tipocomunicacionCnc = "";
                    }


                    if (id.length == 0 || ipCnc.length == 0 || nombreCnc.length == 0 || tipocomunicacionCnc.length == 0) {
                        toastr.error("Campos Vacios");
                    } else {
                        if (modemCncNew.length > 0) {
                            idModemCnc = modemCncNew;
                        }
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarConcentrador/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                ipReal: ipCnc,
                                concentrator: nombreCnc,
                                tipoComunicacionId: tipocomunicacionCnc,
                                imei: imeiCnc,
                                serial: nombreCnc,
                                tiempoConectadoId: "1",
                                modemEmbebidoId: modemEmbebidoCnc,
                                ioModule: ioModuleCnc,
                                modemId: idModemCnc,
                                brand: marcaCnc,
                                pass: contraseñaMarcaCnc,
                                user: usuarioMarcaCnc,
                                estadoId: estadoCnc
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Concentrador modificado correctamente");
                                $("#Contenido").load("../../views/Componentes/Concentrador/VerConcentrador.jsp");
                            }
                        });
                    }
                });
            });
        });
    });
    
    //CAMBIAR DE ESTADO CONCENTRADOR
    $("a[rel='change']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verConcentradores/' + $(this).attr("idCnc"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idCnc").val(val.ID);
                $("#estadoChangeCnc").val(val.States_ID);
                //ELIMINAR 
                $("#ChangeCnc").on('click', function () {
                    var id = $("#idCnc").val().trim();
                    var estadoId = $("#estadoChangeCnc").val();
                    var observacionCnc = $("#observacionCnc").val();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarConcentrador/' + id,
                        type: 'DELETE',
                        dataType: "json",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            id:id,
                            estadoId: estadoId,
                            observacion: observacionCnc
                        })
                    }).always(function (data) {
                        if (data > 0) {
                            toastr.success("Estado de concentrador cambiado correctamente");
                            $("#Contenido").load("../../views/Componentes/Concentrador/GestionConcentrador.jsp");                            
                        } else {
                            toastr.error("Error, intente nuevamente");
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
            "<th>Direccion IP</th>" +
            "<th>Tipo Comunicación</th>" +
            "<th>Marca</th>" +
            "<th>Modem</th>" +
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
                "<td>" + val.NombreConcentrador + "</td>" +
                "<td>" + val.Ip_real + "</td>" +
                "<td>" + val.Comunicacion +
                "</td> \n\ <td>" + val.Marca +
                "</td> \n\ <td>" + val.ModemImei +
                "</td> \n\ <td> <a href='#' rel='edit' idCnc='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalCncUpdate'>Editar</a></td> \n\ </tr>";
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
                "<td>" + val.NombreConcentrador + "</td> \n\
                   <td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idCnc='" + val.ID + "' sta='" + val.States_ID + "'>" + sep[2] + "</a></td>\n\
                   <td> <a href='#' rel='change' idCnc='" + val.ID + "' class='badge badge-info' data-toggle='modal' data-target='#modalCncChange''>Cambiar</a></td>\n\
               </tr>";
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
function updateStatus(val) {
    var res = "";
    if (val == "1") {
        res = "2";
    } else {
        res = "1";
    }
    return res;
}