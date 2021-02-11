//Vista Inicio
$("#inicio").on('click', function (){
    location.href="dashboard.jsp";
});

//Vistas Concentrador
$("#VerConcentrador").on('click', function (){
  $("#Contenido").load("../Componentes/Concentrador/VerConcentrador.jsp");  
});

$("#CrearConcentrador").on('click', function (){
  $("#Contenido").load("../Componentes/Concentrador/CrearConcentrador.jsp");  
});

$("#GestionConcentrador").on('click', function (){
  $("#Contenido").load("../Componentes/Concentrador/GestionConcentrador.jsp");  
});

//Vistas Medidor
$("#VerMedidor").on('click', function (){
  $("#Contenido").load("../Componentes/Medidor/VerMedidor.jsp");  
});

$("#CrearMedidor").on('click', function (){
  $("#Contenido").load("../Componentes/Medidor/CrearMedidor.jsp");  
});

$("#GestionMedidor").on('click', function (){
  $("#Contenido").load("../Componentes/Medidor/GestionMedidor.jsp");  
});

//Vistas Modem
$("#VerModem").on('click', function (){
  $("#Contenido").load("../Componentes/Modem/VerModem.jsp");  
});

$("#CrearModem").on('click', function (){
  $("#Contenido").load("../Componentes/Modem/CrearModem.jsp");  
});

$("#GestionModem").on('click', function (){
  $("#Contenido").load("../Componentes/Modem/GestionModem.jsp");  
});

//Vistas Transformador
$("#VerTransformador").on('click', function (){
  $("#Contenido").load("../Componentes/Transformador/VerTransformador.jsp");  
});

$("#CrearTransformador").on('click', function (){
  $("#Contenido").load("../Componentes/Transformador/CrearTransformador.jsp");  
});

$("#GestionTransformador").on('click', function (){
  $("#Contenido").load("../Componentes/Transformador/GestionTransformador.jsp");  
});

//Vistas Usuarios
$("#VerUsuarios").on('click', function (){
  $("#Contenido").load("../Usuarios/VerUsuario.jsp");  
});

$("#CrearUsuario").on('click', function (){
  $("#Contenido").load("../Usuarios/CrearUsuario.jsp");  
});

//Vistas Sistema Externo
$("#VerSE").on('click', function (){
  $("#Contenido").load("../SistemasExternos/VerSE.jsp");  
});

$("#CrearSE").on('click', function (){
  $("#Contenido").load("../SistemasExternos/CrearSE.jsp");  
});

//Vista Tareas programadas
$("#VerTareas").on('click', function (){
  $("#Contenido").load("../TareasProgramadas/TareasProgramadas.jsp");  
});

$("#CrearTarea").on('click', function (){
  $("#Contenido").load("../TareasProgramadas/CrearTarea.jsp");  
});