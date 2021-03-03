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
        order: [],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
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


