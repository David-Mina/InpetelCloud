//CONCENTRADORES PARA ASOCIAR
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'serialAsocCnc');
});
//FUNCION SELECT PARA ASOCIAR CONCENTRADOR
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.warning("No hay concentradores para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme: 'bootstrap4'}).append("<option value='" + val.Serial + "'>" + val.Serial + "</option>");
        });
    }
}

//MEDIDORES PARA ASOCIAR
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verMedidoresNoAsociados',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'serialAsocMed');
});
//FUNCION SELECT PARA ASOCIAR CONCENTRADOR
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.warning("No hay medidores para asociar");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).select2({theme: 'bootstrap4'}).append("<option value='" + val.Serial + "'>" + val.Serial + "</option>");
        });
    }
}

//CREAR ASOCIACION
$(".btn-AsocCncMed").on('click', function () {
    var concentrador = $("#serialAsocCnc").val();
    var medidor = $("#serialAsocMed").val();

    if (concentrador.length == 0 || medidor.length == 0) {
        toast.warning("Por favor realice la asociacion");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/crearAsociacionConcentradorMedidor/',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                serialConcentrador: concentrador,
                serialMedidor: medidor
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Asociacion creada correctamente");
                $("#Contenido").load("../../views/Componentes/Asociacion/AsociacionCncMed.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});



