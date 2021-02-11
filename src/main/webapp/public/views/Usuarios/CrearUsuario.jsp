<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Usuarios/app.usuarios.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Crear usuario</h4>
            </div>
        </div>
    </div>
    <form class="needs-validation" novalidate>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="labelNombre">Nombre</label>
                <input type="text" id="nombreUsuario" class="form-control" required />
            </div>
            <div class="col-md-6 mb-3">
                <label for="labelUsuario">Usuario</label>
                <input type="text" id="usuario" class="form-control" required />
            </div>    
        </div>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="labelEmail">E-mail</label>
                <input type="email" id="emailUsuario" class="form-control" required />
                <small id="imeiUserHelp" class="form-text text-muted">La direccion de e-mail debe tener el formato
                    ejemplo@mail.com</small>
            </div>
            <div class="col-md-6 mb-3">
                <label for="labelSE">Sistema Externo</label>
                <select class="custom-select" id="seUsuario" required>
                    <option selected value="">Seleccione sistema asociado</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="labelContraseña">Contraseña</label>
                <input type="password" id="contraseña" class="form-control" required />
            </div>
            <div class="col-md-6 mb-3">
                <label for="labelValContraseña">Validación contraseña</label>
                <input type="password" id="valContraseña" class="form-control" required />
            </div>            
        </div>
        <button class="btn btn-primary" id="AddUsuario" type="submit">Crear</button>
    </form>
</div>

