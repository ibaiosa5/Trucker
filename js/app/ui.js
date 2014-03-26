var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

    var mostrarRuta = function(ruta){
        console.log("Pintar ruta");
        var $ul = $('#listaDatos');

        $("#map").addWay({
        start: "15 avenue des champs Elysées 75008 Paris", // Postal address for the start marker (obligatory)
        end:  [48.895651, 2.290569], // Postal Address or GPS coordinates for the end marker (obligatory)
        route : 'way', // Block's ID for the route display (optional)
        langage : 'english', // language of the route detail (optional)
        step: [ // Array of steps (optional)
            [48.85837009999999, 2.2944813000000295], // Postal Address or GPS coordinates of the step
            "Porte Maillot, 75017 Paris" // Postal Address or GPS coordinates of the step
        ]
    });
        $ul.empty();
        $ul.append('<li>Ruta: ' + ruta.idRuta + '</li>');
        $ul.append('<li>KML: ' + ruta.kml + '</li>');
    };
    var mostrarCamion = function(camion){
        console.log("Pintar camion");
        var $ul = $('#listaDatos');
        $ul.empty();
        $ul.append('<li>Identificador: ' + camion.idCamion + '</li>');
        $ul.append('<li>Matricula: ' + camion.matricula + '</li>');
    };

    var mostrarRemolque = function(remolque){
        console.log("Pintar remolque");
        var $ul = $('#listaDatos');
        $ul.empty();
        $ul.append('<li>Identificador: ' + remolque.idRemolque + '</li>');
        $ul.append('<li>Matricula: ' + remolque.matricula + '</li>');
    };

    var mostrarAlertas = function(alertas) {
        var $ul = $('#listaDatos');
        $ul.empty();
        var lis = [];
        for (var i = 0; i < alertas.length; i++) {
            var $li = createElement(alertas[i].descripcion);
            lis.push($li);
        }
        $ul.append(lis);
    };

    var mostrarConductor = function(conductor){
        var $ul = $('#listaDatos');
        $ul.empty();
        $ul.append('<li>Identificador: ' + conductor.idConductor + '</li>');
        $ul.append('<li>Nombre: ' + conductor.nombre + '</li>');
        $ul.append('<li>Apellido: ' + conductor.apellido + '</li>');
    };

    var esconderAlertas = function(alertas) {
        var $ul = $('#listaDatos');
        $ul.empty();
    };

    var avisoAlertas = function(alertas) {
        for (var i = 0; i < alertas.length; i++) {
            //console.log(alertas[i].descripcion);
            //alert(alertas[i].descripcion);
        }
    };

        var avisoTiempo = function(tiempo) {

            console.log("estadoTiempo : " + tiempo);

    };

    return {
        mostrarAlertas : mostrarAlertas,
        esconderAlertas : esconderAlertas,
        mostrarConductor : mostrarConductor,
        mostrarRuta : mostrarRuta,
        mostrarCamion : mostrarCamion,
        mostrarRemolque : mostrarRemolque,
        avisoAlertas : avisoAlertas
    };

})();