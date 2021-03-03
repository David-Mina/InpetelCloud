$(".btn-paginas").on('click', function () {
    var paginas = $("input:checkbox[name='paginas']:checked").map(function () {
        return this.value;
    }).get();

    if ($('input:checkbox[name="paginas"]:checked').length == 0) {
        toastr.error("Faltan campos por llenar");
    } else {
        for (var i = 0; i < paginas.length; i++) {
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
