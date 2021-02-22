//ASOCIACION TRANSFORMADOR CONCENTRADOR
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTrafoCnc/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    var dataTran = data;
    $("#form-datos").html(list(dataTran));
});

//ENVIAR REPORTE
$(".btn-enviarCyR").on('click', function () {

    var idMedidor = $("input:checkbox[name='cnt[]']:checked").map(function () {
        return this.value;
    }).get();
    console.log(idMedidor);
    var envio = $("#valorEnvioCyR").val();
    var descripcion = $("#observacionCyR").val();

    if ($('input:checkbox[name="cnt[]"]:checked').length == 0 || envio.length == 0 || descripcion.length == 0) {
        toastr.error("Faltan campos por llenar");
    } else {
        for (var i = 0;i< idMedidor.length; i++){
            $.ajax({
            url: "http://" + readConfig() + "/client/crearCyR",
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
            console.log(idMedidor[i], envio, descripcion);
            if (data > 0) {
                toastr.success("Reporte creado correctamente");
                $("#Contenido").load("../../views/Componentes/Medidor/CorteYReconexion.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
        }        
    }
});

function list(dataTran) {
    $.each(dataTran, function (key, val) {
        var resp = "";
        resp += "<ul class='list-group'><li class='list-group-item'><a data-toggle=collapse class='btn-block text-decoration-none' href='#cnc" + val.Serial + "' role='button' aria-expanded='false' aria-controls='cnc" + val.Serial + "' > Transformador " + val.CodigoTF + "<br></a>" +
                "<input type='checkbox' name='cnc[]' id='cnc_" + val.Serial + "' value='" + val.Serial + "'>   Concentrador : " + val.Serial;
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidoresDeUnCnc/' + val.Serial,
            type: 'GET',
            contentType: 'application/json',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                resp += "<div class='collapse' id='cnc" + val.CNC_Serial + "' sytle='display: inline-block;'><ul class='list-group'><li class='list-group-item' style='height:40px;'><input type='checkbox' class='cnc_" + val.CNC_Serial + "' name='cnt[]' id='cnt_" + val.MET_Serial + "' value='" + val.MET_Serial + "'>   Medidor : " + val.MET_Serial + "</li></ul></div>";
            });
            resp += "</li></ul>";
            $("#form-datos").append(resp);
            //SELECCIONAR MEDIDORES
            $("input[name='cnc[]']").change(function () {
                var id = $(this).attr("id");
                console.log(id);
                console.log("." + id + ":checkbox");
                $("." + id + ":checkbox").prop('checked', $(this).prop("checked"));
            });
        });
    });
}
