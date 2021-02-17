<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Medidor/app.medidor.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Medidores</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadMed">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

<!--MODAL MODIFICAR MEDIDOR-->
<div class="modal fade" id="modalMedUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Modificar medidor</h5>
                <input type="hidden" id="idMed">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="selectTipoMedEdit">Tipo medidor</label>
                        <select class="custom-select" id="tipoMedEdit" onchange="tipoMedidorEdit(this);" required>
                            <option selected value="">Seleccione tipo medidor</option>
                            <option value="Monofasico">Monofásico</option>
                            <option value="Monofasico Trifilar">Monofásico trifilar</option>
                            <option value="Trifasico">Trifásico</option>
                            <option value="Trifasico Semidirecta">Trifásico semidirecta</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labelMagnitudMedEdit">Magnitud</label>
                        <input type="text" class="form-control" id="magnitudMedEdit">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="selectNumCuadMedEdit">Número cuadrantes</label>
                        <select class="custom-select" id="numCuadrantesMedEdit" required>
                            <option value="1">2</option>
                            <option value="2">4</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="selectTipoPuertoEdit">Tipo puerto</label>
                        <select class="custom-select" id="tipoPuertoMedEdit" required>
                            <option selected value="">Seleccione tipo puerto</option>
                            <option value="Fisico">Fisico</option>
                            <option value="Optico">Optico</option>
                            <option value="Ambos">Ambos</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labelModeloEdit">Modelo</label>
                        <input type="text" class="form-control" id="modeloMedEdit" required>      
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="labelSerialEdit">Serial</label>
                        <input type="text" class="form-control" id="serialMedEdit" required>      
                    </div>
                </div>    
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="selectPrepagoEdit">Prepago</label>
                        <select class="custom-select" id="prepagoMedEdit" required>
                            <option selected value="">Seleccione opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="selectRelojsyncEdit">Reloj sincronizado</label>
                        <select class="custom-select" id="relojsyncMedEdit" required>
                            <option selected value="">Seleccione opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="selectMarcaMedEdit">Marca</label>
                        <select class="custom-select" required id="marcaMedEdit">
                            <option selected disabled value="">Seleccione marca</option>
                            <option value="CIRCUTOR">CIRCUTOR</option>
                            <option value="METER AND CONTROL">METER AND CONTROL</option>
                            <option value="ADD">ADD</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="UpdMed" data-dismiss="modal">
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

