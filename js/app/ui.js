var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $$('<li/>');

            $li.append(descripcion);

            return $li;



    };

    var mostrarAlertas = function(alertas) {
        var ul = $('#listaAlertas');
        $ul.empty();
        for (var i = 0; i < alertas.length; i++) {
            var $li = createElement(alertas[i].descripcion);
            $ul.append($li); ///Cambiar para hacer el append fuera
        }
        console.log($ul);
    };
    var esconderAlertas = function(alertas) {
        var ul = $('#listaAlertas');
        $ul.empty();
    };

    return {
        mostrarAlertas : mostrarAlertas,
        esconderAlertas : esconderAlertas
    };

})();