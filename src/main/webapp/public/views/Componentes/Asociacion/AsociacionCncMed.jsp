<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Asociacion/app.asociarCncMed.js"></script>

<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Asociar Concentrador - Medidor</h4>
        </div>
    </div>
</div> 


<div class="row justify-content-center">
    <div class="col-md-5 mb-3">
        <label for="selectAsocCnc">Concentrador</label>
        <select class="custom-select" id="serialAsocCnc">
            <option selected value="">Seleccione concentrador</option>                            
        </select>
    </div>
    <div class="col-md-5 mb-3">
        <label for="selectEstadoCncEdit">Medidor</label>
        <select class="custom-select" id="serialAsocMed">
            <option selected value="">Seleccione medidor</option>                            
        </select>
    </div>
</div>
<div class="row">
    <div class="col-lg-11">
        <div class="form-group">
            <div class="text-right">
                <input type="submit" class="btn btn-primary btn-AsocCncMed" value="Asociar">                                
            </div>
        </div>
    </div>
</div>

