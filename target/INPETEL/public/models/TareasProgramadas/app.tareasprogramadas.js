function preguntarTrabajos() {
    //CARGAR TRABAJOS
    $.ajax({
        url: 'http://' + readConfigTarea() + '/scheduler/jobs',
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
            $(".btn-iniciar").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/start?jobName=' + $(this).attr("idJob"),
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
            $(".btn-pausar").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/pause?jobName=' + $(this).attr("idJob"),
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
            $(".btn-reanudar").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/resume?jobName=' + $(this).attr("idJob"),
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
            $(".btn-eliminar").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/delete?jobName=' + $(this).attr("idJob"),
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
            
            //DETENER TRABAJO
            $(".btn-detener").on('click', function () {
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/stop?jobName=' + $(this).attr("idJob"),
                    type: 'GET',
                    dataType: "json"
                }).always(function (data) {
                    if (data.statusCode == 200) {
                        toastr.success("Tarea detenida");
                        $("#Contenido").load("../../views/TareasProgramadas/TareasProgramadas.jsp");                        
                    } else if (data.statusCode == 521) {
                        toastr.error("La tarea no se esta ejecutando");
                    } else if (data.statusCode == 500) {
                        toastr.error("La tarea no existe");
                    } else {
                        toastr.error("Error, intente nuevamente");
                    }
                });
            });
            
            /*EDITAR TRABAJO SIMPLE
            $(".btn-editar").on('click', function(){
                $.ajax({
                    url: 'http://' + readConfigTarea() + '/scheduler/update?jobName=' + $(this).attr("idJob"),
                    type: 'GET',
                    dataType: "json"
                }).always()
            })*/
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
        if(fecha1 == "Invalid date"){fecha1 = " ";}else{fecha1 = fecha1;}
        var fecha2 = moment(val.nextFireTime).format('DD/MM/yyyy HH:mm:ss');
        
        res += "<tr>" +
                "<td>" + val.jobName + "</td>" +
                "<td>" + fecha + "</td>" +
                "<td>" + fecha1 + "</td>" +
                "<td>" + fecha2 + "</td>" +
                "<td width='460'> <button href='#' idJob='" + val.jobName + "' class='btn btn-iniciar btn-sm btn-success' " + btn[0] + " >Iniciar</button>" +
                " <button href='#' idJob='" + val.jobName + "' class='btn btn-pausar btn-sm btn-secondary' " + btn[1] + ">Pausar</button>" +
                " <button href='#' idJob='" + val.jobName + "' class='btn btn-reanudar btn-sm btn-primary' " + btn[2] + ">Reanudar</button> " +
                " <button href='#' idJob='" + val.jobName + "' class='btn btn-eliminar btn-sm btn-danger' " + btn[3] + ">Eliminar</button> " +
                " <button href='#' idJob='" + val.jobName + "' class='btn btn-detener btn-sm btn-danger' " + btn[4] + ">Detener</button> " +
                " <button href='#' idJob='" + val.jobName + "' class='btn btn-editar btn-sm btn-warning' " + btn[5] + " data-toggle='modal' data-target='#modalJobEdit'>Editar</button></td>" +
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
    } else {
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
    } else {
        res = "badge__badge-danger__PAUSADA";
    }
    return res;
}


