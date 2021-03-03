$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTrafoCnc/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    $("#form-reportes").html(listaCncMed(data));
});

//MUESTRO CONCENTRADORES Y MEDIDORES
function listaCncMed(data) {
    $.each(data, function (key, val) {
        var resp = "";
        resp += "<ul class='list-group'><li class='list-group-item'><a data-toggle='collapse' href='#cnc" + val.Serial + "' role='button' aria-expanded='false' aria-controls='cnc" + val.Serial + "'><i class='fas fa-angle-right blue'></i>&nbsp;</a>" +
                "<input type='checkbox' name='cnc[]' id='cnc_" + val.Serial + "' value='" + val.IdCnc + "'> Concentrador : " + val.Serial;
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidoresDeUnCnc/' + val.Serial,
            type: 'GET',
            contentType: 'application/json',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                resp += "<div class='collapse' id='cnc" + val.CNC_Serial + "'><ul class='list-group'><li class='list-group-item' style='height:40px;'><input type='checkbox' class='cnc_" + val.CNC_Serial + "' name='cnt[]' id='cnt_" + val.CNC_Serial + "' value='" + val.IdMEt + "'>   Medidor : " + val.MET_Serial + "</li></ul></div>";
            });
            resp += "</li></ul>";
            $("#form-reportes").append(resp);
            //SELECCIONAR MEDIDORES
            $("input[name='cnc[]']").change(function () {
                var id = $(this).attr("id");
                $("." + id + ":checkbox").prop('checked', $(this).prop("checked"));
            });
        });
    });
}

//ENVIO REPORTE
$(".btn-Reportes").on('click', function () {
    var reporte = $("#tipoReporte").val();
    var fechaInicio = $("#fechaInicial").val();
    var horaInicio = $("#horaInicial").val() + ":00";
    var fechaFin = $("#fechaFinal").val();
    var horaFin = $("#horaFinal").val() + ":00";
    var serialCnc = $("input:checkbox[name='cnc[]']:checked").map(function () {
        return this.value;
    }).get();
    var medidores = $("input:checkbox[name='cnt[]']:checked").map(function () {
        return this.value;
    }).get();

    if (reporte.length == 0) {
        toastr.warning("Debe seleccionar el tipo de reporte");
    } else if (fechaInicio.length == 0 || horaInicio.length == 0 || fechaFin.length == 0 || horaFin.length == 0) {
        toastr.warning("Faltan campos por llenar");
    }
    {
        $.ajax({
            url: "http://" + readConfig() + "/reporte/reportes?reporte=" + reporte + "&fechaInicio=" + fechaInicio + "&horaInicio=" + horaInicio + "&fechaFin=" + fechaFin + "&horaFin=" + horaFin + "&serialCnc=" + serialCnc + "&medidores=" + medidores,
            type: "GET",
            contentType: "application/json",
            dataType: "json"
        }).always(function (data) {
            if (reporte == 'CurvaHoraria') {
                $("#modalCurvaHoraria").modal('show');
                $("#curvaHoraria").html(tableCurvaHoraria(tbodyTableHoraria(data)));
            } else if (reporte == "CurvaDiaria") {
                $("#modalCurvaDiaria").modal("show");
                $("#curvaDiaria").html(tableCurvaDiaria(tbodyTableDiaria(data)));
            } else if (reporte == "EventosMedidor") {
                $("#modalEventosMedidor").modal("show");
                $("#eventosMedidor").html(tableEventosMedidor(tbodyTableMedidor(data)));
            } else {

            }
        });
    }
});

//FUNCION CURVA HORARIA
function tableCurvaHoraria(data) {
    return "<script src='../../models/Reportes/app.reportes.tables.js'></script>" +
            "<table class='table table-sm table-striped text-center' id='tableCurvaHoraria'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Concentrador</th>" +
            "<th>Medidor</th>" +
            "<th>Fecha</th>" +
            "<th>Bc</th>" +
            "<th>Magn</th>" +
            "<th>Ai</th>" +
            "<th>Ae</th>" +
            "<th>R1</th>" +
            "<th>R2</th>" +
            "<th>R3</th>" +
            "<th>R4</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTableHoraria(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.Serial + "</td>" +
                "<td>" + val.Serial + "</td>" +
                "<td>" + val.Fecha + "</td>" +
                "<td>" + val.BC + "</td>" +
                "<td>" + val.Magnitud + "</td> " +
                "<td>" + val.AI + "</td> " +
                "<td>" + val.AE + "</td> " +
                "<td>" + val.R1 + "</td> " +
                "<td>" + val.R2 + "</td> " +
                "<td>" + val.R3 + "</td> " +
                "<td>" + val.R4 + "</td> " +
                "</tr>";
    });
    return res;
}

//FUNCION CURVA DIARIA
function tableCurvaDiaria(data) {
    return "<script src='../../models/Reportes/app.reportes.tables.js'></script>" +
            "<table class='table table-sm table-striped text-center' id='tableCurvaDiaria'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Concentrador</th>" +
            "<th>Medidor</th>" +
            "<th>Fecha</th>" +
            "<th>Bc</th>" +
            "<th>Ai</th>" +
            "<th>Ae</th>" +
            "<th>R1</th>" +
            "<th>R2</th>" +
            "<th>R3</th>" +
            "<th>R4</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTableDiaria(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.Serial + "</td>" +
                "<td>" + val.Serial + "</td>" +
                "<td>" + val.Fecha + "</td>" +
                "<td>" + val.BC + "</td>" +
                "<td>" + val.AI + "</td> " +
                "<td>" + val.AE + "</td> " +
                "<td>" + val.R1 + "</td> " +
                "<td>" + val.R2 + "</td> " +
                "<td>" + val.R3 + "</td> " +
                "<td>" + val.R4 + "</td> " +
                "</tr>";
    });
    return res;
}

//FUNCION EVENTOS MEDIDOR
function tableEventosMedidor(data) {
    return "<script src='../../models/Reportes/app.reportes.tables.js'></script>" +
            "<table class='table table-sm table-striped text-center' id='tableEventosMedidor'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Concentrador</th>" +
            "<th>Medidor</th>" +
            "<th>Fecha</th>" +
            "<th>Descripción Evento</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTableMedidor(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.Serial_Cnc + "</td>" +
                "<td>" + val.Serial_Met + "</td>" +
                "<td>" + val.Fecha + "</td>" +
                "<td>" + val.Descripcion_Evento + "</td>" +
                "</tr>";
    });
    return res;
}