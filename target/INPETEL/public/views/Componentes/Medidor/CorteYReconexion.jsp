<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Medidor/app.corteyreconexion.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Corte y reconexión</h4>
        </div>
        <br>
    </div>
</div>


<div class="row justify-content-center">
    <div class="col-lg-10">
        <div class="form-group">
            <input type="text" id="filterInp" class="form-control form-control-sm" placeholder="Buscar" style="margin-bottom: 10px;">
        </div>
        <div class="form-group" style="width: 100%; height: 300px; overflow: scroll;">
            <ul class="list-group" id="ulFilter">
                <div class="form-group" id="form-datos">
                </div>
            </ul>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-11">
        <div class="form-group">
            <div class="text-right">
                <input type="submit" class="btn btn-md btn-primary btn-CrearReporte" data-toggle="modal" value="Ejecutar">                                
            </div>
        </div>
    </div>
</div>


<!-- MODAL ENVIO REPORTE-->
<div class="modal fade" id="modalCyR" tabindex="-1" role="dialog" aria-labelledby="modalLabelCyR" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Reporte corte y reconexión</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="selectEnvio">Seleccione la operación a realizar</label>
                        <select class="custom-select form-control form-control-sm" id="valorEnvioCyR">
                            <option value="">Seleccione estado</option>
                            <option value="1">Desconectar</option>
                            <option value="2">Conectar</option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <label for="labelObservacionCyR">Observación</label>
                        <textarea class="form-control" rows="2" id="observacionCyR"></textarea>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <input type="submit" class="btn btn-primary btn-enviarCyR" data-dismiss="modal" value="Enviar">                                
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

<script src="../../template/js/filterInput.js"></script>