<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Concentrador/app.concentrador.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Concentradores</h4>
            </div>
        </div>
    </div>    
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadCnc">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

<!--MODAL EDITAR CONCENTRADOR-->
<div class="modal fade" id="modalCncUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelCnc" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelCnc">Modificar concentrador</h5>
                <input type="hidden" id="idCnc">
                <input type="hidden" id="idModemCncEdit">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="labelIP">Dirección IP</label>
                        <input type="text" id="ipCncEdit" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="LabelName">Nombre</label>
                        <input type="text" id="nombreCncEdit" class="form-control" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="selectComunication">Tipo comunicación</label>
                        <select class="custom-select" id="tipocomunicacionCncEdit" required>
                            <option selected disabled value="">Seleccione tipo comunicación</option>
                            <option value="PLC">PLC</option>
                            <option value="RF">RF</option>
                            <option value="RS232">RS232</option>
                            <option value="RS485">RS485</option>
                            <option value="Optico">Optico</option>
                            <option value="Ethernet">Ethernet</option>
                            <option value="Wifi">Wifi</option>
                            <option value="Bluethooth">Bluetooth</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="labelImei">IMEI</label>
                        <input type="text" id="imeiCncEdit" class="form-control" required/>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="selectModule">I/O module</label>
                        <select class="custom-select" id="ioModuleCncEdit" required>
                            <option selected disabled value="">Seleccione opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="selectModem">Modem embebido</label>
                        <select id="modemEmbebidoCncEdit" class="custom-select" required onchange="modemEmbebidoEdit(this);">
                            <option selected disabled value="">Seleccione opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>                    
                    <div class="col-md-3 mb-3">
                        <label for="labelModem">Modem asociado</label>
                        <input type="text" id="modemCncEdit" class="form-control" disabled/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="labelModemNew">Modem</label>                        
                        <select class="custom-select" id="modemCncNewEdit" required>
                            <option value="">Seleccione nuevo modem</option>
                        </select>
                        <small id="ModemCncHelpEdit" class="form-text text-muted">Seleccione esta opcion solo si va a cambiar el modem asociado</small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="selectMarca">Marca</label>
                        <select id="marcaCncEdit" class="custom-select" required onchange="usuarioMarcaEdit(this);">
                            <option selected disabled value="">Seleccione marca</option>
                            <option value="CIRCUTOR">CIRCUTOR</option>
                            <option value="METER AND CONTROL">METER AND CONTROL</option>
                            <option value="ADD">ADD</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="">Usuario</label>
                        <input id="usuarioMarcaCncEdit" type="text" class="form-control" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="">Contraseña</label>
                        <input id="contraseñaMarcaCncEdit" type="text" class="form-control" />
                    </div>   
                </div>
                <div class="row">      
                    <div class="form-group">
                        <div class="text-right">
                            <button type="button" class="btn btn-sm btn-primary" id="UpdCnc" data-dismiss="modal">
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