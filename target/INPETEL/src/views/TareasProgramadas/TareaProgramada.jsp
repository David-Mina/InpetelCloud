<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Tareas programadas</h4>
            <hr />
        </div>
    </div>
</div>

<div class="form-group row">
    <label for="nombreTarea" class="col-md-2 col-form-label">Tarea</label>
    <div class="col-md-5">
        <select class="custom-select" id="nombreTarea" required>
            <option selected disabled value="">Seleccione tarea</option>
        </select>
    </div>
</div>

<h6>Fecha de creación de tarea</h6>

<div class="form-row">
    <div class="form-group col-md-2">
        <label for="año">Año</label>
        <input type="number" class="form-control" id="año" />
    </div>
    <div class="form-group col-md-3">
        <label for="mes">Mes</label>
        <input type="number" class="form-control" id="mes" />
    </div>
    <div class="form-group col-md-3">
        <label for="dia">Día</label>
        <input type="number" class="form-control" id="dia" />
    </div>
    <div class="form-group col-md-2">
        <label for="hora">Hora (24-Horas)</label>
        <input type="number" class="form-control" id="hora" />
    </div>
    <div class="form-group col-md-2">
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
        <input type="number" class="form-control" id="horaTarea" />
    </div>
    <div class="form-group col-md-3">
        <label for="intervaloTarea">Intervalo</label>
        <select class="custom-select" id="intervaloTarea" required>
            <option selected value="">Seleccion intervalo</option>
            <option value="1">Diario</option>
            <option value="2">Semanal</option>
            <option value="3">Mensual</option>
        </select>
    </div>
    <div class="form-group col-md-2">
        <label for="tiempo">Tiempo</label>
        <input type="number" class="form-control" id="tiempoTarea" />
    </div>
    <div class="col-md-2 d-flex align-items-md-center justify-content-center">
        <a class="btn btn-outline-primary btn-md" role="button" type="submit">Crear</a>
    </div>
</div>

<h7 class="text-center">Si el intervalo de repetición está en blanco, se tratará como un trabajo de una sola vez</h7>
<hr>
<h5 class="text-center">Tareas</h5>

<div class="form-group" id="tablaTarea">
    <table class="table table-sm table-striped text-center " id="tableTarea">
        <thead class="thead-dark text-center">
            <tr>
                <th>Nombre tarea</th>
                <th>Hora tarea programada</th>
                <th>Tiempo ultima tarea</th>
                <th>Tiempo proxima tarea</th>
                <th>Acciones</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>