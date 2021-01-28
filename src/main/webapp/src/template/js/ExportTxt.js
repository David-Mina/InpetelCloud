/* global URL */
var userDetails='';
$('.tableDataExport thead tr').each(function(){
  var detail='|';
  $(this).find('th').each(function(){
  	detail+=$(this).html().trim()+'|';
  });
  detail=detail.substring(0,detail.length-1);
  detail+='|';
 userDetails+=detail+"\r\n";
});
$('.tableDataExport tbody tr').each(function(){
  var detail='|';
  $(this).find('td').each(function(){
  	detail+=$(this).html().trim()+'|';
  });
  detail=detail.substring(0,detail.length-1);
  detail+='|';
 userDetails+=detail+"\r\n";
});
var a=document.getElementById('save');
a.onclick=function(){
    var a = document.getElementById("save");
    var file = new Blob([userDetails], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = "Export"+datePrint()+".txt";
}
function datePrint() {
    var d = new Date();
    return "-"+(d.getDate())+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())+"-";
}