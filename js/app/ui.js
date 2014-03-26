var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

       var mostrarRuta = function(){
        console.log("Pintar ruta");
    };
    var mostrarCamion = function(){
        console.log("Pintar camion");
    };
    var mostrarRemolque = function(){
        console.log("Pintar remolque");
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

    return {
        mostrarAlertas : mostrarAlertas,
        esconderAlertas : esconderAlertas,
        mostrarRuta : mostrarRuta,
        mostrarCamion : mostrarCamion,
        mostrarRemolque : mostrarRemolque
    };

})();