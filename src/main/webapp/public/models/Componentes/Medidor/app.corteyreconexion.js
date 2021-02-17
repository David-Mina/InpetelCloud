//CONCENTRADORES
$.ajax({
    url: 'http://' + readConfig() + '/consulta/verConcentradores/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
});

function concentradores(){

}
