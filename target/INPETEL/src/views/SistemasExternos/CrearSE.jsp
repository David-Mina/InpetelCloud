<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/SistemasExternos/app.sistemasexternos.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear sistema externo</h4>
        </div>
    </div>
</div>
<form class="needs-validation" novalidate>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="NombreSE">Nombre</label>
            <input type="text" class="form-control" id="nombreSE" required>
        </div>
        <div class="col-md-6 mb-3">
            <label for="TelefonoSE">Teléfono</label>
            <input type="number" class="form-control" id="telefonoSE" required>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="nitSE">NIT</label>
            <input type="text" class="form-control" id="nitSE" maxlength="11" required>      
        </div>
        <div class="col-md-4 mb-3">
            <label for="direccionSE">Dirección</label>
            <input type="text" class="form-control" id="direccionSE" required>      
        </div>
        <div class="col-md-4 mb-3">
            <label for="TipoSE">Tipo sistema externo</label>
            <select class="custom-select" id="tipoSE" required>
                <option selected value="">Seleccione tipo de sistema externo</option>
                <option value="8">Electrificadora</option>
                <option value="9">Recarga vehicular</option>
                <option value="10">Otro</option>
            </select>
        </div>
    </div>
    <input type="submit" id="AddSE" class="btn btn-primary" value="Crear">
</form>