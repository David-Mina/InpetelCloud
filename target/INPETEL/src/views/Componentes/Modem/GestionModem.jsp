<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Habilitar / Deshabilitar modem</h4>
            </div>
        </div>
    </div>
    <form class="needs-validation" novalidate>
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
                    <button class="btn btn-outline-secondary" type="button" id="BuscarMdm"><span data-feather="search"></span></button>
                </div>
            </div>        
        </div>
        <hr>
        <div class="form-group" id="tabla">
            <table class="table table-sm table-striped text-center" id="table">
                <thead class="thead-dark text-center">
                    <tr>
                        <th>Serial</th>
                        <th>Nombre</th>
                        <th>IMEI</th>
                        <th>Marca</th>
                    </tr>
                </thead>
                <tbody>                       
                </tbody>
            </table>
        </div>
    </form>
</div>