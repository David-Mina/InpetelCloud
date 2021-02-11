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
    a.download = 'TOPOLOGIA'+datePrint_INPEL()+"INPEL.txt";
} 
function datePrint_INPEL(){
    var d = new Date();
    return "-"+(d.getDate())+"-"+(d.getMonth()+1)+"-"+(d.getFullYear().toString().substring(2,4))+"-";
}