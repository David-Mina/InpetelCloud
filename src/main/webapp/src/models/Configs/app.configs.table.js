function datePrint() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var aa = d.getFullYear();
    var hh_mm = d.getHours() + ":" + d.getMinutes();
    return aa + "/" + mm + "/" + dd + " " + hh_mm;
}
$(function () {
    var table = $('#tableINPETEL').DataTable({
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

    var table1 = $('#tableINPETELV2').DataTable({
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
        ],
        "scrollX": true
    });

    $('#tableINPETELV2 tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });



});

