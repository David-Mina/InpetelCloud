<!DOCTYPE html>
<html>
    <head> 
        <meta content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="INPETEL CLOUD AWS dashboard">
        <meta name="author" content="Luis Quiroz, David Mina and INPEL contributors">
        <meta name="generator" content="Jekyll v4.1.1">
        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/dashboard/">
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="../../template/css/bootstrap.min.css">
        <link rel="stylesheet" href="../../template/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="../../template/css/bootstrapTwitter.css">
        <link rel="stylesheet" href="../../template/css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" href="../../template/css/buttons.bootstrap4.min.css">
        <link rel="stylesheet" href="../../template/css/toastr.min.css">
        <link rel="stylesheet" href="../../template/css/buttons.dataTables.min.css">
        <link rel="stylesheet" href="../../template/css/jquery.gridster.min.css">
        <link rel="stylesheet" href="../../template/css/select2.css">
        <link rel="stylesheet" href="../../template/css/select2.min.css">
        <link rel="stylesheet" href="../../template/css/select2-bootstrap4.css">
        <link rel="stylesheet" href="../../template/css/reloj.css">
        <!--<link rel="stylesheet" type="text/css" href="../../template/js/DataTable/DataTables-1.10.23/css/dataTables.bootstrap4.min.css"/>
        <link rel="stylesheet" type="text/css" href="../../template/js/DataTable/Buttons-1.6.5/css/buttons.bootstrap4.min.css"/>-->


        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
        <link rel="stylesheet" href="../../template/css/dashboard.css">
    </head>
    <body>

        <nav class="navbar navbar-primary sticky-top bg-primary flex-md-nowrap p-0 shadow">
            <a class="navbar-brand bg-light d-flex justify-content-center col-md-3 col-lg-2" href="#">
                <img src="../../template/img/inpel.png" alt="Imagen Inpetel" style="max-width:80%; height:auto;"></a>
            <div class="watch">
                <div class="wrap">
                    <div class="widget">
                        <div class="fechaReloj">
                            <p id="diaSemanaReloj" class="diaSemanaReloj"></p>
                            <p id="diaReloj" class="diaReloj"></p>
                            <p>de</p>
                            <p id="mesReloj" class="mesReloj"></p>
                            <p>del</p>
                            <p id="yearReloj" class="yearReloj"></p>
                        </div>

                        <div class="reloj">
                            <p id="horasReloj" class="horasReloj"></p>
                            <p>:</p>
                            <p id="minutosReloj" class="minutosReloj"></p>
                            <p>:</p>
                            <div class="caja-segundosReloj">
                                <p id="segundosReloj" class="segundosReloj"></p>
                                <p id="ampmReloj" class="ampmReloj"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav px-3">    
                <li class="nav-item text-nowrap">
                    <a class="nav-link text-light" id="Salir">Salir</a>
                </li>
            </ul>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="sidebar-sticky pt-3">
                        <ul class="nav flex-column">                           
                            <li class="nav-item">
                                <a class="nav-link">
                                    <span data-feather="home"></span>
                                    Inicio <span class="sr-only">(current)</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="activity"></span>
                                    Balance
                                </a>
                            </li>

                            <!-- Acordion Componentes -->
                            <div class="accordion" id="accordionExample">

                                <a class="nav-link dropdown-item"  href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span data-feather="hard-drive"></span>Componentes</a>
                            </div>

                            <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">

                                    <a class="nav-link dropdown-item"  href="#" id="Asociacion" role="button">Asociación</a>

                                    <!-- Acordion Concentradores -->
                                    <a class="nav-link dropdown-item"  href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#collapseConcentrador" aria-expanded="true" aria-controls="collapseConcentrador">Concentradores</a>
                                    <div id="collapseConcentrador" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <a class="dropdown-item" href="#" id="VerConcentrador"> Concentradores</a>
                                        <a class="dropdown-item" href="#" id="CrearConcentrador"> Crear concentrador</a>
                                        <a class="dropdown-item" href="#" id="GestionConcentrador"> Habilitar / Deshabilitar</a>
                                        <br>
                                    </div>
                                    <!-- Fin Acordion Concentradores -->
                                    <!-- Acordion Medidores -->
                                    <a class="nav-link dropdown-item"  href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#collapseMedidor" aria-expanded="true" aria-controls="collapseMedidor">Medidores</a>
                                    <div id="collapseMedidor" class="collapse" aria-labelledby="headingOne">
                                        <a class="dropdown-item" href="#" id="VerMedidor"> Medidores</a>
                                        <a class="dropdown-item" href="#" id="CrearMedidor"> Crear medidor</a>
                                        <a class="dropdown-item" href="#" id="GestionMedidor"> Habilitar / Deshabilitar</a>
                                        <a class="dropdown-item" href="#" id="CorteReconexion">Corte y reconexion</a>
                                        <br>
                                    </div>
                                    <!-- Fin Acordion Medidores -->                                    
                                    <!-- Acordion Modem -->
                                    <a class="nav-link dropdown-item"  href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#collapseModem" aria-expanded="true" aria-controls="collapseModem">Modem</a>
                                    <div id="collapseModem" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <a class="dropdown-item" href="#" id="VerModem"> Modem</a>
                                        <a class="dropdown-item" href="#" id="CrearModem"> Crear modem</a>
                                        <br>
                                    </div>
                                    <!-- Fin Acordion Modem -->
                                    <!-- Acordion Transformadores -->
                                    <a class="nav-link dropdown-item"  href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#collapseTransformador" aria-expanded="true" aria-controls="collapseTransformador">Transformadores</a>
                                    <div id="collapseTransformador" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <a class="dropdown-item" href="#" id="VerTransformador"> Transformadores</a>
                                        <a class="dropdown-item" href="#" id="CrearTransformador"> Crear transformador</a>
                                        <a class="dropdown-item" href="#" id="GestionTransformador"> Habilitar / Deshabilitar</a>
                                        <br>
                                    </div>
                                    <!-- Fin Acordion Transformadores -->
                                </div>
                            </div>

                            <!-- Fin Acordion Componentes -->

                            <!-- Accordion Users -->
                            <div class="accordion" id="accordionExample">
                                <a class="nav-link dropdown-item" href="#" id="navbarDropdown" role="button" data-toggle="collapse"
                                   data-target="#collapseTwo">
                                    <span data-feather="users"></span>Usuarios</a>
                            </div>
                            <div id="collapseTwo" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">                                
                                    <a class="nav-link dropdown-item" href="#" id="Paginas" >Páginas</a>
                                    <a class="nav-link dropdown-item" href="#" id="VerUsuarios" >Usuarios</a>
                                    <a class="nav-link dropdown-item" href="#" id="CrearUsuario" >Crear usuario</a>                                  
                                </div>
                                <br>
                            </div>
                            <!-- Final Accordion Users -->
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="Reportes">
                                    <span data-feather="bar-chart-2"></span>
                                    Reportes / Eventos
                                </a>
                            </li>       
                            <!-- Accordion Tareas Programadas -->
                            <div class="accordion" id="accordionExample">
                                <a class="nav-link dropdown-item" href="#" id="navbarDropdown" role="button" data-toggle="collapse"
                                   data-target="#collapseTareas" >
                                    <span data-feather="list"></span>Tareas programadas</a>
                            </div>
                            <div id="collapseTareas" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <a class="nav-link dropdown-item" href="#" id="VerTareas" >Tareas programadas</a>
                                    <a class="nav-link dropdown-item" href="#" id="CrearTarea" >Crear tarea</a>
                                </div>
                                <br>
                            </div>
                            <!-- Final Accordion Tareas Programadas -->
                            <!-- Accordion Extern Systems -->
                            <div class="accordion" id="accordionExample">
                                <a class="nav-link dropdown-item" href="#" id="navbarDropdown" role="button" data-toggle="collapse"
                                   data-target="#collapseThree" >
                                    <span data-feather="layers"></span>Sistemas Externos</a>
                            </div>
                            <div id="collapseThree" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <a class="nav-link dropdown-item" href="#" id="VerSE" >Sistemas externos</a>
                                    <a class="nav-link dropdown-item" href="#" id="CrearSE" >Crear sistema</a>
                                </div>
                                <br>
                            </div>
                            <!-- Final Accordion Extern Systems -->
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="Valores">
                                    <span data-feather="zap"></span>
                                    Valores instantaneos
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div class="container">
                    <div id="Contenido">
                        <div class="row">
                            <div class="col-lg-12 col-sm-12">
                                <div class="form-group">
                                    <h2 class="text-center">INPETEL CLOUD</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="card" style="box-shadow: 5px 5px 5px 5px #2222; border-radius: 10px;">
                                    <img src="../../template/img/Concentrador.jpg" alt="Imagen Concentrador" width="auto" height="200">
                                    <div class="card-body"> 
                                        <h5 class="card-title">Concentradores</h5>
                                        <h6 class="card-subtitle text-muted" id="cantidadCnc"></h6><hr>
                                        <h6 class="card-text">Marcas</h6>
                                        <p class="card-text mb-1" id="cantidadCncCircutor"></p>
                                        <p class="card-text mb-1" id="cantidadCncMyC"></p>
                                        <p class="card-text" id="cantidadCncADD"></p><hr>
                                        <p class="card-text mb-1" style="color:#339900;" id="cantidadCncActivos"></p>
                                        <p class="card-text" style="color:#ffcc00;" id="cantidadCncInactivos"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card" style="box-shadow: 5px 5px 5px 5px #2222; border-radius: 10px;">
                                    <img src="../../template/img/Medidor.jpg" alt="Imagen Medidor" width="auto" height="200">
                                    <div class="card-body"> 
                                        <h5 class="card-title">Medidores</h5>
                                        <h6 class="card-subtitle text-muted" id="cantidadMed"></h6><hr>
                                        <h6 class="card-text">Marcas</h6>
                                        <p class="card-text mb-1" id="cantidadMedCircutor"></p>
                                        <p class="card-text mb-1" id="cantidadMedMyC"></p>
                                        <p class="card-text" id="cantidadMedADD"></p><hr>
                                        <p class="card-text mb-1" style="color:#339900;" id="cantidadMedActivos"></p>
                                        <p class="card-text" style="color:#ffcc00;" id="cantidadMedInactivos"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card" style="box-shadow: 5px 5px 5px 5px #2222; border-radius: 10px;">
                                    <img src="../../template/img/Modem.jpg" alt="Imagen Modem>" width="auto" height="200">
                                    <div class="card-body"> 
                                        <h5 class="card-title">Modems</h5>
                                        <h6 class="card-subtitle text-muted" id="cantidadMdm"></h6><hr>
                                        <h6 class="card-text">Marcas</h6>
                                        <p class="card-text mb-1" id="mdmHuawei"></p>
                                        <p class="card-text mb-1" id="mdmQualcomm"></p>
                                        <p class="card-text mb-1" id="mdmTelit"></p>
                                        <p class="card-text mb-1" id="mdmSiemens"></p>
                                        <p class="card-text mb-1" id="mdmMotorola"></p>
                                        <p class="card-text" id="mdmWavecom"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card" style="box-shadow: 5px 5px 5px 5px #2222; border-radius: 10px;">
                                    <img src="../../template/img/Transformador.jpg" alt="Imagen Transformador" width="auto" height="200">
                                    <div class="card-body"> 
                                        <h5 class="card-title">Transformadores</h5>
                                        <h6 class="card-subtitle text-muted" id="cantidadTran"></h6><hr>
                                        <h6 class="card-text">Tipos de transformadores</h6>
                                        <p class="card-text mb-1" id="tranMonofasico"></p>
                                        <p class="card-text" id="tranTrifasico"></p><hr>
                                        <p class="card-text mb-1" style="color:#339900;" id="cantidadTranActivos"></p>
                                        <p class="card-text" style="color:#ffcc00;" id="cantidadTranInactivos"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </main>
    </body>

    <script src="../../template/js/jquery-3.3.1.js"></script>
    <script src="../../template/js/jquery.dataTables.min.js"></script>
    <script src="../../template/js/dataTables.bootstrap4.min.js"></script>
    <script src="../../template/js/dataTables.buttons.min.js"></script>
    <script src="../../template/js/select2.min.js"></script>
    <script src="../../template/js/buttons.flash.min.js"></script>
    <script src="../../template/js/xlsx.full.min.js"></script>
    <script src="../../template/js/jszip.min.js"></script>
    <script src="../../template/js/pdfmake.min.js"></script>
    <script src="../../template/js/vfs_fonts.js"></script>
    <script src="../../template/js/buttons.html5.min.js"></script>
    <script src="../../template/js/buttons.print.min.js"></script>
    <script src="../../template/js/bootstrap.min.js"></script>
    <script src="../../template/js/bootstrap.bundle.js"></script>
    <script src="../../template/js/popper.min.js"></script>    
    <script src="../../template/js/toastr.min.js"></script>
    <script src="../../template/js/all.js"></script>
    <script src="../../template/js/Chart.min.js"></script>
    <script src="../../template/js/hammer.js"></script>
    <script src="../../template/js/zoom.js"></script>
    <script src="../../template/js/moment.js"></script>
    <script src="../../template/js/jspdf.min.js"></script>
    <script src="../../template/js/html2canvas.min.js"></script>
    <script src="../../template/js/feather.min.js"></script> 
    <script src="../../template/js/jquery.gridster.min.js"></script>
    <script src="../../template/js/reloj.js"></script>       
    <script src="../../models/Configs/app.configs.read.js"></script>
    <script src="../../models/Dashboard/app.dashboard.js"></script> 
    <script src="../../models/Dashboard/app.home.js"></script>


    <!--<script type="text/javascript" src="../../template/js/DataTable/JSZip-2.5.0/jszip.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/pdfmake-0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/DataTables-1.10.23/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/DataTables-1.10.23/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/Buttons-1.6.5/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/Buttons-1.6.5/js/buttons.bootstrap4.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/Buttons-1.6.5/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="../../template/js/DataTable/Buttons-1.6.5/js/buttons.print.min.js"></script>-->
</html>
