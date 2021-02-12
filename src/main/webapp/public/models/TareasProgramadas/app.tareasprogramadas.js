var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

$("#year").val(year);
$("#mes").val(mes);
$("#dia").val(dia);
$("#hora").val(hora);
$("#minutos").val(minutos);

