<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/SistemasExternos/app.sistemasexternos.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Sistemas Externos</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadSE">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--MODAL EDITAR SISTEMA EXTERNO-->
<div class="modal fade" id="modalSEUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelSE" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Modificar sistema externo</h5>
                <input type="hidden" id="idSE">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="labelNombreSEEdit">Nombre</label>
                        <input type="text" class="form-control" id="nombreSEEdit">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labeltelefonoSEEdit">Telefono</label>
                        <input type="text" class="form-control" id="telefonoSEEdit" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="labelnitSEEdit">NIT</label>
                        <input type="text" class="form-control" id="nitSEEdit">      
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labeldireccionSEEdit">Dirección</label>
                        <input type="text" class="form-control" id="direccionSEEdit" required>      
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labeltipoSEEdit">Tipo</label>
                        <input type="text" class="form-control" id="tipoSEEdit" required>      
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="UpdSE" data-dismiss="modal">
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

<!--MODAL BLOQUEAR SISTEMA EXTERNO-->
<div class="modal fade" id="modalSEDelete" tabindex="-1" role="dialog" aria-labelledby="modalLabelMdm" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Bloquear sistema externo</h5>
                <input type="hidden" id="idSE">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group row">
                    <label for="labelMdmDel" class="col-sm-6 col-form-label">¿Está seguro de bloquear el sistema externo?</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="nitSEDel">
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-sm btn-danger" id="DelSE" data-dismiss="modal">
                            Si
                        </button>
                    </div>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</div>