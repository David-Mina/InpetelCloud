<script src="../../models/TareasProgramadas/app.read.tareas.js"></script>
<script src="../../models/TareasProgramadas/app.tareasprogramadas.js"></script>


<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Tareas programadas</h4>
        </div>
    </div>
</div>

<div class="form-group">
    <div class="row justify-content-center">
        <div id="jobs"></div>
    </div>
</div>

<!--MODAL EDITAR TAREA-->
<div class="modal fade" id="modalJobEdit" tabindex="-1" role="dialog" aria-labelledby="modalLabelJob" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Editar trabajo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div>
                
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-outline-warning" id="JobUpdate" data-dismiss="modal">
                                    Modificar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>