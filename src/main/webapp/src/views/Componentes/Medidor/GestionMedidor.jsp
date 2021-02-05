<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Medidor/app.medidor.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Habilitar / Deshabilitar medidores</h4>
        </div>
    </div>
</div>
<div class="form-group">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <div class="form-group">
                        <div id="loadMedGestion">
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!--MODAL CAMBIAR MEDIDOR-->
<div class="modal fade" id="modalMedChange" tabindex="-1" role="dialog" aria-labelledby="modalLabelMdm" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Cambio de estado medidor</h5>
                <input type="hidden" id="idMed">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-7">
                        <label for="labelObservacionMed">Descripción de cambio</label>
                        <textarea class="form-control" rows="2" id="observacionMed"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="ChangeMed" data-dismiss="modal">
                                    Modificar
                                </button>
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
</div>

