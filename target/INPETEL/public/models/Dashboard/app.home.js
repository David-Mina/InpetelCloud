//CONCENTRADORES
$("#cantidadCnc").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    dataType: "json"
}).always(function (cnc) {
    var cncActivos = 0;
    var cncInactivos = 0;
    $.each(cnc, function (key, val) {        
        if (val.States_ID == 1) {
            cncActivos++;            
        } else {
            cncInactivos++;
        }   
    });
    $("#cantidadCnc").html(cnc.length + " Concentradores");
    $("#cantidadCncActivos").html(cncActivos + " Activos");
    $("#cantidadCncInactivos").html(cncInactivos + " Inactivos");
});

//MEDIDORES
$("#cantidadMed").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verMedidores/',
    type: 'GET',
    dataType: "json"
}).always(function (med) {
    var medActivos = 0;
    var medInactivos = 0;
    $.each(med, function(key, val){
        if(val.States_ID == 1){
            medActivos++;
        }else {
            medInactivos++;
        }
    });
    $("#cantidadMed").html(med.length + " Medidores");
    $("#cantidadMedActivos").html(medActivos + " Activos");
    $("#cantidadMedInactivos").html(medInactivos + " Inactivos");
});

//MODEM
$("#cantidadMdm").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verModems/',
    type: 'GET',
    dataType: "json"
}).always(function (mdm) {
    $("#cantidadMdm").html(mdm.length + " Modems");
});

//TRANSFORMADORES
$("#cantidadTran").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTransformadores/',
    type: 'GET',
    dataType: "json"
}).always(function (tran) {
    var cantidadTranActivos = 0;
    var cantidadTranInactivos = 0;
    $.each(tran, function(key, val){
        if(val.States_ID == 1){
            cantidadTranActivos++;
        }else{
            cantidadTranInactivos++;
        }
    });
    $("#cantidadTran").html(tran.length + " Transformadores");
    $("#cantidadTranActivos").html(cantidadTranActivos + " Activos");
    $("#cantidadTranInactivos").html(cantidadTranInactivos + " Inactivos");
});