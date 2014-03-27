var APP = APP||{};
APP.Controller = (function() {
    "use strict";

    var nuevasAlertas = function(e){
        APP.Pedir.getInfo(function(nuevasAlertas, textStatus, jqXHR){
            if (nuevasAlertas.length > 0){
                APP.UI.avisoAlertas(nuevasAlertas);
            }
        }, 'data/avisoAlertas.json');
    };

    var listaAlertas = function(e){
        clearInterval(nuevasAlertas);
        APP.Pedir.getInfo(function(alertas, textStatus, jqXHR){
            if (alertas.length > 0){
                APP.UI.mostrarAlertas(alertas);
            } else APP.UI.esconderAlertas(alertas);
        }, 'data/alertas.json');
    };



     return {
        listaAlertas : listaAlertas,
        nuevasAlertas : nuevasAlertas
    };
})();