$.ajax({
    url: 'http://' + readConfig() + '/consulta/verTrafoCnc/',
    type: 'GET',
    contentType: 'application/json',
    dataType: "json"
}).always(function (data) {
    $("#form-valores").html(listaMedidores(data));
});

//MUESTRO TRANSFORMADORES - CONCENCTRADORES
function listaMedidores(data) {
    $.each(data, function (key, val) {
        var resp = "";
        resp += "<ul class='list-group'><li class='list-group-item'><a data-toggle='collapse' class='btn-block text-decoration-none' href='#cnc" + val.Serial + "' role='button' aria-expanded='false' aria-controls='cnc" + val.Serial + "'>  </a>" +
                "<input type='checkbox' name='cnc[]' id='cnc_" + val.Serial + "' value='" + val.Serial + "'> <label class='labelcnc_"+val.Serial+"'>  Concentrador : "+ val.Serial +" </label>" ;
        $.ajax({
            url: 'http://' + readConfig() + '/consulta/verMedidoresDeUnCnc/' + val.Serial,
            type: 'GET',
            contentType: 'application/json',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                resp += "<div class='collapse' id='cnc" + val.CNC_Serial + "'><ul class='list-group'><li class='list-group-item' style='height:40px;'><input type='checkbox' class='cnc_" + val.CNC_Serial + "' name='cnt[]' id='cnt_" + val.MET_Serial + "' value='" + val.MET_Serial + "'>   Medidor : " + val.MET_Serial + "</li></ul></div>";
            });
            resp += "</li></ul>";
            $("#form-valores").append(resp);
        });
    });
}