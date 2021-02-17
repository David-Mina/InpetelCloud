<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Transformador/app.transformador.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear transformador</h4>
        </div>
    </div>
</div>
<form class="needs-validation" novalidate>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="labelDireccionTran">Dirección</label>
            <input type="text" class="form-control" id="direccionTran" required>
        </div>
        <div class="col-md-6 mb-3">
            <label for="labelCodigoTran">Código</label>
            <input type="text" class="form-control" id="codigoTran" required>
        </div>            
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="selectTipoTran">Tipo transformador</label>
            <select class="custom-select" id="tipoTran" required>
                <option selected value="">Seleccione tipo de transformador</option>
                <option value="1">Monofásico trifilar</option>
                <option value="2">Trifásico</option>
            </select>
        </div>
        <div class="col-md-6 mb-3">
            <label for="selectConcentradorTran">Concentrador</label>
            <select class="custom-select" id="concentradorTran" required>
                <option selected value="">Seleccione concentrador asociado</option>
            </select>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="labelCapacidadTran">Capacidad</label>
            <input type="text" class="form-control" id="capacidadTran" required>      
        </div>
        <div class="col-md-4 mb-3">
            <label for="labelNodoTran">Nodo</label>
            <input type="text" class="form-control" id="nodoTran" required>      
        </div>
        <div class="col-md-4 mb-3">
            <label for="labelCargaAforadaTran">Carga aforada</label>
            <input type="text" class="form-control" id="cargaTran" value="0" required>      
        </div>
    </div>
</form> 
<input type="submit" class="btn btn-primary btn-AddTransformador" value="Crear">