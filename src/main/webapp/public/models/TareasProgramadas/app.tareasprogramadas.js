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
            
            //INICIAR TRABAJO
            $(".btn-success").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfig() + '/scheduler/start?jobName=' + $(this).attr("idJob"),
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
            $(".btn-secondary").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfig() + '/scheduler/pause?jobName=' + $(this).attr("idJob"),
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
            $(".btn-primary").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfig() + '/scheduler/resume?jobName=' + $(this).attr("idJob"),
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
            $(".btn-outline-danger").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfig() + '/scheduler/delete?jobName=' + $(this).attr("idJob"),
                    type: 'GET',
                    dataType: "json"
                }).always(function (data) {
                    if (data.statusCode == 200) {
                        toastr.success("Tarea eliminada");
                        $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");
                        $.ajax({
                            url: 'http://' + readConfig() + '/scheduler/jobs',
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
        }
    });
}

//INTERVALO DE REPETICION PARA LA EXISTENCIA DE LOS TRABAJOS
setInterval(preguntarTrabajos, 3000);

//FUNCIONES TABLA TRABAJOS
function tablePrincipal(datos) {
    return "<table class='table table-sm table-striped text-center' id='table'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>Hora tarea programada</th>" +
            "<th>Tiempo ultima ejecución</th>" +
            "<th>Tiempo proxima ejecución</th>" +
            "<th>Acciones</th>" +
            "<th>Estado</th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + datos + "</tbody>" +
            "</table>";
}
function tbodyTable(datos) {
    var res = "";
    $.each(datos, function (key, val) {
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
                "<td> <button href='#' idJob='" + val.jobName + "' class='btn btn-sm btn-success' " + btn[0] + " >Iniciar</button>" +
                " | <button href='#'  idJob='" + val.jobName + "' class='btn btn-sm btn-secondary' " + btn[1] + ">Pausar</button>" +
                " | <button href='#'  idJob='" + val.jobName + "' class='btn btn-sm btn-primary' " + btn[2] + ">Reanudar</button> " +
                " | <button href='#'  idJob='" + val.jobName + "' class='btn btn-sm btn-outline-danger' " + btn[3] + ">Eliminar</button> " +
                " | <button href='#'  idJob='" + val.jobName + "' class='btn btn-sm btn-danger' " + btn[4] + ">Detener</button> " +
                " | <button href='#'  idJob='" + val.jobName + "' class='btn btn-sm btn-warning' " + btn[5] + ">Editar</button></td>" +
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
    } else if (val === 'COMPLETE') {
        res = " _disabled_disabled_ _disabled_ ";
    } else if (val === 'NONE') {
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


