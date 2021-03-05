<script src="../../models/Usuarios/app.paginas.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Páginas</h4>
        </div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-3 mr-1">
        <div class="card border-light">
            <h6 class="card-title text-center">Tareas</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkTareasProgramadas" value="TareasProgramadas">
                <label>Tareas programadas</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkCrearTarea" value="CrearTarea">
                <label>Crear tarea</label>
            </div>
        </div>            
    </div>
    <div class="col-sm-3 mr-1">
        <div class="card border-light">
            <h6 class="card-title text-center">Usuarios</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkUsuarios" value="Usuarios">
                <label>Usuarios</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkCrearUsuarios" value="CrearUsuarios">
                <label>Crear usuarios</label>
            </div>
        </div> 
    </div>
    <div class="col-sm-4">
        <div class="card border-light">
            <h6 class="card-title text-center">Sistemas externos</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkSistemasExternos" value="SistemasExternos">
                <label>Sistemas externos</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkCrearSE" value="CrearSE">
                <label>Crear sistema externo</label>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-3 mr-1">
        <div class="card border-light">
            <h6 class="card-title text-center">Componentes</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkAsociacion" value="Asociacion">
                <label>Asociación</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkConcentrador" value="Concentrador">
                <label>Concentrador</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkMedidor" value="Medidor">
                <label>Medidor</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkModem" value="Modem">
                <label>Modem</label>
            </div>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkTransformador" value="Transformador">
                <label>Transformador</label>
            </div>
        </div>
    </div>
    <div class="col-sm-3 mr-1">
        <div class="card border-light">
            <h6 class="card-title text-center">Reportes</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkReportes" value="Reportes">
                <label>Reportes</label>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card border-light">
            <h6 class="card-title text-center">Valores instantaneos</h6>
            <div class="card-body">
                <input type="checkbox" name="paginas" id="checkValoresInstantaneos" value="ValoresInstantaneos">
                <label>Valores instantaneos</label>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-11">
        <div class="form-group">
            <div class="text-right">
                <input type="submit" class="btn btn-primary btn-paginas" value="Ejecutar">                                
            </div>
        </div>
    </div>
</div>