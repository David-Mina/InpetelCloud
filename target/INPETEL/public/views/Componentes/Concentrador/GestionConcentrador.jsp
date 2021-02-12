<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Concentrador/app.concentrador.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Habilitar / Deshabilitar concentradores</h4>
        </div>
    </div>
</div>
<div class="form-group">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <div class="form-group">
                        <div id="loadCncGestion">
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!--MODAL CAMBIAR CONCENTRADOR-->
<div class="modal fade" id="modalCncChange" tabindex="-1" role="dialog" aria-labelledby="modalLabelCnc" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Cambio de estado concentrador</h5>
                <input type="hidden" id="idCnc">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="selectEstadoCncEdit">Estado concentrador</label>
                        <select class="custom-select" required id="estadoChangeCnc">
                            <option selected disabled value="">Seleccione estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <label for="labelObservacionCnc">Descripción de cambio</label>
                        <textarea class="form-control" rows="2" id="observacionCnc"></textarea>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <input type="submit" class="btn btn-sm btn-primary" id="ChangeCnc" data-dismiss="modal" value="Modificar">                                
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
