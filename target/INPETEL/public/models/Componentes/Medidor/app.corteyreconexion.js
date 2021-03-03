//ASOCIACION TRANSFORMADOR CONCENTRADOR
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTrafoCnc/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    $("#form-datos").html(list(data));
});

//MUESTRO TRANSFORMADORES - CONCENCTRADORES
function list(data) {
    $.each(data, function (key, val) {
        var resp = "";
        resp += "<ul class='list-group'><li class='list-group-item'><a data-toggle='collapse' class='text-decoration-none' href='#cnc" + val.Serial + "' role='button' aria-expanded='false' aria-controls='cnc" + val.Serial + "' > Transformador " + val.CodigoTF + "<br><i class='fas fa-angle-right blue' id='icon-lg'></i>&nbsp;</a>" +
                "<input type='checkbox' name='cnc[]' id='cnc_" + val.Serial + "' value='" + val.Serial + "'> <label class='labelcnc_" + val.Serial + "'>  Concentrador : " + val.Serial + " </label>";
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidoresDeUnCnc/' + val.Serial,
            type: 'GET',
            contentType: 'application/json',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                resp += "<div class='collapse' id='cnc" + val.CNC_Serial + "'><ul class='list-group'><li class='list-group-item' style='height:40px;'><input type='checkbox' class='cnc_" + val.CNC_Serial + "' name='cnt[]' id='cnt_" + val.MET_Serial + "' value='" + val.MET_Serial + "'>   Medidor : " + val.MET_Serial + "</li></ul></div>";
            });
            resp += "</li></ul>";
            $("#form-datos").append(resp);
            //SELECCIONAR MEDIDORES
            $("input[name='cnc[]']").change(function () {
                var id = $(this).attr("id");
                $("." + id + ":checkbox").prop('checked', $(this).prop("checked"));
            });
        });
    });
}
//MODAL REPORTE CyR
$(".btn-CrearReporte").on('click', function () {
    if ($('input:checkbox[name="cnt[]"]:checked').length == 0) {
        toastr.warning("Debe seleccionar minimo un medidor");
    } else {
        $("#modalCyR").modal('show');
    }
});

//ENVIAR REPORTE CyR
$(".btn-enviarCyR").on('click', function () {

    var idMedidor = $("input:checkbox[name='cnt[]']:checked").map(function () {
        return this.value;
    }).get();
    var envio = $("#valorEnvioCyR").val();
    var descripcion = $("#observacionCyR").val();

    if ($('input:checkbox[name="cnt[]"]:checked').length == 0 || envio.length == 0 || descripcion.length == 0) {
        toastr.error("Faltan campos por llenar");
    } else {
        for (var i = 0; i < idMedidor.length; i++) {
            console.log(idMedidor);
            $.ajax({
                url: "http://" + readConfig() + "/client/crearCyR/",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    idMet: idMedidor[i],
                    valorEnvio: envio,
                    usuCrea: "60",
                    descripcion: descripcion
                })
            }).always(function (data) {
                if (data > 0) {
                    if (i == idMedidor.length) {
                        i = idMedidor.length + 1;
                        toastr.success("Reporte creado correctamente");
                        $("#Contenido").load("../../views/Componentes/Medidor/CorteYReconexion.jsp");
                    }
                } else {
                    toastr.error("Error, intente nuevamente");
                }
            });
        }
    }
});
