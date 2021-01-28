<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Habilitar / Deshabilitar concentradores</h4>
            </div>
        </div>
    </div>
    <form class="needs-validation" novalidate>
        <div class="">
            <label for="labelSelectCnc">Concentrador</label>
            <select class="custom-select" id="selectCnc" required>
                <option selected disabled value="Seleccione">Seleccione</option>
                <option>Retirado</option>
                <option>Habilitado</option>
            </select>
        </div>
        <hr>
        <div class="form-row">                  
            <div class="btn-toolbar" role="toolbar">        
                <div class="btn-group mr-2" role="group">
                    <button type="button" class="btn btn-primary">Copy</button>
                </div>
                <div class="btn-group mr-2" role="group">
                    <button type="button" class="btn btn-primary">Excel</button>
                </div>
                <div class="btn-group mr-2" role="group">
                    <button type="button" class="btn btn-primary">PDF</button>
                </div> 
            </div>
            <div class="input-group col-md">
                <input type="text" class="form-control" id="buscar" placeholder="Buscar">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="BuscarCnc"><span data-feather="search"></span></button>
                </div>
            </div>                
        </div>
        <hr>

        <div class="">
            <div class="form-group" id="tabla">
                <table class="table table-sm table-striped text-center" id="table">
                    <thead class="thead-dark text-center">
                        <tr>
                            <th>Concentrador</th>
                            <th>Dirección IP</th>
                            <th>Longitud</th>
                            <th>Latitud</th>
                            <th>Dirección</th>
                            <th>Observación</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CIR1231049283</td>
                            <td>Habilitado</td>
                        </tr>
                        <tr>
                            <td>CIR1231049283</td>
                            <td>Retirado</td>
                        </tr>
                        <tr>
                            <td>CIR1231049283</td>
                            <td>Retirado</td>
                        </tr>
                        <tr>
                            <td>CIR1231049283</td>
                            <td>Habilitado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
        <hr>
        <div class="">
            <label for="">Descripción de cambio</label>
            <textarea class="form-control" rows="3"></textarea>
        </div>
        <hr>
        <div class="justify-content-end">
            <button class="btn btn-primary float-right" type="submit">Ejecutar</button>
        </div>
    </form>
</div>
