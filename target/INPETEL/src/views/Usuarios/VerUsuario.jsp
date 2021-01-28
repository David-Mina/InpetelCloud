<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Usuarios/app.usuarios.js"></script>
<div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="form-group">
                <h4 class="text-center">Ver usuarios</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="form-group">
                            <div id="loadUsers">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!--MODAL EDITAR USUARIO-->
<div class="modal fade" id="modalUsersUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Modificar Usuario</h5>
                <input type="hidden" id="idUser">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="labelNombre">Nombre</label>
                            <input type="text" class="form-control" id="nombreUsuarioEdit">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="labelUsuario">Usuario</label>
                            <input type="text" class="form-control" id="usuarioEdit">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="labelContraseña">Contraseña</label>
                            <input type="password" class="form-control" id="contraseñaEdit">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="labelValContraseña">Validación Contraseña</label>
                            <input type="password" class="form-control" id="valContraseñaEdit">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="labelEmail">E-mail</label>
                            <input type="email" class="form-control" id="emailUsuarioEdit">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="labelSe">Sistema Externo</label>
                            <input type="text" class="form-control" id="seUsuarioEdit">
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="selectEstadoMedEdit">Estado usuario</label>
                        <select class="custom-select" required id="estadoUsuarioEdit">
                            <option selected disabled value="">Seleccione estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                            <option value="3">Bloqueado</option>
                        </select>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-primary" id="UpdUser" data-dismiss="modal">
                                    Modificar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>