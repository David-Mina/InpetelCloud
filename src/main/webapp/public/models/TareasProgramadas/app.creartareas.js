var fechaCreacion = new Date();
var year = fechaCreacion.getFullYear();
var mes = fechaCreacion.getMonth() + 1;
var dia = fechaCreacion.getDate();
var hora = fechaCreacion.getHours();
var minutos = fechaCreacion.getMinutes();

$("#year").val(year);
$("#mes").val(mes);
$("#dia").val(dia);
$("#hora").val(hora);
$("#minutos").val(minutos);

//FUNCION FORMATO FECHA
function formatoFecha() {
    var str = $("#year").val() + "/" + $("#mes").val() + "/" + $("#dia").val() + " " + $("#hora").val() + ":" + $("#minutos").val();
    return str;
}

//SELECT PARA TAREAS EXISTENTES
$.ajax({
    url: 'http://' + readConfig() + '/scheduler/tareas',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    valueDevice(data, 'nombreTarea');
});
function valueDevice(data, id) {
    if (data.length == 0) {
        toastr.error("No hay tareas disponibles");
    } else {
        $.each(data, function (key, val) {
            $("#" + id).append("<option value='" + val.NombreCategoria + "'>" + val.NombreCategoria + "</option>");
        });
    }
}

//CREAR TAREA
$("#AddJob").on('click', function () {
    var nombreTarea = $("#nombreTarea").val();
    var fechaTarea = $("#fechaTarea").val();
    var horaTarea = $("#horaTarea").val();
    var intervaloTarea = $("#intervaloTarea").val();
    var tiempoTarea = $("#tiempoTarea").val();
    var fecha = formatoFecha();
    if (nombreTarea === 'initial_value') {
        toastr.warning("Por favor seleccione la tarea a programar");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/scheduler/schedule?' + 'jobName=' + nombreTarea + '&jobScheduleTime=' + fecha + '&cronExpression=' + fechaTarea + '&hora=' + horaTarea + '&gender=' + intervaloTarea + '&repeatTime=' + tiempoTarea,
            type: 'GET',
            dataType: "json",
            contentType: 'application/json'
        }).always(function (data) {
            if (data.statusCode == 200) {
                toastr.success("Tarea creada");
                $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
            } else if (data.statusCode == 501) {
                toastr.warning("La tarea ya esta programada");
            } else if (data.statusCode == 502) {
                toastr.error("El nombre del trabajo no existe");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});


