function preguntarTrabajos() {
    //CARGAR TRABAJOS
    $.ajax({
        url: 'http://' + readConfig() + '/scheduler/jobs',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data.data.length == 0) {
            //toastr.warning("No hay tareas programadas, por favor crear una tarea");
        } else {
            //TABLA TRABAJOS
            var datos = data.data;
            $("#jobs").html(tablePrincipal(tbodyTable(datos)));

            $.each(datos, function (key, val) {
                //INICIAR TRABAJO
                $("#btnIniciar").on('click', function () {
                    $.ajax({
                        url: 'http://' + readConfig() + '/scheduler/start?jobName=' + val.jobName,
                        type: 'GET',
                        dataType: "json"
                    }).always(function (data) {
                        if (data.statusCode == 200) {
                            toastr.success("Tarea ejecutada");
                            $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
                        } else if (data.statusCode == 501) {
                            toastr.warning("La tarea ya se esta ejecutando");
                        } else if (data.statusCode == 502) {
                            toastr.error("La tarea no existe");
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
                //PAUSAR TRABAJO
                $("#btnPausar").on('click', function () {
                    $.ajax({
                        url: 'http://' + readConfig() + '/scheduler/pause?jobName=' + val.jobName,
                        type: 'GET',
                        dataType: "json"
                    }).always(function (data) {
                        if (data.statusCode == 200) {
                            toastr.success("Tarea pausada");
                            $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
                        } else if (data.statusCode == 501) {
                            toastr.warning("La tarea se encuentra pausada");
                        } else if (data.statusCode == 502) {
                            toastr.error("La tarea no existe");
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
                //REANUDAR TRABAJO
                $("#btnReanudar").on('click', function () {
                    $.ajax({
                        url: 'http://' + readConfig() + '/scheduler/resume?jobName=' + val.jobName,
                        type: 'GET',
                        dataType: "json"
                    }).always(function (data) {
                        if (data.statusCode == 200) {
                            toastr.success("Tarea reanudada");
                            $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
                        } else if (data.statusCode == 501) {
                            toastr.warning("La tarea se esta ejecutando");
                        } else if (data.statusCode == 502) {
                            toastr.error("La tarea no existe");
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
                //ELIMINAR TRABAJO
                $("#btnEliminar").on('click', function () {
                    $.ajax({
                        url: 'http://' + readConfig() + '/scheduler/delete?jobName=' + val.jobName,
                        type: 'GET',
                        dataType: "json"
                    }).always(function (data) {
                        if (data.statusCode == 200) {
                            toastr.success("Tarea eliminada");
                            $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
                            $.ajax({
                                url: 'http://ec2-3-140-147-138.us-east-2.compute.amazonaws.com:7080/scheduler/jobs',
                                type: 'GET',
                                dataType: "json"
                            }).always(function (data) {
                                if (data.data.length == 0) {
                                    toastr.warning("No hay tareas programadas, por favor crear una tarea");
                                }
                            });
                        } else if (data.statusCode == 521) {
                            toastr.error("La tarea no se puedo eliminar porque se esta ejecutando");
                        } else {
                            toastr.error("Error, intente nuevamente");
                        }
                    });
                });
            });
        }
    });
}

//INTETVALO DE REPETICION PARA LA EXISTENCIA DE LOS TRABAJOS
setInterval(preguntarTrabajos, 3000);

//FUNCIONES TABLA TRABAJOS
function tablePrincipal(datos) {
    return "<table class='table table-sm table-striped text-center' id='table'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>Hora tarea programada</th>" +
            "<th>Tiempo ultima tarea</th>" +
            "<th>Tiempo proxima tarea</th>" +
            "<th>Acciones</th>" +
            "<th>Estado</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + datos + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.jobStatus).trim().split("__");
        var btn = button(val.jobStatus).split("_");
        var fecha = moment(val.scheduleTime).format('DD/MM/yyyy HH:mm:ss');
        var fecha1 = moment(val.lastFiredTime).format('DD/MM/yyyy HH:mm:ss');
        var fecha2 = moment(val.nextFireTime).format('DD/MM/yyyy HH:mm:ss');
        res += "<tr>" +
                "<td>" + val.jobName + "</td>" +
                "<td>" + fecha + "</td>" +
                "<td>" + fecha1 + "</td>" +
                "<td>" + fecha2 + "</td>" +
                "<td> <button class='btn btn-sm btn-success' id='btnIniciar' " + btn[0] + " >Iniciar</button>| <button class='btn btn-sm btn-secondary' id='btnPausar' " + btn[1] + ">Pausar</button>| <button class='btn btn-sm btn-primary' id='btnReanudar' " + btn[2] + ">Reanudar</button>| <button class='btn btn-sm btn-danger' id='btnEliminar' " + btn[3] + ">Eliminar</button>| <button class='btn btn-sm btn-danger' id='btnDetener' " + btn[4] + ">Detener</button>| <button class='btn btn-sm btn-warning' id='btnEditar' " + btn[5] + ">Editar</button></td>" +
                "<td> <a rel='status' class='" + sep[0] + " " + sep[1] + "' sta='" + val.jobStatus + "'>" + sep[2] + "</a></td>" +
                "</tr>";
    });
    return res;
}

function button(val) {
    var res = "";
    if (val === 'SCHEDULED') {
        res = " _ _disabled_ _disabled_ ";
    } else if (val === 'PAUSED') {
        res = " _disabled_ _ _disabled_ ";
    } else if (val === 'RUNNING') {
        res = "disabled_disabled_disabled_disabled_ _disabled";
    } else if (val === 'COMPLETE'){
        res = " _disabled_disabled_ _disabled_ ";
    } else if (val === 'NONE'){
        res = " _disabled_disabled_ _disabled_ ";
    }
    return res;
}

function colors(val) {
    var res = "";
    if (val === "SCHEDULED") {
        res = "badge__badge-info__PROGRAMADA";
    } else if (val === "RUNNING") {
        res = "badge__badge-success__EJECUTANDO";
    } else if (val === "PAUSED") {
        res = "badge__badge-danger__PAUSADA";
    }
    return res;
}


