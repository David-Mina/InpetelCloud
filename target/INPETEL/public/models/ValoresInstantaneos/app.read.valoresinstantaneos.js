function readConfigValores() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "../../../public/models/ValoresInstantaneos/app.variables.valoresinstantaneos.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}
function readConfigInitValores() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "public/models/ValoresInstantaneos/app.variables.valoresinstantaneos.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}


