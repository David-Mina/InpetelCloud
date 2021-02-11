function datePrint() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var aa = d.getFullYear();
    var hh_mm = d.getHours() + ":" + d.getMinutes();
    return aa + "/" + mm + "/" + dd + " " + hh_mm;
}
$(document).ready(function () {
    $('#dataTableAll').DataTable({
        "scrollY": "320px",
        "scrollCollapse": true,
        "paging": false,
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
});