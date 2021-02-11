<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Medidor/app.medidor.js"></script>
<div>   
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Crear medidor</h4>
            </div>
        </div>
    </div>
    <form class="needs-validation" novalidate>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="selectTipoMed">Tipo medidor</label>
                <select class="custom-select" id="tipoMed" onchange="tipoMedidor(this);" required>
                    <option selected value="">Seleccione tipo medidor</option>
                    <option value="Monofasico">Monofásico</option>
                    <option value="Monofasico Trifilar">Monofásico trifilar</option>
                    <option value="Trifasico">Trifásico</option>
                    <option value="Trifasico Semidirecta">Trifásico semidirecta</option>
                </select>
            </div>
            <div class="col-md-4 mb-3">
                <label for="labelMagnitudMed">Magnitud</label>
                <input type="text" class="form-control" id="magnitudMed" value="0" disabled>
            </div> 
            <div class="col-md-4 mb-3">
                <label for="selectNumCuadMed">Número cuadrantes</label>
                <select class="custom-select" id="numCuadrantesMed" required>
                    <option value="1">2</option>
                    <option value="2">4</option>
                </select>
            </div>
        </div>
        <div class="form-row">            
            <div class="col-md-4 mb-3">
                <label for="selectTipoPuerto">Tipo puerto</label>
                <select class="custom-select" id="tipoPuertoMed" required>
                    <option selected value="">Seleccione tipo puerto</option>
                    <option value="1">Fisico</option>
                    <option value="2">Optico</option>
                    <option value="3">Ambos</option>
                </select>
            </div>
            <div class="col-md-4 mb-3">
                <label for="labelModelo">Modelo</label>
                <input type="text" class="form-control" id="modeloMed" required>      
            </div>
            <div class="col-md-4 mb-3">
                <label for="labelSerial">Serial</label>
                <input type="text" class="form-control" id="serialMed" required>      
            </div>
        </div>    
        <div class="form-row">            
            <div class="col-md-3 mb-3">
                <label for="selectPrepago">Prepago</label>
                <select class="custom-select" id="prepagoMed" required>
                    <option selected value="">Seleccione opción</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select>
            </div>
            <div class="col-md-3 mb-3">
                <label for="selectRelojsync">Reloj sincronizado</label>
                <select class="custom-select" id="relojsyncMed" required>
                    <option selected value="">Seleccione opción</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select>
            </div>   
            <div class="col-md-6 mb-3">
                <label for="selectMarcaMed">Marca</label>
                <select class="custom-select" required id="marcaMed">
                    <option selected disabled value="">Seleccione marca</option>
                    <option value="CIRCUTOR">CIRCUTOR</option>
                    <option value="METER AND CONTROL">METER AND CONTROL</option>
                    <option value="ADD">ADD</option>
                </select>
            </div>
        </div>
        <input type="submit" id="AddMedidor" class="btn btn-primary" value="Crear">
    </form> 
</div>



