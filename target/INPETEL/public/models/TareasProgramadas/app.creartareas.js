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
function formatoFechaMoment(){
    fechaCreacion.setFullYear($("#year").val());
    fechaCreacion.setMonth($("#mes").val());
    fechaCreacion.setDate($("#dia").val());
    fechaCreacion.setHours($("#hora").val());
    fechaCreacion.setMinutes($("#minutos").val());
    var fechaMoment = moment.utc(fechaCreacion.toUTCString()).subtract(1, 'months').format('yyyy/MM/DD HH:mm');
    return fechaMoment;
}

//SELECT PARA TAREAS EXISTENTES
$.ajax({
    url: 'http://' + readConfigTarea() + '/scheduler/tareas',
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

var cron = document.getElementById('tiempoTarea');

function deshabilitarMinutos(elemento) {
    d = elemento.value;
    if (d.length > 0 ) {
        cron.disabled = true;
    } else {
        cron.disabled = false;
    }
}

//CREAR TAREA
$(".btn-AddJob").on('click', function () {
    var nombreTarea = $("#nombreTarea").val();
    var fechaTarea = $("#fechaTarea").val();    
    var horaTarea = $("#horaTarea").val();     
    var fechaUTCTarea = moment.utc(fechaTarea + " " + horaTarea + '-05:00').format('DD/MM/yyyy');  
    var horaUTCTarea = moment.utc(fechaTarea + " " + horaTarea + '-05:00').format('HH:mm:ss');
    var intervaloTarea = $("#intervaloTarea").val();
    var tiempoTarea = $("#tiempoTarea").val();
    var fecha = formatoFechaMoment();
    if (nombreTarea === 'initial_value') {
        toastr.warning("Por favor seleccione la tarea a programar"); 
    }else{
        if(fechaUTCTarea == "Invalid date" && horaUTCTarea == "Invalid date"){fechaUTCTarea = ""; horaUTCTarea = " ";} 
        $.ajax({
            url: 'http://' + readConfigTarea() + '/scheduler/schedule?' + 'jobName=' + nombreTarea + '&jobScheduleTime=' + fecha + '&cronExpression=' + fechaUTCTarea + '&hora=' + horaUTCTarea + '&gender=' + intervaloTarea + '&repeatTime=' + tiempoTarea,
            type: 'GET',
            dataType: "json",
            contentType: 'application/json'
        }).always(function (data) {
            //console.log('http://' + readConfig() + '/scheduler/schedule?' + 'jobName=' + nombreTarea + '&jobScheduleTime=' + fecha + '&cronExpression=' + fechaUTCTarea + '&hora=' + horaUTCTarea + '&gender=' + intervaloTarea + '&repeatTime=' + tiempoTarea);
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


