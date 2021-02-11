<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Componentes/Concentrador/app.concentrador.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear concentrador</h4>
        </div>
    </div>
</div>
<form class="needs-validation" novalidate>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="labelIPCnc">Dirección IP</label>
            <input type="text" id="ipCnc" size="20" maxlength="15" class="form-control" onkeypress="return valideKey(event);" />
            <small id="imeiCncHelp" class="form-text text-muted">Ingrese la direccion IP en el formato correcto (192.168.0.1)</small>
        </div>
        <div class="col-md-6 mb-3">
            <label for="LabelNombreCnc">Nombre</label>
            <input type="text" id="nombreCnc" class="form-control" required/>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="selectComunicationCnc">Tipo comunicación</label>
            <select class="custom-select" id="tipocomunicacionCnc" required>
                <option selected value="">Seleccione tipo comunicación</option>
                <option value="1">PLC</option>
                <option value="2">RF</option>
                <option value="3">RS232</option>
                <option value="4">RS485</option>
                <option value="5">Optico</option>
                <option value="6">Ethernet</option>
                <option value="7">Wifi</option>
                <option value="8">Bluetooth</option>
            </select>
        </div>
        <div class="col-md-6 mb-3">
            <label for="labelImeiCnc">IMEI</label>
            <input type="text" id="imeiCnc" class="form-control" required/>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="selectModemCnc">Modem embebido</label>
            <select id="modemEmbebidoCnc" class="custom-select" required onchange="modemEmbebido(this);">
                <option selected value="">Seleccione opción</option>
                <option value="1">Si</option>
                <option value="2">No</option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="selectModuleCnc">I/O module</label>
            <select class="custom-select" id="ioModuleCnc" required>
                <option selected value="">Seleccione opción</option>
                <option value="1">Si</option>
                <option value="2">No</option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="selectModemCnc">Modem</label>
            <select class="custom-select" id="modemCnc" required>
                <option selected hidden value="">Seleccione imei modem</option>
            </select>
        </div>                
    </div>
    <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="selectMarcaCnc">Marca</label>
            <select id="marcaCnc" class="custom-select" required onchange="usuarioMarca(this);">
                <option selected value="">Seleccione marca</option>
                <option value="CIRCUTOR">CIRCUTOR</option>
                <option value="METER AND CONTROL">METER AND CONTROL</option>
                <option value="ADD">ADD</option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="labelUsuCnc">Usuario</label>
            <input id="usuarioMarcaCnc" type="text" class="form-control" />
        </div>
        <div class="col-md-4 mb-3">
            <label for="labelPassCnc">Contraseña</label>
            <input id="contraseñaMarcaCnc" type="text" class="form-control" />
        </div>   
    </div>
    <input type="submit" id="AddConcentrador" class="btn btn-primary" value="Crear">
</form>

