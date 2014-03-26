var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

       var muestraRuta = function(){
        console.log("Pintar ruta");
    };
    var muestraCamion = function(){
        console.log("Pintar camion");
    };
    var muestraRemolque = function(){
        console.log("Pintar remolque");
    };


    var mostrarAlertas = function(alertas) {
        var $ul = $('#listaAlertas');
        $ul.empty();
        for (var i = 0; i < alertas.length; i++) {
            var $li = createElement(alertas[i].descripcion);
            $ul.append($li); ///Cambiar para hacer el append fuera
        }
    };
    var esconderAlertas = function(alertas) {
        var $ul = $('#listaAlertas');
        $ul.empty();
    };

    return {
        mostrarAlertas : mostrarAlertas,
        esconderAlertas : esconderAlertas,
        muestraRuta : muestraRuta
    };

})();