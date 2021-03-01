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
            <option value="">Curva horaria</option>
            <option value="">Curva diaria</option>
            <option value="">Eventos medidor</option>
            <option value="">Eventos concentrador</option>
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