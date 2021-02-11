/* global URL */
var userDetails='';
$('.tableDataExport thead tr').each(function(){
  var detail='\t';
  $(this).find('th').each(function(){
  	detail+=$(this).html().trim()+'\t';
  });
  detail=detail.substring(0,detail.length-1);
  detail+='\t';
 userDetails+=detail+"\r\n";
});
$('.tableDataExport tbody tr').each(function(){
  var detail='\t';
  $(this).find('td').each(function(){
  	detail+=$(this).html().trim()+'\t';
  });
  detail=detail.substring(0,detail.length-1);
  detail+='\t';
 userDetails+=detail+"\r\n";
});
var a=document.getElementById('save');
a.onclick=function(){
    var a = document.getElementById("save");
    var file = new Blob([userDetails], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download =  "RLECT-"+datePrint()+"-INPEL.txt";
}
function datePrint() {
   var date = $("#dateExport").val();
   var sep = date.split("-");
    return sep[2]+"-"+sep[1]+"-"+sep[0].substring(2,4);
}
