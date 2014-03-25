var App = App||{};
App.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $$('<li/>');

            $li.append(descripcion);

            return $li;



    };

    var mostrarAlertas = function(alertas) {
        var listaAlertas = $('#listaAlertas');
        $ul.empty();
        for (var i = 0; i < alertas.length; i++) {
            var $li = createElement(alertas[i].descripcion);
            $ul.append($li); ///Cambiar para hacer el append fuera
        }
    };


    return {
        mostrarAlertas : mostrarAlertas
    };

})();