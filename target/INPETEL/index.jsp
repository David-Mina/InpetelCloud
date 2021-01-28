<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inpetel Cloud</title>
        <link src="stylesheet" href="src/template/js/jquery-3.4.1.slim.js">
        <link rel="stylesheet" href="src/template/css/bootstrap.min.css">
        <link rel="stylesheet" href="src/template/js/bootstrap.bundle.min.js">
        <link rel="stylesheet" href="src/template/css/login.css">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                    <h3 class="login-heading mb-4">¡Bienvenido!</h3>
                                    <form>
                                        <div class="form-label-group">
                                            <input type="user" id="inputUser" class="form-control"
                                                   placeholder="Usuario">
                                            <label for="inputUser">Usuario</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control"
                                                   placeholder="Contraseña" >
                                            <label for="inputPassword">Contraseña</label>
                                        </div>

                                        <a href="#" id="login" 
                                           class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" 
                                           role="button" aria-pressed="true">Ingresar</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="src/template/js/jquery-3.3.1.js"></script>
    <script src="src/template/js/bootstrap.min.js"></script>
    <script src="src/template/js/jquery.dataTables.min.js"></script>
    <script src="src/template/js/toastr.min.js"></script>    
    <script src="src/models/Login/app.login.js"></script>
    
</html>