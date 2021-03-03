<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Reportes/app.reportes.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Reportes</h4>
        </div>
    </div>
</div>

<div class="form-row">
    <div class="col-md-12 mb-3">
        <select id="tipoReporte" class="custom-select" required>
            <option selected value="">Seleccione reporte</option>
            <option value="CurvaHoraria">Curva horaria</option>
            <option value="CurvaDiaria">Curva diaria</option>
            <option value="EventosMedidor">Eventos medidor</option>
            <option value="EventosConcentrador">Eventos concentrador</option>
        </select>
    </div>
</div>

<div class="form-row">
    <div class="col-md-3 mb-3">
        <input type="date" name="fechaInicial" id="fechaInicial" class="form-control">    
    </div>
    <div class="col-md-3 mb-3">
        <input type="time" name="horaInicial" id="horaInicial" class="form-control">    
    </div>
    <div class="col-md-3 mb-3">
        <input type="date" name="fechaFinal" id="fechaFinal" class="form-control">    
    </div>
    <div class="col-md-3 mb-3">
        <input type="time" name="horaFinal" id="horaFinal" class="form-control">    
    </div> 
    <br><br>
</div>

<div class="form-group">
    <input type="text" id="filterInp" class="form-control form-control-sm" placeholder="Buscar" style="margin-bottom: 10px;">
</div>

<div class="form-group" style="width: 100%; height: 300px; overflow: scroll;">
    <ul class="list-group ulFilter" id="ulFilter">
        <li class="list-group-item">
            <input type="checkbox" name="allmet" id="allmet" class="allmet" value="Seleccionar todo"> Seleccionar todo
        </li>
        <li class="list-group-item" id="form-reportes">
        </li>
    </ul>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div class="text-right">
                <input type="submit" class="btn btn-md btn-primary btn-Reportes" value="Ejecutar">                                
            </div>
        </div>
    </div>
</div>

<!--MODAL REPORTE CURVA HORARIA-->
<div class="modal fade" id="modalCurvaHoraria" tabindex="-1" role="dialog" aria-labelledby="modalCurvaHoraria" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Reporte curva horaria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <div id="curvaHoraria">
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--MODAL REPORTE CURVA DIARIA-->
<div class="modal fade" id="modalCurvaDiaria" tabindex="-1" role="dialog" aria-labelledby="modalCurvaDiaria" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Reporte curva diaria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <div id="curvaDiaria">
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--MODAL EVENTOS MEDIDOR-->
<div class="modal fade" id="modalEventosMedidor" tabindex="-1" role="dialog" aria-labelledby="modalEventosMedidor" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelMdm">Eventos medidor</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12">
                                    <div class="form-group">
                                        <div id="eventosMedidor">
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../../template/js/filterInput.js"></script>