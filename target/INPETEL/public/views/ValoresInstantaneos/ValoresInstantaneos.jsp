<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/ValoresInstantaneos/app.read.valoresinstantaneos.js"></script>
<script src="../../models/ValoresInstantaneos/app.valoresinstantaneos.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Valores instantaneos</h4>
        </div>
    </div>
</div>

<div class="form-row">
    <div class="col-md-12 mb-3">
        <select id="valorInstantaneo" class="custom-select" required>
            <option selected value="">Seleccione reporte</option>
            <option value="S01">VALORES BASICOS INSTANTANEOS</option>
            <option value="S02">VALORES AVANZADOS INSTANTANEOS</option>
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
        <li class="list-group-item" id="form-valores">
        </li>
    </ul>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div class="text-right">
                <input type="submit" class="btn btn-md btn-primary btn-ValorInstantaneo" value="Ejecutar">                                
            </div>
        </div>
    </div>
</div>

<script src="../../template/js/filterInput.js"></script>