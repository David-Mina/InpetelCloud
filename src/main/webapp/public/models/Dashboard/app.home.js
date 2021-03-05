//CONCENTRADORES
$("#cantidadCnc").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$("#cantidadCncCircutor").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    dataType: "json"
}).always(function (cnc) {
    var cncActivos = 0;
    var cncInactivos = 0;
    var cncCircutor = 0;
    var cncMyC = 0;
    var cncADD = 0;
    $.each(cnc, function (key, val) {        
        if (val.States_ID == 1) {
            cncActivos++;            
        } else {
            cncInactivos++;
        } 
        if(val.Marca_ID == 1){
            cncCircutor++;
        }else if(val.Marca_ID == 2){
            cncMyC++;
        }else{
            cncADD++;
        }
    });
    $("#cantidadCnc").html(cnc.length + " Concentradores en total");
    $("#cantidadCncCircutor").html(cncCircutor + " Concentradores CIRCUTOR");
    $("#cantidadCncMyC").html(cncMyC + " Concentradores M&C");
    $("#cantidadCncADD").html(cncADD + " Concentradores ADD");
    $("#cantidadCncActivos").html(cncActivos + " Activos");
    $("#cantidadCncInactivos").html(cncInactivos + " Inactivos");
});

//MEDIDORES
$("#cantidadMed").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$("#cantidadMedCircutor").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verMedidores/',
    type: 'GET',
    dataType: "json"
}).always(function (med) {
    var medActivos = 0;
    var medInactivos = 0;
    var medCircutor = 0;
    var medMyC = 0;
    var medADD = 0;
    $.each(med, function(key, val){
        if(val.States_ID == 1){
            medActivos++;
        }else {
            medInactivos++;
        }
        if(val.Marca == "CIRCUTOR"){
            medCircutor++;
        }else if(val.Marca == "METER AND CONTROL"){
            medMyC++;
        }else {
            medADD++;
        }
    });
    $("#cantidadMed").html(med.length + " Medidores en total");
    $("#cantidadMedCircutor").html(medCircutor + " Medidores CIRCUTOR");
    $("#cantidadMedMyC").html(medMyC + " Medidores M&C");
    $("#cantidadMedADD").html(medADD + " Medidores ADD");
    $("#cantidadMedActivos").html(medActivos + " Activos");
    $("#cantidadMedInactivos").html(medInactivos + " Inactivos");
});

//MODEM
$("#cantidadMdm").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$("#mdmHuawei").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verModems/',
    type: 'GET',
    dataType: "json"
}).always(function (mdm) {
    var mdmHuawei = 0;
    var mdmQualcomm = 0;
    var mdmSiemens = 0;
    var mdmTelit = 0;
    var mdmMotorola = 0;
    var mdmWavecom = 0;
    $.each(mdm, function(key, val){
        if(val.Marca == "Huawei"){
            mdmHuawei++;
        }else if(val.Marca == "Qualcomm"){
            mdmQualcomm++;
        }else if(val.Marca == "Siemens"){
            mdmSiemens++;
        }else if(val.Marca == "Telit"){
            mdmTelit++;
        }else if(val.Marca == "Motorola"){
            mdmMotorola++;
        }else if(val.Marca == "Wavecom"){
            mdmWavecom++;
        }
    });
    $("#cantidadMdm").html(mdm.length + " Modems en total");
    $("#mdmHuawei").html(mdmHuawei + " Modem Huawei");
    $("#mdmQualcomm").html(mdmQualcomm + " Modems Qualcomm");
    $("#mdmTelit").html(mdmTelit + " Modem Telit");
    $("#mdmSiemens").html(mdmSiemens + " Modem Siemens");
    $("#mdmMotorola").html(mdmMotorola + " Modem Motorola");
    $("#mdmWavecom").html(mdmWavecom + " Modem Wavecom");
});

//TRANSFORMADORES
$("#cantidadTran").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$("#tranMonofasico").html("<h5 class='text-center'><img src='../../template/img/loading.gif' width='50' height='50'></h5>");
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTransformadores/',
    type: 'GET',
    dataType: "json"
}).always(function (tran) {
    var cantidadTranActivos = 0;
    var cantidadTranInactivos = 0;
    var tranTrifasicos = 0;
    var tranMonofasicos = 0;
    $.each(tran, function(key, val){
        if(val.States_ID == 1){
            cantidadTranActivos++;
        }else{
            cantidadTranInactivos++;
        }
        if(val.TipoTrafo == "MonofasicoTrifilar"){
            tranMonofasicos++;
        }else{
            tranTrifasicos++;
        }
    });
    $("#cantidadTran").html(tran.length + " Transformadores en total");
    $("#tranMonofasico").html(tranMonofasicos + " Monofasicos trifilares");
    $("#tranTrifasico").html(tranTrifasicos + " Trifasicos");
    $("#cantidadTranActivos").html(cantidadTranActivos + " Activos");
    $("#cantidadTranInactivos").html(cantidadTranInactivos + " Inactivos");
});