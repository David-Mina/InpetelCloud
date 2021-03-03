//EVENTO SERIAL MODEM
$("#serialMdm").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verModemsur',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            serial: $(this).val(),
            imei: "-"
        })
    }).always(function (data) {
        if (data) {
            $(".btn-AddModem").prop('disabled', true);
            toastr.error("Serial asignado a modem registrado, por favor cambie el valor");
        } else {
            $(".btn-AddModem").prop('disabled', false);
        }
    });
});

//EVENTO IMEI MODEM
$("#imeiMdm").on('blur', function () {
    $.ajax({
        url: 'http://' + readConfig() + '/consulta/verModemsur',
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({
            id: 0,
            serial: "-",
            imei: $(this).val()
        })
    }).always(function (data) {
        if (data) {
            $(".btn-AddModem").prop('disabled', true);
            toastr.error("Imei asignado a modem registrado, por favor cambie el valor");
        } else {
            $(".btn-AddModem").prop('disabled', false);
        }
    });
});

//INSERTAR MODEM
$(".btn-AddModem").on('click', function () {
    var serialMdm = $("#serialMdm").val();
    var nombreMdm = $("#nombreMdm").val();
    var imeiMdm = $("#imeiMdm").val();
    var marcaMdm = $("#marcaMdm").val();

    if (serialMdm.length == 0 || nombreMdm.length == 0 || imeiMdm.length == 0 || marcaMdm.length == 0) {
        toastr.error("Campos vacios");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearModem/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                serial: serialMdm,
                nombre: nombreMdm,
                imei: imeiMdm,
                marca: marcaMdm
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Creado Correctamente");
                $("#Contenido").load("../../views/Componentes/Modem/VerModem.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});

$("#loadMdm").html("<h3 class='text-center'><img src='../../template/img/cargando.gif' width='120' height='80'></h3>");
//CARGAR MODEMS
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verModems/',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGA TABLA
    $("#loadMdm").html(tablePrincipal(tbodyTable(data)));
    //EDITAR MODEM
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verModems/' + $(this).attr("idMdm"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idMdm").val(val.ID);
                $("#serialMdmEdit").val(val.Serial).prop('disabled', true);
                $("#nombreMdmEdit").val(val.Nombre);
                $("#imeiMdmEdit").val(val.Imei).prop('disabled', true);
                $("#marcaMdmEdit").val(val.Marca);
                //ACTUALIZAR MODEM
                $("#UpdMdm").on('click', function () {
                    var id = $("#idMdm").val().trim();
                    var serialMdm = $("#serialMdmEdit").val();
                    var nombreMdm = $("#nombreMdmEdit").val();
                    var imeiMdm = $("#imeiMdmEdit").val();
                    var marcaMdm = $("#marcaMdmEdit").val();
                    if (serialMdm.length == 0 || nombreMdm.length == 0 || imeiMdm.length == 0 || id.length == 0 || marcaMdm.length == 0) {
                        toastr.error("Campos Vacios");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/modificacion/modificarModem/' + id,
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                serial: serialMdm,
                                nombre: nombreMdm,
                                imei: imeiMdm,
                                marca: marcaMdm
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.error("Error, intente nuevamente");
                            } else {
                                toastr.success("Modem modificado correctamente");
                                $("#Contenido").load("../../views/Componentes/Modem/VerModem.jsp");
                            }
                        });
                    }
                });
            });
        });
    });
    //ELIMINAR MODEM
    $("a[rel='delete']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verModems/' + $(this).attr("idMdm"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#idMdm").val(val.ID);
                $("#serialMdmDel").val(val.Serial).prop('disabled', true);
                //ELIMINAR 
                $("#DelMdm").on('click', function () {
                    var id = $("#idMdm").val().trim();
                    $.ajax({
                        url: 'http://' + readConfig() + '/eliminar/eliminarModem/' + id,
                        type: 'DELETE'
                    }).always(function (data) {
                        if (data > 0) {
                            toastr.error("Error, intente nuevamente");
                        } else {
                            toastr.success("Modem eliminado correctamente");
                            $("#Contenido").load("../../views/Componentes/Modem/VerModem.jsp");
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
            "<th>Serial</th>" +
            "<th>Nombre</th>" +
            "<th>Imei</th>" +
            "<th>Marca</th>" +
            "<th>Editar</th>" +
            "<th>Eliminar</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.Serial + "</td>" +
                "<td>" + val.Nombre + "</td>" +
                "<td>" + val.Imei + "</td>" +
                "<td>" + val.Marca + "</td>" +
                "<td> <a href='#' rel='edit' idMdm='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalMdmUpdate'>Editar</a></td>"+
                "<td> <a href='#' rel='delete' idMdm='" + val.ID + "' class='badge badge-danger' data-toggle='modal' data-target='#modalMdmDelete'>Eliminar</a></td>"+
               "</tr>";
    });
    return res;
}