export const dataTable = {
    options : {
        order: [[0, 'desc']],
        dom: 'Bfrtip',
        buttons: [
            {
            extend: 'colvis',
            text:      '<i class="fas fa-eye"></i> Columnas visibles',
            titleAttr: 'Columnas visibles',
            className: 'btn btn-info'
            },
            {
            extend: 'print',
            text:      '<i class="fas fa-print"></i> Imprimir',
            titleAttr: 'Imprimir',
            className: 'btn btn-info'
            },
            {
            extend: 'excel',
            text: '<i class="fas fa-file-excel"></i> Excel',
            titleAttr: 'Exportar a Excel',
            className: 'btn btn-info'
            }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
        },
    }
}