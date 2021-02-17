<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Modem/app.modem.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear modem</h4>
        </div>
    </div>
</div>
<form class="needs-validation" novalidate>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="labelSerialMdm">Serial</label>
            <input type="text" class="form-control" id="serialMdm" required>
        </div>
        <div class="col-md-6 mb-3">
            <label for="labelNombreMdm">Nombre</label>
            <input type="text" class="form-control" id="nombreMdm" required>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="selectImeiMdm">IMEI</label>
            <input type="number" class="form-control" id="imeiMdm" required>
            <small id="imeiMdmHelp" class="form-text text-muted">Debes agregar solo numeros</small>
        </div>
        <div class="col-md-6 mb-3">
            <label for="labelMarcaMdm">Marca</label>
            <input type="text" class="form-control" id="marcaMdm" required>      
        </div>
    </div>
</form> 
<input type="submit" class="btn btn-primary btn-AddModem" value="Crear">

