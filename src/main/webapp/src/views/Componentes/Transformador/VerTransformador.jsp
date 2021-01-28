<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Transformador/app.transformador.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Ver transformadores</h4>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadTran">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

<!--MODAL MODIFICAR TRANSFORMADOR-->
<div class="modal fade" id="modalTranUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Modificar transformador</h5>
                <input type="hidden" id="idTran">
                <input type="hidden" id="idConcentradorTranEdit">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="labelDireccionTranEdit">Dirección</label>
                        <input type="text" class="form-control" id="direccionTranEdit" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labelCodigoTranEdit">Código</label>
                        <input type="text" class="form-control" id="codigoTranEdit" disabled>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="selectTipoTranEdit">Tipo transformador</label>
                        <select class="custom-select" id="tipoTranEdit" required>
                            <option selected value="">Seleccione tipo de transformador</option>
                            <option value="MonofasicoTrifilar">Monofásico trifilar</option>
                            <option value="Trifasico">Trifásico</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="selectConcentradorTranEdit">Concentrador</label>
                        <input type="text" id="concentradorTranEdit" class="form-control" disabled/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labelSelectConcentradorTranNewEdit">Concentrador</label>                        
                        <select class="custom-select" id="concentradorTranNewEdit" required>
                            <option value="">Seleccione nuevo concentrador</option>
                        </select>
                        <small id="concentradorTranHelpEdit" class="form-text text-muted">Seleccione esta opción solo si va a cambiar el concentrador asociado</small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="labelCapacidadTranEdit">Capacidad</label>
                        <input type="text" class="form-control" id="capacidadTranEdit" required>      
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labelNodoTranEdit">Nodo</label>
                        <input type="text" class="form-control" id="nodoTranEdit" required>      
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labelCargaAforadaTranEdit">Carga aforada</label>
                        <input type="text" class="form-control" id="cargaTranEdit" value="0" required>      
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="selectEstadoTranEdit">Estado transformador</label>
                        <select class="custom-select" required id="estadoTranEdit">
                            <option selected disabled value="">Seleccione estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                            <option value="3">Bloqueado</option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="UpdTran" data-dismiss="modal">
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