//Vista asociacion
$("#Asociacion").on('click', function () {
    $("#Contenido").load("../Componentes/Asociacion/AsociacionCncMed.jsp");
});

//Vistas Concentrador
$("#VerConcentrador").on('click', function () {
    $("#Contenido").load("../Componentes/Concentrador/VerConcentrador.jsp");
});

$("#CrearConcentrador").on('click', function () {
    $("#Contenido").load("../Componentes/Concentrador/CrearConcentrador.jsp");
});

$("#GestionConcentrador").on('click', function () {
    $("#Contenido").load("../Componentes/Concentrador/GestionConcentrador.jsp");
});

//Vistas Medidor
$("#VerMedidor").on('click', function () {
    $("#Contenido").load("../Componentes/Medidor/VerMedidor.jsp");
});

$("#CrearMedidor").on('click', function () {
    $("#Contenido").load("../Componentes/Medidor/CrearMedidor.jsp");
});

$("#GestionMedidor").on('click', function () {
    $("#Contenido").load("../Componentes/Medidor/GestionMedidor.jsp");
});

//Corte y reconexion
$("#CorteReconexion").on('click', function () {
    $("#Contenido").load("../Componentes/Medidor/CorteYReconexion.jsp");
});

//Vistas Modem
$("#VerModem").on('click', function () {
    $("#Contenido").load("../Componentes/Modem/VerModem.jsp");
});

$("#CrearModem").on('click', function () {
    $("#Contenido").load("../Componentes/Modem/CrearModem.jsp");
});

//Vistas Transformador
$("#VerTransformador").on('click', function () {
    $("#Contenido").load("../Componentes/Transformador/VerTransformador.jsp");
});

$("#CrearTransformador").on('click', function () {
    $("#Contenido").load("../Componentes/Transformador/CrearTransformador.jsp");
});

$("#GestionTransformador").on('click', function () {
    $("#Contenido").load("../Componentes/Transformador/GestionTransformador.jsp");
});

//Vistas Reportes
$("#Reportes").on('click', function (){
    $("#Contenido").load("../Reportes/Reportes.jsp");
})
//Vistas Usuarios
$("#VerUsuarios").on('click', function () {
    $("#Contenido").load("../Usuarios/VerUsuario.jsp");
});

$("#CrearUsuario").on('click', function () {
    $("#Contenido").load("../Usuarios/CrearUsuario.jsp");
});

//Vistas Sistema Externo
$("#VerSE").on('click', function () {
    $("#Contenido").load("../SistemasExternos/VerSE.jsp");
});

$("#CrearSE").on('click', function () {
    $("#Contenido").load("../SistemasExternos/CrearSE.jsp");
});

//Vista Tareas programadas
$("#VerTareas").on('click', function () {
    $("#Contenido").load("../TareasProgramadas/TareasProgramadas.jsp");
    $.ajax({
        url: 'http://ec2-3-140-147-138.us-east-2.compute.amazonaws.com:7080/scheduler/jobs',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data.data.length == 0) {
            toastr.warning("No hay tareas programadas, por favor crear una tarea");
        }
    });
});

$("#CrearTarea").on('click', function () {
    $("#Contenido").load("../TareasProgramadas/CrearTarea.jsp");
});
