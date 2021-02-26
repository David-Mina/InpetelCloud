function readConfigTarea() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "../../../public/models/TareasProgramadas/app.variables.tareas.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}
function readConfigInitTarea() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "public/models/TareasProgramadas/app.variables.tareas.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}
