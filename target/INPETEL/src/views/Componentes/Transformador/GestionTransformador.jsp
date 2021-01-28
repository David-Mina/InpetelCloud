<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Transformador/app.transformador.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Habilitar / Deshabilitar transformadores</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="gestionTran">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

<!--MODAL MODIFICAR TRANSFORMADOR-->
<div class="modal fade" id="modalTranGestion" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Gestionar transformador</h5>
                <input type="hidden" id="idTran">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <label for="labelObservacionTran">Descripción de cambio</label>
                    <textarea class="form-control" rows="3" id="observacionTran"></textarea>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-dark" id="GestionTran" data-dismiss="modal">
                                    OK
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