var tito = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'http://www.geoplugin.net/xml.gp?ip=109.122.89.100');
    xmlhttp.send();

    xmlhttp.onload = function () {
        var xmlDoc = xmlhttp.responseXML;
        var ipAddress = xmlDoc.querySelector('geoplugin_request');
        var input = document.querySelector('input');
        input.value = ipAddress + '';
    }

}
var button = document.querySelector('button');

button.addEventListener("click", tito)