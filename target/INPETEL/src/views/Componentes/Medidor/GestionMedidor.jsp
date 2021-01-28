<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Habilitar / Deshabilitar medidores</h4>
            </div>
        </div>
    </div>
    <form class="needs-validation" novalidate>
        <div class="">
            <label for="">Medidor</label>
            <select class="custom-select" required>
                <option selected disabled value="Seleccione">Seleccione</option>
                <option>CIR1231049283</option>
                <option>CIR1231052283</option>
                <option>CIR1231076423</option>
                <option>CIR1231023286</option>
                <option>CIR1230654320</option>
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
                <input type="text" class="form-control" placeholder="Buscar">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="BuscarMed"><span data-feather="search"></span></button>
                </div>
            </div>        
        </div>
        <hr>
        <div class="form-group" id="tabla">
            <table class="table table-sm table-striped text-center" id="table">
                <thead class="thead-dark text-center">
                    <tr>
                        <th>Medidor</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>  
                    <tr>
                        <td>CIR1231049283</td>
                        <td>Activo</td>
                    </tr>
                    <tr>
                        <td>CIR1231049283</td>
                        <td>Activo</td>
                    </tr>
                    <tr>
                        <td>CIR1231049283</td>
                        <td>Retirado</td>
                    </tr>
                    <tr>
                        <td>CIR1231049283</td>
                        <td>Activo</td>
                    </tr>                      
                </tbody>
            </table>
        </div>
        <div class="form-row">
            <div class="col-md">
                <label for="">Descripción de cambio</label>
                <textarea class="form-control" rows="2"></textarea>
            </div>
            <div class="col-md">
                <label for="">Seleccione el cambio</label>
                <select class="custom-select" required>
                    <option selected disabled value="Seleccione">Seleccionar</option>
                    <option>CIR1231049283</option>
                    <option>CIR1231052283</option>
                    <option>CIR1231076423</option>
                    <option>CIR1231023286</option>
                    <option>CIR1230654320</option>
                </select>
            </div>
        </div>    
        <div class="justify-content-end">
            <button class="btn btn-primary float-right" type="submit">Ejecutar</button>
        </div>
    </form>
</div>
