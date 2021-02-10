<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Modem/app.modem.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Modems</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadMdm">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--MODAL EDITAR MODEM-->
<div class="modal fade" id="modalMdmUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelMdm" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Modificar modem</h5>
                <input type="hidden" id="idMdm">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="labelserialMdmEdit">Serial</label>
                        <input type="text" class="form-control" id="serialMdmEdit" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labelnombreMdmEdit">Nombre</label>
                        <input type="text" class="form-control" id="nombreMdmEdit" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="labelimeiMdmEdit">IMEI</label>
                        <input type="text" class="form-control" id="imeiMdmEdit" required>      
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labelmarcaMdmEdit">Marca</label>
                        <input type="text" class="form-control" id="marcaMdmEdit" required>      
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="UpdMdm" data-dismiss="modal">
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

<!--MODAL ELIMINAR MODEM-->
<div class="modal fade" id="modalMdmDelete" tabindex="-1" role="dialog" aria-labelledby="modalLabelMdm" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Eliminar modem</h5>
                <input type="hidden" id="idMdm">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group row">
                    <label for="labelMdmDel" class="col-sm-6 col-form-label">¿Está seguro de eliminar el modem con serial?</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="serialMdmDel">
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-sm btn-danger" id="DelMdm" data-dismiss="modal">
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