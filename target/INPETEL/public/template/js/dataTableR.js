function datePrint() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var aa = d.getFullYear();
    var hh_mm = d.getHours() + ":" + d.getMinutes();
    return aa + "/" + mm + "/" + dd + " " + hh_mm;
}
function datePrint_INPEL(){
    var d = new Date();
    return "-"+(d.getDate())+"-"+(d.getMonth()+1)+"-"+(d.getFullYear())+"-";
}
$(function () {
     var tableINPL = $('#tableINPL').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', {
                name: 'EXCEL',
                extend: 'excelHtml5',
                title: 'TOPOLOGIA'+datePrint_INPEL()+"INPEL"
            }, {
                name: 'PDF',
                extend: 'pdfHtml5',
                title: 'TOPOLOGIA'+datePrint_INPEL()+"INPEL",
                orientation: 'landscape',
                pageSize: 'LEGAL'
            }
        ]
    });

    $('#tableINPL tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    
    var table = $('#table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', {
                name: 'EXCEL',
                extend: 'excelHtml5',
                title: 'Export_Inpetel_' + datePrint()
            }, {
                name: 'PDF',
                extend: 'pdfHtml5',
                title: 'Export_Inpetel_' + datePrint(),
                orientation: 'landscape',
                pageSize: 'LEGAL'
            }
        ]
    });

    $('#table tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});