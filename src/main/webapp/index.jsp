<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inpetel Cloud</title>
        <link src="stylesheet" href="public/template/js/jquery-3.4.1.slim.js">
        <link rel="stylesheet" href="public/template/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/template/js/bootstrap.bundle.min.js">
        <link rel="stylesheet" href="public/template/css/login.css">        
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
                                        <h7>Por favor seleccione sistema externo al que pertenece</h7>
                                        
                                        <div class="form-label-group">
                                            <select class="form-control custom-select" id="sistemaExterno">                                               
                                            </select>
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
    <script src="public/template/js/jquery-3.3.1.js"></script>
    <script src="public/template/js/bootstrap.min.js"></script>
    <script src="public/template/js/jquery.dataTables.min.js"></script>
    <script src="public/template/js/toastr.min.js"></script> 
    <script src="public/models/Login/app.configs.login.read.js"></script>
    <script src="public/models/Login/app.login.js"></script>

</html>