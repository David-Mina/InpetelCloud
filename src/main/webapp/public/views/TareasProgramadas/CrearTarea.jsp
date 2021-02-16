<script src="../../models/TareasProgramadas/app.read.tareas.js"></script>
<script src="../../models/TareasProgramadas/app.creartareas.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear tarea</h4>
            <hr />
        </div>
    </div>
</div>

<div class="form-group row">
    <label for="nombreTarea" class="col-md-2 col-form-label">Tarea</label>
    <div class="col-md-5">
        <select class="custom-select" id="nombreTarea" required>
            <option selected value="initial_value">Seleccione tarea</option>
        </select>
    </div>
</div>

<h6>Fecha de creación de tarea</h6>

<div class="form-row justify-content-md-center">
    <div class="form-group col-md-1 mr-5">
        <label for="year">Año</label>
        <input type="number" class="form-control" id="year" />
    </div>
    <div class="form-group col-md-1 mr-5">
        <label for="mes">Mes</label>
        <input type="number" class="form-control" id="mes" />
    </div>
    <div class="form-group col-md-1 mr-5">
        <label for="dia">Día</label>
        <input type="number" class="form-control" id="dia" />
    </div>
    <div class="form-group col-md-1 mr-5">
        <label for="hora">Hora</label>
        <input type="number" class="form-control" id="hora" />
    </div>
    <div class="form-group col-md-1">
        <label for="minutos">Minutos</label>
        <input type="number" class="form-control" id="minutos" />
    </div>
</div>

<h7 class="text-center">Si la fecha dada no es válida el trabajo no se programará, si la fecha
    dada es anterior a los datos actuales el trabajo se iniciará inmediatamente</h7>
<hr>

<h6>Intervalo de repetición</h6>

<div class="form-row">
    <div class="form-group col-md-3">
        <label for="fechaTarea">Fecha</label>
        <input type="date" class="form-control" id="fechaTarea" />
    </div>
    <div class="form-group col-md-2">
        <label for="horaTarea">Hora</label>
        <input type="text" class="form-control" id="horaTarea" />
    </div>
    <div class="form-group col-md-3">
        <label for="intervaloTarea">Intervalo</label>
        <select class="custom-select" id="intervaloTarea" onchange="deshabilitarMinutos(this);">
            <option selected value="">Seleccione intervalo</option>
            <option value="diario">Diario</option>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
        </select>
    </div>
    <div class="form-group col-md-2">
        <label for="tiempo">Tiempo (Minutos)</label>
        <input type="number" class="form-control" id="tiempoTarea" />
    </div>
    <div class="col-md-2 d-flex align-items-md-center justify-content-center">
        <button class="btn btn-outline-primary btn-md" type="submit" id="AddJob">Crear</button>
    </div>
</div>
<h7 class="text-center">Si el intervalo de repetición está en blanco, se tratará como un trabajo de una sola vez</h7>


